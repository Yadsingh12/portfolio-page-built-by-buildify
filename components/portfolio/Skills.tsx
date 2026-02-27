"use client";

const SKILL_GROUPS = [
  {
    label: "Core Magic",
    skills: ["Expelliarmus", "Patronus Charm", "Avada Kedavra (counter)", "Accio", "Lumos", "Protego"],
  },
  {
    label: "Dark Arts Defence",
    skills: ["Occlumency", "Legilimency", "Horcrux Detection", "Parseltongue", "Unforgivable Curse Resistance"],
  },
  {
    label: "Equipment",
    skills: ["Elder Wand", "Invisibility Cloak", "Marauder's Map", "Firebolt 4000", "Time-Turner (exp.)"],
  },
  {
    label: "Creatures & Allies",
    skills: ["Hippogriff Handling", "Thestral Riding", "Basilisk Survival", "House Elf Relations"],
  },
  {
    label: "Other",
    skills: ["Quidditch (Seeker)", "Parseltongue", "Duelling", "Horcrux Hunting", "Apparition"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <p className="section-eyebrow mb-6">Technical Skills</p>

      <div className="flex flex-col gap-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <span
              className="text-xs font-mono font-medium mb-2 block"
              style={{ color: "var(--foreground-subtle)" }}
            >
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
