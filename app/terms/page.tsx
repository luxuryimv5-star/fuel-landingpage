import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_CONTACT_EMAIL, TERMS_OF_SERVICE } from "@/components/legal-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms and Conditions — FUEL",
    description:
      "Terms and Conditions governing your use of the FUEL app. Find cheaper, safer gas stations nearby. Questions? Contact us at info@fuel-us.com.",
    openGraph: {
      title: "Terms and Conditions — FUEL",
      description:
        "Terms and Conditions governing your use of the FUEL app. Contact us at info@fuel-us.com.",
      type: "website",
      url: "https://fuel-us.com/terms",
    },
  };
}

export default function TermsPage() {
  const document = TERMS_OF_SERVICE;

  return (
    <main id="terms" className="flex-1 bg-background text-foreground">
      <article className="max-w-2xl mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-2">
            {document.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective date: {document.effectiveDate}
          </p>
        </header>

        {document.sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-10">
            <h2
              id={`terms-${section.id}-heading`}
              className="text-xl font-semibold text-foreground mb-3"
            >
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.id}
                className="text-base text-foreground leading-relaxed mb-4 last:mb-0"
              >
                {paragraph.content}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-14 p-8 rounded-lg border border-fuel-beige-border bg-fuel-beige-background">
          <p className="text-sm text-muted-foreground mb-3">
            Questions about these terms? Contact us:
          </p>
          <p className="text-base font-medium text-foreground mb-0">
            <a
              href={`mailto:${LEGAL_CONTACT_EMAIL}`}
              className="text-fuel-coral-primary font-medium hover:underline transition-colors"
            >
              {LEGAL_CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <nav className="mt-14">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
          >
            ← Return to homepage
          </Link>
        </nav>
      </article>
    </main>
  );
}
