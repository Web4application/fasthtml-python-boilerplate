export const siteConfig = {
  name: "QUBUHUB",
  title: "QUBUHUB Trust Center",
  description:
    "Governance, safety, security, and transparency for QUBUHUB AI systems and the LMLM model family.",
  url: "https://qubuhub.com",
  modelFamily: "LMLM",
};

export const docsNav = [
  {
    section: "Platform",
    items: [
      { title: "Trust Center", href: "/trust-center" },
      { title: "AI Constitution", href: "/ai-constitution" },
      { title: "AI Charter", href: "/ai-charter" },
      { title: "Model Behavior", href: "/model-behavior" },
      { title: "Agent Terms", href: "/agent-terms" },
      { title: "Agent Safety", href: "/agent-safety" },
      { title: "Security", href: "/security" },
      { title: "Transparency", href: "/transparency" },
    ],
  },
  {
    section: "Models",
    items: [
      { title: "LMLM", href: "/models/lmlm" },
      { title: "LMLM Model Card", href: "/models/lmlm/model-card" },
      { title: "LMLM Behavior Spec", href: "/models/lmlm/behavior-spec" },
      {
        title: "LMLM Safety & Deployment",
        href: "/models/lmlm/safety-deployment",
      },
      {
        title: "LMLM Transparency",
        href: "/models/lmlm/transparency",
      },
    ],
  },
];
