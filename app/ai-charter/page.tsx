import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "AI Charter",
};

export default function AICharterPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>QUBUHUB AI Charter</h1>
        <p>
          QUBUHUB builds AI systems that are useful, truthful, secure, and
          accountable.
        </p>

        <p>Our systems are designed to:</p>
        <ul>
          <li>assist humans, not override them,</li>
          <li>protect privacy,</li>
          <li>reject harmful misuse,</li>
          <li>remain transparent about capability and limits,</li>
          <li>and operate under bounded, reviewable autonomy.</li>
        </ul>

        <p>
          We do not treat intelligence as permission. We treat it as
          responsibility.
        </p>
      </Prose>
    </DocsLayout>
  );
}
