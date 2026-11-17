"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { type TeamMember } from "@/components/team-members";

interface TeamMemberContentProps {
  readonly member: TeamMember;
}

export function TeamMemberContent({ member }: TeamMemberContentProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
        {member.name}
      </h1>
      <p className="text-lg text-muted-foreground mb-8">{member.role}</p>

      {member.image ? (
        <Image
          src={member.image}
          alt={`${member.name} headshot`}
          width={96}
          height={96}
          className="w-24 h-24 rounded-full border border-border bg-background object-cover mb-8"
          priority
        />
      ) : (
        <div
          className="w-24 h-24 rounded-full border border-border bg-fuel-coral-primary text-white font-bold text-xl mb-8 flex items-center justify-center"
        >
          {member.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .toUpperCase()}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
          <p className="text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Contribution
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {member.contributions}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
