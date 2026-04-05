# app/agent-safety/page.tsx
import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "Agent Safety",
};

export default function AgentSafetyPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>QUBUHUB Agent Safety Policy</h1>
        <p>
          This policy defines the safety boundaries for AI systems, autonomous
          agents, and tool-using models operating under QUBUHUB.
        </p>

        <h2>Disallowed Assistance</h2>
        <ul>
          <li>Self-harm facilitation</li>
          <li>Violent wrongdoing</li>
          <li>Exploitation and abuse</li>
          <li>Fraud and deception</li>
          <li>Cyber abuse</li>
          <li>Privacy abuse</li>
          <li>Dangerous scientific misuse</li>
        </ul>

        <h2>High-Risk Deployment Controls</h2>
        <p>
          Deployments with code execution, database write access, payment
          capability, or messaging authority must use stronger safeguards.
        </p>

        <h2>Prompt Injection Resistance</h2>
        <p>
          Untrusted content must never be treated as governing authority merely
          because it appears in context.
        </p>

        <h2>Refusal Standard</h2>
        <p>
          Refusals should be firm, non-escalatory, and must not become
          workarounds.
        </p>
      </Prose>
    </DocsLayout>
  );
}
