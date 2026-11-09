'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react"

type Theme = "light" | "dark" | "device"

interface ThemeContextValue {
  theme: Theme
  setTheme: (next: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const VALID_THEMES: readonly Theme[] = ["light", "dark", "device"]

const isTheme = (value: string | null): value is Theme =>
  VALID_THEMES.includes(value as Theme)

const readSavedTheme = (): Theme => {
  try {
    const saved = localStorage.getItem("fuel-theme")
    return isTheme(saved) ? saved : "device"
  } catch {
    return "device"
  }
}

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("device")
  const themeRef = useRef<Theme>("device")

  const applyTheme = useCallback((next: Theme): void => {
    setTheme(next)
    themeRef.current = next
    try {
      localStorage.setItem("fuel-theme", next)
    } catch {
      // storage unavailable — theme still toggles in memory
    }
    const html = document.documentElement
    if (next === "dark") {
      html.classList.add("dark")
    } else if (next === "light") {
      html.classList.remove("dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }, [])

  // Initialize exactly once on mount; read the stored value into a ref so
  // the media handler never relies on a closure-stale theme.
  useEffect(() => {
    const initial = readSavedTheme()
    themeRef.current = initial
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial)
    applyTheme(initial)

    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (): void => {
      if (themeRef.current === "device") {
        if (media.matches) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }
    media.addEventListener("change", handler)
    return (): void => {
      media.removeEventListener("change", handler)
    }
  }, [applyTheme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
