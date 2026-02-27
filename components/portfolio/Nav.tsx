"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
];

export default function Nav() {
  const [active, setActive] = useState("skills");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden lg:flex flex-col gap-4 mt-8">
      {NAV_ITEMS.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`nav-item ${active === id ? "active" : ""}`}
          aria-label={`Navigate to ${label}`}
        >
          <span className="nav-line" />
          <span className="nav-text">{label}</span>
        </button>
      ))}
    </nav>
  );
}
