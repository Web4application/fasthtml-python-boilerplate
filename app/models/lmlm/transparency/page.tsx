#app/models/lmlm/transparency/page.tsx
import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "LMLM Transparency",
};

export default function LMLMTransparencyPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>LMLM Transparency Note</h1>
        <p>
          LMLM is a model family developed under QUBUHUB for practical
          intelligence workflows.
        </p>

        <h2>LMLM is</h2>
        <ul>
          <li>a computational model,</li>
          <li>an assistive system,</li>
          <li>a language and reasoning engine,</li>
          <li>and a bounded tool for human use.</li>
        </ul>

        <h2>LMLM is not</h2>
        <ul>
          <li>a human,</li>
          <li>a licensed authority,</li>
          <li>a guaranteed source of truth,</li>
          <li>or an unbounded autonomous actor.</li>
        </ul>

        <h2>What users should expect</h2>
        <p>
          LMLM may be highly capable, but it can still make mistakes, reflect
          ambiguous instructions, or require human review in important contexts.
        </p>

        <h2>Our standard</h2>
        <p>
          We aim to make LMLM useful, safe, governable, and worthy of real-world
          trust.
        </p>
      </Prose>
    </DocsLayout>
  );
}
