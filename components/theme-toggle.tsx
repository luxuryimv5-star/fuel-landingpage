'use client'

import { useCallback } from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"

type Theme = "light" | "dark" | "device"

const ICONS: Record<Theme, React.ReactNode> = {
  light: <Sun className="h-4 w-4" />,
  dark: <Moon className="h-4 w-4" />,
  device: <Monitor className="h-4 w-4" />,
}

const LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  device: "Device",
}

export function ThemeToggle({
  className,
}: {
  className?: string
} = {}) {
  const { theme, setTheme } = useTheme()

  const handleClick = useCallback((): void => {
    const next: Theme =
      theme === "light" ? "dark" : theme === "dark" ? "device" : "light"
    setTheme(next)
  }, [theme, setTheme])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center p-1 text-foreground hover:bg-accent transition-colors rounded-md ${className ?? ""}`}
      aria-label="Toggle theme"
      title={LABELS[theme]}
    >
      {ICONS[theme]}
    </button>
  )
}
