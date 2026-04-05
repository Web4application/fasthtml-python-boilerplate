import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>QUBUHUB Security Policy</h1>
        <p>
          QUBUHUB is committed to protecting the confidentiality, integrity, and
          availability of its systems, users, models, infrastructure, and data
          flows.
        </p>

        <h2>Reporting Security Issues</h2>
        <p>
          Contact: <code>security@qubuhub.com</code>
        </p>

        <h2>Authorized Security Research</h2>
        <p>
          We support good-faith research conducted responsibly and within safe
          operational boundaries.
        </p>

        <h2>Prohibited Security Activity</h2>
        <ul>
          <li>Destructive testing</li>
          <li>Denial-of-service attacks</li>
          <li>Credential stuffing</li>
          <li>Unauthorized data access</li>
          <li>Persistence attempts</li>
        </ul>

        <h2>AI-Specific Threat Model</h2>
        <ul>
          <li>Prompt injection</li>
          <li>Hidden instruction leakage</li>
          <li>Retrieval poisoning</li>
          <li>Unsafe tool invocation</li>
          <li>Privilege escalation through agent chains</li>
        </ul>
      </Prose>
    </DocsLayout>
  );
}
