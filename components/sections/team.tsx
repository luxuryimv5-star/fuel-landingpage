"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { teamMembers } from "@/components/team-members";

interface TeamProps {
  readonly sectionId?: string;
}

interface TeamMemberCardProps {
  readonly member: (typeof teamMembers)[number];
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isFocused, setIsFocused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      key={member.slug}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{
        opacity: isFocused ? 1 : 0,
        y: isFocused ? 0 : 20,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.4,
        delay: prefersReducedMotion ? 0 : 0.2 + teamMembers.indexOf(member) * 0.05,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/team/${member.slug}`}
        className="block"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <div className="flex flex-col items-center text-center">
          <div
            className="w-24 h-24 rounded-full overflow-hidden border border-border bg-background mb-4"
          >
            {member.image ? (
              <Image
                src={member.image}
                alt={`${member.name} headshot`}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center bg-fuel-coral-primary text-white font-bold text-xl"
              >
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .toUpperCase()}
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {member.role}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function Team({ sectionId = "team" }: TeamProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id={sectionId}
      className="py-20 px-6 sm:py-28 lg:py-32 bg-muted"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            id="team-heading"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Meet the team
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            The people building FUEL. Member pages are left blank for the team to fill in.
          </motion.p>
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.slug} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
