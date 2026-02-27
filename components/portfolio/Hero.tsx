"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code2 } from "lucide-react";

const ROLES = [
  "Auror, Ministry of Magic",
  "Chosen One",
  "Defence Against the Dark Arts Expert",
  "Founder, Dumbledore's Army",
  "Seeker, Gryffindor Quidditch",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 40);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="flex flex-col gap-8">
      {/* Name */}
      <div>
        <p className="section-eyebrow mb-3">Hello, world.</p>
        <h1
          className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance"
          style={{ color: "var(--foreground)" }}
        >
          Harry{" "}
          <span className="glow-text">Potter</span>
        </h1>
        <div className="mt-3 flex items-center h-8">
          <span
            className="text-lg lg:text-xl font-mono font-medium"
            style={{ color: "var(--accent)" }}
          >
            {displayed}
          </span>
          <span className="typing-cursor" />
        </div>
      </div>

      {/* Profile */}
      <p
        className="text-sm leading-relaxed max-w-xs"
        style={{ color: "var(--foreground-muted)" }}
      >
        Seasoned Auror and Dark wizard hunter with 20+ years of field experience
        defeating dark forces. Survivor of the Killing Curse (twice), founder of
        Dumbledore's Army, and holder of the Elder Wand. Open to senior
        leadership roles in magical law enforcement.
      </p>

      {/* Stats */}
      <div className="flex gap-6">
        <div>
          <div className="stat-number">2<span style={{ color: "var(--accent)" }}></span></div>
          <div className="text-xs mt-1" style={{ color: "var(--foreground-subtle)" }}>
            Killing Curse Survivals
          </div>
        </div>
        <div
          className="w-px"
          style={{ background: "var(--border)" }}
        />
        <div>
          <div className="stat-number">7<span style={{ color: "var(--accent)" }}>+</span></div>
          <div className="text-xs mt-1" style={{ color: "var(--foreground-subtle)" }}>
            Horcruxes Destroyed
          </div>
        </div>
        <div
          className="w-px"
          style={{ background: "var(--border)" }}
        />
        <div>
          <div className="stat-number" style={{ color: "var(--accent-teal)" }}>O</div>
          <div className="text-xs mt-1" style={{ color: "var(--foreground-subtle)" }}>
            DADA O.W.L. Grade
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-2">
        <a
          href="mailto:hpotter@hogwarts.wiz"
          className="flex items-center gap-2 text-xs group"
          style={{ color: "var(--foreground-muted)" }}
        >
          <Mail size={13} style={{ color: "var(--accent)" }} />
          <span className="group-hover:underline" style={{ color: "var(--foreground-muted)" }}>
            hpotter@hogwarts.wiz
          </span>
        </a>
        <a
          href="tel:+447700900042"
          className="flex items-center gap-2 text-xs"
          style={{ color: "var(--foreground-muted)" }}
        >
          <Phone size={13} style={{ color: "var(--accent)" }} />
          +44 7700 900 042
        </a>
        <div
          className="flex items-center gap-2 text-xs"
          style={{ color: "var(--foreground-muted)" }}
        >
          <MapPin size={13} style={{ color: "var(--accent)" }} />
          Godric's Hollow, West Country, UK
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="The Wizarding Wireless Network"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label="Daily Prophet Profile"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:hpotter@hogwarts.wiz"
          className="social-icon"
          aria-label="Owl Post"
        >
          <Mail size={20} />
        </a>
        <a
          href="#"
          className="social-icon"
          aria-label="Ministry of Magic Portal"
        >
          <Code2 size={20} />
        </a>
      </div>

      {/* Resume Button */}
      <div>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md transition-all duration-200"
          style={{
            background: "var(--accent-glow)",
            color: "var(--accent)",
            border: "1px solid rgba(88,166,255,0.25)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(88,166,255,0.2)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--accent-glow)";
          }}
        >
          View My Work
          <ExternalLink size={13} />
        </a>
      </div>
    </section>
  );
}
