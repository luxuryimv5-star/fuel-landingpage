"use client";

import { motion } from "framer-motion";

interface Step {
  readonly step: number;
  readonly title: string;
  readonly description: string;
}

interface HowItWorksProps {
  readonly sectionId?: string;
}

const STEPS: readonly Step[] = [
  {
    step: 1,
    title: "Set up your vehicle",
    description: "Tell FUEL your fuel type (regular, plus, premium, or diesel) so we match stations to your car.",
  },
  {
    step: 2,
    title: "Find nearby stations",
    description: "Open the map view to see pin-dropped gas stations near you, ranked by price, distance, and safety.",
  },
  {
    "step": 3,
    "title": "Save and go",
    "description": "Tap a station for full price details, safety score, and one-tap navigation to get there.",
  },
];

export function HowItWorks({ sectionId = "how-it-works" }: HowItWorksProps) {
  return (
    <section
      id={sectionId}
      className="py-20 px-6 sm:py-28 lg:py-32"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Fuel smarter in three steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            From vehicle setup to the pump, FUEL makes every fill-up simpler.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + step.step * 0.08,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center lg:text-left"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold text-lg mb-6 lg:mb-0 lg:mr-6">
                {step.step}
              </div>
              <div className="max-w-md">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {step.step < STEPS.length && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 lg:mt-0 lg:mr-4 lg:ml-[-4px] lg:w-[1px] lg:h-12 bg-border hidden lg:block"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
