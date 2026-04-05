import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "Agent Terms",
};

export default function AgentTermsPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>QUBUHUB Agent Terms of Use</h1>
        <p>
          These terms govern access to and use of QUBUHUB AI systems, including
          assistants, agents, copilots, APIs, automations, and model-driven
          software features.
        </p>

        <h2>Permitted Use</h2>
        <p>
          QUBUHUB systems may be used for legitimate, lawful, and non-harmful
          purposes such as research, development, education, and productivity.
        </p>

        <h2>Prohibited Use</h2>
        <ul>
          <li>Self-harm facilitation</li>
          <li>Violence enablement</li>
          <li>Fraud and impersonation</li>
          <li>Credential harvesting</li>
          <li>Malware deployment</li>
          <li>Privacy abuse</li>
        </ul>

        <h2>Autonomous and Tool-Using Behavior</h2>
        <p>
          Operators remain responsible for configuration, permission scope,
          downstream actions, and real-world outcomes.
        </p>

        <h2>Output Reliability</h2>
        <p>
          Generated output is assistance, not guaranteed truth.
        </p>

        <h2>Enforcement</h2>
        <p>
          QUBUHUB may restrict or terminate access where use violates policy,
          safety, law, or platform integrity requirements.
        </p>
      </Prose>
    </DocsLayout>
  );
}
