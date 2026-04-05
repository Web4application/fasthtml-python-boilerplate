import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "LMLM Model Card",
};

export default function LMLMModelCardPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>LMLM Model Card</h1>
        <p>
          <strong>Model Family:</strong> LMLM
          <br />
          <strong>Maintained by:</strong> QUBUHUB
          <br />
          <strong>Version:</strong> 1.0
        </p>

        <h2>Overview</h2>
        <p>
          LMLM is a general-purpose AI model family for reasoning, language
          interaction, software assistance, structured generation, and bounded
          agentic workflows.
        </p>

        <h2>Intended Use</h2>
        <ul>
          <li>Conversational assistance</li>
          <li>Developer workflows</li>
          <li>Code support</li>
          <li>Summarization</li>
          <li>Classification</li>
          <li>Knowledge workflows</li>
        </ul>

        <h2>Strengths</h2>
        <p>
          LMLM is optimized for natural language interaction, task
          decomposition, reasoning assistance, and human-AI collaboration.
        </p>

        <h2>Limitations</h2>
        <p>
          LMLM may produce inaccurate information, fail under ambiguous
          instructions, or generate incomplete outputs.
        </p>

        <h2>Governance</h2>
        <p>
          LMLM is governed by the QUBUHUB AI Constitution, Model Behavior
          Standard, Agent Safety Policy, Agent Terms, and Security Policy.
        </p>

        <h2>Summary</h2>
        <p>Capability alone is not the product. Governability is the product.</p>
      </Prose>
    </DocsLayout>
  );
}
