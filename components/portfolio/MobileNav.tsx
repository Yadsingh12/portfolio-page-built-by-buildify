"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  };

  return (
    <>
      {/* Hamburger */}
      <button
        className="lg:hidden fixed top-5 right-5 z-[200] w-10 h-10 flex items-center justify-center rounded-lg transition-all"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          color: "var(--foreground)",
        }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="mobile-nav-overlay flex flex-col items-center justify-center gap-8"
          onClick={() => setOpen(false)}
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={(e) => {
                e.stopPropagation();
                scrollTo(id);
              }}
              className="text-2xl font-bold tracking-tight transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--foreground-muted)")
              }
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
