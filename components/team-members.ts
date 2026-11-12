export type TeamMember = {
  readonly slug: string;
  readonly name: string;
  readonly role: string;
  readonly image?: string;
  readonly bio: string;
  readonly contributions: string;
};

export const teamMembers: readonly TeamMember[] = [
  {
    slug: "noah-goss",
    name: "Noah Goss",
    role: "Product Manager",
    bio: "Product lead for FUEL.",
    contributions: "Product lead for FUEL.",
  },
];
