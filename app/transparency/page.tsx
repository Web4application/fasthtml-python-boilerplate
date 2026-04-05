import { DocsLayout } from "@/components/docs-layout";
import { Prose } from "@/components/prose";

export const metadata = {
  title: "Transparency",
};

export default function TransparencyPage() {
  return (
    <DocsLayout>
      <Prose>
        <h1>QUBUHUB Transparency</h1>
        <p>
          We believe users and developers should understand what our systems
          are, what they are not, and how they are governed.
        </p>

        <h2>Our Position</h2>
        <p>
          QUBUHUB systems are computational tools designed to assist humans,
          not replace human accountability or moral judgment.
        </p>

        <h2>What Users Should Expect</h2>
        <ul>
          <li>Capability with limits</li>
          <li>Strong bounded behavior</li>
          <li>Safety-aligned refusals</li>
          <li>Occasional error or uncertainty</li>
        </ul>

        <h2>What We Publish</h2>
        <ul>
          <li>Constitutional doctrine</li>
          <li>Behavior standards</li>
          <li>Safety policy</li>
          <li>Security policy</li>
          <li>Model-family governance</li>
        </ul>
      </Prose>
    </DocsLayout>
  );
}
