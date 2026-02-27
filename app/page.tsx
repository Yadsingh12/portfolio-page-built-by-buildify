import Hero from "@/components/portfolio/Hero";
import Nav from "@/components/portfolio/Nav";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import EducationCerts from "@/components/portfolio/EducationCerts";
import Cursor from "@/components/portfolio/Cursor";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import MobileNav from "@/components/portfolio/MobileNav";
import RevealWrapper from "@/components/portfolio/RevealWrapper";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Custom cursor */}
      <Cursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Spotlight overlay */}
      <div className="spotlight" aria-hidden="true" />

      {/* Mobile nav */}
      <MobileNav />

      {/* Main layout */}
      <div
        className="min-h-screen max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-24"
        style={{ position: "relative", zIndex: 2 }}
      >
        <div className="lg:flex lg:gap-16 xl:gap-24">
          {/* ── LEFT COLUMN: sticky hero + nav ── */}
          <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[45%] xl:w-[42%] lg:flex lg:flex-col lg:justify-between lg:py-20 pt-16 pb-12">
            <div>
              <Hero />
              <Nav />
            </div>

            {/* Footer inside sidebar */}
            <footer className="hidden lg:block">
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--foreground-subtle)" }}
              >
                Designed &amp; built by{" "}
                <span style={{ color: "var(--foreground-muted)" }}>
                  Yadwinder Singh
                </span>
                . Inspired by the best.
              </p>
            </footer>
          </aside>

          {/* ── RIGHT COLUMN: scrollable sections ── */}
          <main className="lg:w-[55%] xl:w-[58%] lg:py-20 pb-24">
            <RevealWrapper>
              <div className="flex flex-col gap-20">
              {/* Skills */}
              <Skills />

              {/* Experience */}
              <Experience />

              {/* Projects */}
              <Projects />

              {/* Education & Certs */}
              <EducationCerts />
              </div>

              {/* Mobile footer */}
              <footer className="lg:hidden mt-16 pt-8" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs"
                    style={{ color: "var(--foreground-subtle)" }}
                  >
                    Built by Yadwinder Singh · 2025
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Yadsingh12"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yadwinder-singh-4a7456248/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="https://leetcode.com/u/yadsingh12/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LeetCode"
                    >
                      <Code2 size={16} />
                    </a>
                  </div>
                </div>
              </footer>
            </RevealWrapper>
          </main>
        </div>
      </div>
    </>
  );
}
