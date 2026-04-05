import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "LMLM Safety & Deployment",
};

export default function LMLMSafetyDeploymentPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>LMLM Safety & Deployment Standard</h1>
        <p>
          This document defines the minimum safety, security, and deployment
          requirements for systems powered by LMLM.
        </p>

        <h2>Minimum Deployment Controls</h2>
        <ul>
          <li>Authentication</li>
          <li>Rate limiting</li>
          <li>Abuse monitoring</li>
          <li>Logging</li>
          <li>Output filtering</li>
          <li>Scoped access controls</li>
        </ul>

        <h2>Tool-Using Systems</h2>
        <p>
          If LMLM is connected to code execution, APIs, tools, or databases,
          deployments should include least-privilege permissions, auditability,
          and kill-switch capability.
        </p>

        <h2>High-Risk Deployment Restrictions</h2>
        <p>
          LMLM should not act as an unreviewed autonomous authority in medical,
          legal, lending, law enforcement, or critical infrastructure workflows.
        </p>

        <h2>Operational Principle</h2>
        <p>
          The more autonomy LMLM receives, the more control and accountability
          the deployment must implement.
        </p>
      </Prose>
    </DocsLayout>
  );
}
