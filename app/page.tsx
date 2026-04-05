import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <PageHero
        kicker="QUBUHUB"
        title="Intelligence needs a constitution."
        description={`${siteConfig.name} publishes its governance, safety, security, and transparency standards openly. The ${siteConfig.modelFamily} model family operates under these same bounded principles.`}
      />

      <div className="container" style={{ paddingBottom: 72 }}>
        <div className="grid grid-2">
          <Link href="/trust-center" className="link-card">
            <h3>Trust Center</h3>
            <p className="muted">
              Central index for governance, safety, transparency, and security.
            </p>
          </Link>

          <Link href="/ai-constitution" className="link-card">
            <h3>AI Constitution</h3>
            <p className="muted">
              Foundational doctrine for QUBUHUB systems and model families.
            </p>
          </Link>

          <Link href="/models/lmlm" className="link-card">
            <h3>LMLM</h3>
            <p className="muted">
              Model family documentation, behavior, deployment, and transparency.
            </p>
          </Link>

          <Link href="/security" className="link-card">
            <h3>Security</h3>
            <p className="muted">
              Responsible disclosure, AI-specific threat model, and reporting policy.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
