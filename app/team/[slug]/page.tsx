import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { teamMembers, type TeamMember } from "@/components/team-members";
import { TeamMemberContent } from "@/components/team-member-content";

interface TeamMemberPageParams {
  readonly slug: string;
}

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<TeamMemberPageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member: TeamMember | undefined = teamMembers.find((m) => m.slug === slug);
  if (!member) {
    return { title: "Team Member | FUEL" };
  }
  return {
    title: `${member.name} | FUEL Team`,
    description: `${member.name} on the FUEL team.`,
  };
}

export default async function TeamMemberPage({
  params,
}: {
  readonly params: Promise<TeamMemberPageParams>;
}) {
  const { slug } = await params;
  const member: TeamMember | undefined = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <section className="py-24 px-6 sm:py-28 lg:py-40">
      <div className="max-w-3xl mx-auto">
        <TeamMemberContent member={member} />
      </div>
    </section>
  );
}
