import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "LMLM",
};

export default function LMLMPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>LMLM</h1>
        <p>
          LMLM is the flagship model family developed under QUBUHUB.
        </p>

        <p>
          It is built for language, reasoning, structured assistance, software
          workflows, and bounded intelligent automation.
        </p>

        <h2>Design Goals</h2>
        <ul>
          <li>Capability</li>
          <li>Governability</li>
          <li>Deployment readiness</li>
          <li>Safety-bounded usefulness</li>
        </ul>

        <h2>Documentation</h2>
        <ul>
          <li>Model Card</li>
          <li>Behavior Specification</li>
          <li>Safety & Deployment Standard</li>
          <li>Transparency Note</li>
        </ul>
      </Prose>
    </DocsLayout>
  );
}
