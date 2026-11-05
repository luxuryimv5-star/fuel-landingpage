import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface TeamMemberPageParams {
  readonly slug: string;
}

// Blank placeholder roster — the team fills in real member content here.
const TEAM_MEMBERS: readonly { readonly slug: string; readonly name: string }[] = [
  { slug: "noah-goss", name: "Noah Goss" },
];

export function generateMetadata({
  params,
}: { readonly params: TeamMemberPageParams }): Metadata {
  const member = TEAM_MEMBERS.find((m) => m.slug === params.slug);
  if (!member) {
    return { title: "Team Member | FUEL" };
  }
  return {
    title: `${member.name} | FUEL Team`,
    description: `${member.name} on the FUEL team.`,
  };
}

export default function TeamMemberPage({
  params,
}: {
  readonly params: TeamMemberPageParams;
}) {
  const member = TEAM_MEMBERS.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <section className="py-24 px-6 sm:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
          {member.name}
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Team member page — content to be added by the team.
        </p>
      </div>
    </section>
  );
}
