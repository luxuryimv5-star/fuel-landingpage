export type LegalParagraph = {
  readonly id: string;
  readonly content: string;
};

export type LegalSection = {
  readonly id: string;
  readonly heading: string;
  readonly paragraphs: readonly LegalParagraph[];
};

export type LegalDocument = {
  readonly id: string;
  readonly title: string;
  readonly sections: readonly LegalSection[];
  readonly contactEmail: string;
  readonly effectiveDate: string;
};

export const LEGAL_CONTACT_EMAIL = "info@fuel-us.com";
export const LEGAL_EFFECTIVE_DATE = "November 17, 2026";

export const TERMS_OF_SERVICE: LegalDocument = {
  id: "terms-of-service",
  title: "Terms and Conditions",
  contactEmail: LEGAL_CONTACT_EMAIL,
  effectiveDate: LEGAL_EFFECTIVE_DATE,
  sections: [
    {
      id: "acceptance-of-terms",
      heading: "Acceptance of Terms",
      paragraphs: [
        {
          id: "acceptance-1",
          content:
            "By downloading, installing, or using the FUEL iOS application (the \"App\"), you agree to be bound by these Terms and Conditions (the \"Terms\"). If you do not agree to these Terms, you may not use the App.",
        },
        {
          id: "acceptance-2",
          content:
            "These Terms form a legally binding agreement between you and Anointed Innovations LLC (\"Anointed Innovations,\" \"we,\" \"us,\" or \"our\").",
        },
      ],
    },
    {
      id: "description-of-service",
      heading: "Description of Service",
      paragraphs: [
        {
          id: "service-1",
          content:
            "FUEL helps drivers find the cheapest, safest, and most vehicle-appropriate gas stations nearby. The App provides real-time gas prices, vehicle fuel-type matching, distance information, and neighborhood safety scores.",
        },
        {
          id: "service-2",
          content:
            "Station prices, safety scores, and other information are sourced from third parties and user contributions. We endeavor to keep information accurate but do not guarantee that it is complete, reliable, or current.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "Eligibility",
      paragraphs: [
        {
          id: "eligibility-1",
          content:
            "You must be at least 13 years of age to use the App. By using the App, you represent and warrant that you meet this requirement.",
        },
      ],
    },
    {
      id: "app-store-terms",
      heading: "App Store and Third-Party Terms",
      paragraphs: [
        {
          id: "appstore-1",
          content:
            "The App is distributed through the Apple App Store and is subject to Apple's standard licensed application terms and conditions, which may impose additional requirements.",
        },
        {
          id: "appstore-2",
          content:
            "Use of the App may depend on third-party services (maps, location, payments) that are governed by their own terms and privacy policies.",
        },
      ],
    },
    {
      id: "user-conduct",
      heading: "User Conduct",
      paragraphs: [
        {
          id: "conduct-1",
          content:
            "You agree not to use the App to: violate any law; submit false or misleading price, safety, or station information; reverse-engineer, decompile, or tamper with the App; or use the App for any unauthorized commercial purpose.",
        },
        {
          id: "conduct-2",
          content:
            "We may suspend or terminate your access to the App at any time for conduct that we believe violates these Terms.",
        },
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual Property",
      paragraphs: [
        {
          id: "ip-1",
          content:
            "The App, its name, logo, design, and all content are owned by Anointed Innovations LLC or its licensors and are protected by copyright, trademark, and other laws. All rights not expressly granted are reserved.",
        },
      ],
    },
    {
      id: "disclaimer-of-warranties",
      heading: "Disclaimer of Warranties",
      paragraphs: [
        {
          id: "disclaimer-1",
          content:
            "The App and all information provided through it are distributed on an \"as is\" and \"as available\" basis, without warranties of any kind, whether express or implied, to the fullest extent permitted by applicable law.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of Liability",
      paragraphs: [
        {
          id: "liability-1",
          content:
            "To the fullest extent permitted by law, Anointed Innovations LLC is not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or related to your use of or inability to use the App.",
        },
      ],
    },
    {
      id: "termination",
      heading: "Termination",
      paragraphs: [
        {
          id: "termination-1",
          content:
            "We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including conduct we believe violates these Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      heading: "Governing Law",
      paragraphs: [
        {
          id: "governing-1",
          content:
            "These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict-of-law principles.",
        },
      ],
    },
    {
      id: "changes-to-these-terms",
      heading: "Changes to These Terms",
      paragraphs: [
        {
          id: "changes-1",
          content:
            "We may revise these Terms from time to time. Your continued use of the App after revised terms take effect constitutes your acceptance of the revised Terms.",
        },
      ],
    },
    {
      id: "contact-information",
      heading: "Contact Information",
      paragraphs: [
        {
          id: "contact-terms",
          content:
            "If you have questions about these Terms, please contact us at info@fuel-us.com.",
        },
      ],
    },
  ],
};

export const PRIVACY_POLICY: LegalDocument = {
  id: "privacy-policy",
  title: "Privacy Policy",
  contactEmail: LEGAL_CONTACT_EMAIL,
  effectiveDate: LEGAL_EFFECTIVE_DATE,
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      paragraphs: [
        {
          id: "intro-1",
          content:
            "This Privacy Policy explains how Anointed Innovations LLC collects, uses, shares, and protects your information when you use the FUEL iOS app (the \"App\").",
        },
      ],
    },
    {
      id: "information-we-collect",
      heading: "Information We Collect",
      paragraphs: [
        {
          id: "collect-1",
          content:
            "Location information. With your permission, the App collects precise location data so it can display nearby gas stations, distances, and station details relative to you.",
        },
        {
          id: "collect-2",
          content:
            "Vehicle information. You may provide your vehicle's fuel type so the App can filter and rank stations appropriate for your vehicle.",
        },
        {
          id: "collect-3",
          content:
            "Usage information. We collect information about how you interact with the App, including feature usage, searches, and performance or crash data.",
        },
        {
          id: "collect-4",
          content:
            "Device information. We collect your device model, operating system version, App version, and similar technical details.",
        },
      ],
    },
    {
      id: "how-we-use-information",
      heading: "How We Use Your Information",
      paragraphs: [
        {
          id: "use-1",
          content:
            "We use your information to operate and improve the App, including showing nearby stations and prices, matching stations to your vehicle, calculating distances, displaying safety scores, providing customer support, and preventing fraud or abuse.",
        },
      ],
    },
    {
      id: "sharing-and-disclosure",
      heading: "Sharing and Disclosure",
      paragraphs: [
        {
          id: "sharing-1",
          content:
            "We do not sell your personal information. We may share information with service providers that support our operations (hosting, analytics, and crash reporting), and with Apple as required for App Store distribution.",
        },
        {
          id: "sharing-2",
          content:
            "We may also disclose information when required by law, or to protect the rights, safety, or property of Anointed Innovations LLC, our users, or others.",
        },
      ],
    },
    {
      id: "data-security",
      heading: "Data Security",
      paragraphs: [
        {
          id: "security-1",
          content:
            "We use industry-standard technical and organizational measures designed to protect your information. No method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.",
        },
      ],
    },
    {
      id: "data-retention",
      heading: "Data Retention",
      paragraphs: [
        {
          id: "retention-1",
          content:
            "We retain location and usage data only as long as necessary to operate and improve the App. You may request deletion of your data by contacting us at the address below.",
        },
      ],
    },
    {
      id: "your-rights-and-choices",
      heading: "Your Rights and Choices",
      paragraphs: [
        {
          id: "rights-1",
          content:
            "You may disable location services for the App in your device settings at any time; doing so will limit the App's core functionality. You may also request access to, correction of, or deletion of your personal information by contacting us.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      heading: "Children's Privacy",
      paragraphs: [
        {
          id: "children-1",
          content:
            "The App is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us so we can delete it.",
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      heading: "Changes to This Policy",
      paragraphs: [
        {
          id: "policy-changes-1",
          content:
            "We may update this Privacy Policy from time to time. Changes are effective when posted, and your continued use of the App constitutes acceptance of the updated policy.",
        },
      ],
    },
    {
      id: "privacy-contact-information",
      heading: "Contact Information",
      paragraphs: [
        {
          id: "contact-privacy",
          content:
            "If you have questions about this Privacy Policy or your data, please contact us at info@fuel-us.com.",
        },
      ],
    },
  ],
};
