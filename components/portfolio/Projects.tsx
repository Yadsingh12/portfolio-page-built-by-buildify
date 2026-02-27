"use client";

import { ArrowUpRight, Github, Globe } from "lucide-react";

const PROJECTS = [
  {
    title: "Operation: Deathly Hallows",
    description:
      "A year-long solo expedition to locate and unite the three Deathly Hallows — the Elder Wand, the Resurrection Stone, and the Invisibility Cloak — to gain mastery over death and defeat Lord Voldemort. Successfully completed despite Ministry opposition, Death Eater pursuit, and a camping trip of uncomfortable duration.",
    github: "#",
    live: null,
    tags: ["Horcrux Hunting", "Elder Wand", "Invisibility Cloak", "Parseltongue", "Improvisation"],
    highlight: true,
  },
  {
    title: "The Triwizard Tournament",
    description:
      "Represented Hogwarts as an underage, unsolicited entrant in the dangerous inter-school magical competition. Navigated a dragon encounter, an underwater hostage rescue, and a hedge maze, ultimately retrieving the Triwizard Cup — which turned out to be a Portkey. Would not recommend.",
    github: "#",
    live: null,
    tags: ["Accio", "Bubble-Head Charm", "Duelling", "Dragon Evasion", "Crisis Management"],
    highlight: false,
  },
  {
    title: "Rescue of Sirius Black",
    description:
      "Co-executed a time-travel rescue operation using a Ministry-issued Time-Turner, simultaneously rescuing an innocent wrongfully imprisoned wizard and a hippogriff sentenced to execution. Completed within a 3-hour window without altering the primary timeline.",
    github: "#",
    live: null,
    tags: ["Time-Turner", "Patronus Charm", "Hippogriff Riding", "Temporal Logistics"],
    highlight: false,
  },
  {
    title: "Philosopher's Stone Recovery",
    description:
      "Led a three-person team through a series of enchanted obstacles — including a giant chess match, a logic puzzle, and Professor Quirrell — to recover the Philosopher's Stone before Voldemort could use it to achieve immortality. Completed in a single evening, age 11.",
    github: "#",
    live: null,
    tags: ["Mirror of Erised", "Obstacle Navigation", "Teamwork", "Wandwork"],
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal">
      <p className="section-eyebrow mb-6">Projects</p>

      <div className="flex flex-col gap-2">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="portfolio-card group"
            style={
              project.highlight
                ? {
                    borderColor: "rgba(88,166,255,0.15)",
                    background: "rgba(88,166,255,0.03)",
                  }
                : {}
            }
          >
            {/* Top: title + links */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3
                className="font-semibold text-sm leading-tight group-hover:text-[var(--accent)] transition-colors duration-200"
                style={{ color: "var(--foreground)" }}
              >
                {project.title}
                {project.highlight && (
                  <span
                    className="ml-2 text-xs font-mono px-1.5 py-0.5 rounded"
                    style={{
                      background: "rgba(57,211,83,0.1)",
                      color: "var(--accent-teal)",
                      border: "1px solid rgba(57,211,83,0.2)",
                    }}
                  >
                    Featured
                  </span>
                )}
              </h3>

              {/* Link icons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="transition-colors duration-200"
                    style={{ color: "var(--foreground-subtle)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--foreground)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--foreground-subtle)")
                    }
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} Live Demo`}
                    className="transition-colors duration-200"
                    style={{ color: "var(--foreground-subtle)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "var(--foreground-subtle)")
                    }
                  >
                    <Globe size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p
              className="text-xs leading-relaxed mb-4"
              style={{ color: "var(--foreground-muted)" }}
            >
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Live demo link if present */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link mt-4 text-xs font-medium inline-flex"
                style={{ color: "var(--accent)" }}
              >
                View Live Demo
                <ArrowUpRight size={13} className="mt-0.5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
