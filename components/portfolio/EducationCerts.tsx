"use client";

import { Trophy, GraduationCap, Award } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "O.W.L. — Defence Against the Dark Arts (Outstanding)",
    issuer: "Wizarding Examinations Authority",
  },
  {
    title: "N.E.W.T. — Auror Training Programme (Distinction)",
    issuer: "Ministry of Magic, Department of Magical Law Enforcement",
  },
  {
    title: "Advanced Patronus Casting — Level III",
    issuer: "Order of the Phoenix Continuing Education",
  },
  {
    title: "Certified Parseltongue Interpreter",
    issuer: "British Institute of Magical Linguistics",
  },
];

export default function EducationCerts() {
  return (
    <div className="flex flex-col gap-8">
      {/* Education */}
      <section id="education" className="reveal">
        <p className="section-eyebrow mb-6">Education</p>

        <div className="portfolio-card">
          <div className="flex items-start gap-3">
            <div
              className="mt-0.5 w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(88,166,255,0.1)",
                border: "1px solid rgba(88,166,255,0.15)",
              }}
            >
              <GraduationCap size={15} style={{ color: "var(--accent)" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--foreground)" }}
                  >
                    N.E.W.T. in Magical Arts & Sciences
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    Hogwarts School of Witchcraft and Wizardry
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--foreground-subtle)" }}
                  >
                    09/1991 — 06/1998
                  </span>
                  <div
                    className="text-xs mt-1 font-mono font-bold"
                    style={{ color: "var(--accent-teal)" }}
                  >
                    House: Gryffindor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement */}
      <section className="reveal">
        <p className="section-eyebrow mb-6">Achievement</p>

        <div className="achievement-badge">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <Trophy size={18} style={{ color: "var(--accent-teal)" }} />
            </div>
            <div>
              <h3
                className="font-semibold text-sm"
                style={{ color: "var(--foreground)" }}
              >
                Order of Merlin, First Class
              </h3>
              <p
                className="text-xs mt-1"
                style={{ color: "var(--foreground-muted)" }}
              >
                Awarded by Minister for Magic · May 1998
              </p>
              <p
                className="text-xs mt-2 leading-relaxed"
                style={{ color: "var(--foreground-muted)" }}
              >
                Awarded for outstanding bravery and the permanent defeat of Lord
                Voldemort during the Battle of Hogwarts, ending the Second
                Wizarding War and saving the entire wizarding world. Declined
                the offer of a commemorative chocolate frog card likeness (for
                now).
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Dark Lord Defeat", "Elder Wand", "Sacrifice Magic", "Parseltongue"].map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="reveal">
        <p className="section-eyebrow mb-6">Certifications</p>

        <div className="grid grid-cols-1 gap-3">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-subtle)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
              }}
            >
              <Award size={14} style={{ color: "var(--accent)" }} />
              <div className="flex-1">
                <span
                  className="text-xs font-medium block"
                  style={{ color: "var(--foreground)" }}
                >
                  {cert.title}
                </span>
                <span
                  className="text-xs"
                  style={{ color: "var(--foreground-subtle)" }}
                >
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
