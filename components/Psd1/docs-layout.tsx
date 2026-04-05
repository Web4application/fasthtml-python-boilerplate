import { DocsNav } from "@/components/docs-nav";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="shell">
        <DocsNav />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
