import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "Trust Center",
};

export default function TrustCenterPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>Trust Center</h1>
        <p>
          QUBUHUB builds intelligent systems for real-world use. That means
          capability alone is not enough.
        </p>

        <p>
          Our systems are designed around truthful operation, bounded autonomy,
          user agency, safety by design, and accountable deployment.
        </p>

        <h2>Governance</h2>
        <ul>
          <li>AI Constitution</li>
          <li>Model Behavior Standard</li>
          <li>Agent Safety Policy</li>
          <li>Agent Terms</li>
          <li>Security Policy</li>
        </ul>

        <h2>Model Family</h2>
        <p>
          Our flagship model family is <strong>LMLM</strong>.
        </p>

        <p>
          LMLM operates under the same constitutional and deployment standards
          as the broader QUBUHUB platform.
        </p>

        <h2>Security</h2>
        <p>
          We support responsible disclosure and security research conducted in
          good faith.
        </p>

        <h2>Transparency</h2>
        <p>
          Users and developers should understand what our systems can do, what
          they cannot do, and how they are governed.
        </p>
      </Prose>
    </DocsLayout>
  );
}
