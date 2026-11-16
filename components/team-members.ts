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
  {
    slug: "kenneth-russell",
    name: "Kenneth Russell",
    role: "Full Stack Engineer",
    bio: " Hi my name is Kenneth Russell and I am a Full Stack Engineer with the app FUEL. I am also an intern at JournI. I am passionate about building innovative solutions and contributing to the success of my teams, and the community around me. Through JournI I learn how to expand on my coding skills and to be able to learn how to properly work with a team.  ",
    contributions: "Engineer at FUEL. suggested and implemented the idea of using a database to store user data and other information. ",
  },
];
