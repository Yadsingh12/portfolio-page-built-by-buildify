"use client";

import { ArrowUpRight } from "lucide-react";

const EXPERIENCES = [
  {
    period: "2000 — Present",
    role: "Senior Auror",
    company: "Ministry of Magic",
    location: "Whitehall, London (On-site)",
    description: [
      "Led a 12-person task force responsible for the capture and prosecution of 47 remaining Death Eaters post-Battle of Hogwarts.",
      "Revamped the Auror Office's dark object detection protocol, reducing false-positive curse detections by 63%.",
      "Youngest wizard in Ministry history to achieve Senior Auror rank, promoted at age 22 following commendations from the Minister for Magic.",
    ],
    tags: ["Dark Wizard Apprehension", "Curse Detection", "Field Operations", "Occlumency", "Wand Lore"],
  },
  {
    period: "1997 — 1998",
    role: "Field Commander",
    company: "Order of the Phoenix",
    location: "Grimmauld Place & Various (Remote)",
    description: [
      "Led a three-person horcrux hunting expedition across the British Isles, successfully locating and destroying 4 of 7 horcruxes within a single academic year.",
      "Co-ordinated the tactical defence and liberation of Hogwarts School during the Battle of Hogwarts, commanding 200+ student and staff combatants.",
      "Survived a direct encounter with Lord Voldemort and leveraged the sacrificial protection magic of Lily Potter to neutralise him permanently.",
    ],
    tags: ["Horcrux Hunting", "Combat Leadership", "Dark Arts Defence", "Strategic Planning"],
  },
  {
    period: "1993 — 1996",
    role: "Founder & Lead Instructor",
    company: "Dumbledore's Army",
    location: "Room of Requirement, Hogwarts (On-site)",
    description: [
      "Founded and led a 30-member clandestine Defence Against the Dark Arts study group in direct defiance of Ministry-imposed curriculum restrictions.",
      "Designed and delivered a comprehensive practical DADA curriculum resulting in an 87% Outstanding pass rate for members in their O.W.L. examinations.",
    ],
    tags: ["Curriculum Design", "Teaching", "Patronus Charm", "Shield Charms", "Leadership"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <p className="section-eyebrow mb-6">Experience</p>

      <div className="flex flex-col gap-2">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="portfolio-card group">
            {/* Period */}
            <span
              className="text-xs font-mono font-medium"
              style={{ color: "var(--foreground-subtle)" }}
            >
              {exp.period}
            </span>

            {/* Role & Company */}
            <div className="mt-2 mb-3 flex items-start justify-between gap-2">
              <h3
                className="font-semibold text-sm leading-tight transition-colors duration-200"
                style={{ color: "var(--foreground)" }}
              >
                {exp.role}{" "}
                <span style={{ color: "var(--accent)" }}>
                  · {exp.company}
                </span>
              </h3>
              <ArrowUpRight
                size={14}
                className="mt-0.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: "var(--accent)" }}
              />
            </div>

            {/* Location */}
            <p
              className="text-xs mb-3"
              style={{ color: "var(--foreground-subtle)" }}
            >
              {exp.location}
            </p>

            {/* Description */}
            <ul className="flex flex-col gap-2 mb-4">
              {exp.description.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--foreground-subtle)" }}
                  />
                  <span
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
