"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsNav } from "@/lib/site";

export function DocsNav() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div style={{ marginBottom: 18 }}>
        <div className="badge">QUBUHUB Governance</div>
      </div>

      {docsNav.map((group) => (
        <div className="nav-section" key={group.section}>
          <h4>{group.section}</h4>
          <div className="nav-list">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}
