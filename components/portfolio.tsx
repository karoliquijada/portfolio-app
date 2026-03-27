"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const projectTags = [
  ["Laravel", "Vue.js", "Stripe", "UI/UX"],
  ["Laravel", "Vue.js", "Stripe", "API"],
  ["Vue.js", "Tailwind CSS", "TypeScript", "Components"],
]

export function Portfolio() {
  const { t } = useLanguage()
  const projects = t.portfolio.projects
  const [activeProject, setActiveProject] = useState(0)
  const active = projects[activeProject]

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">{t.portfolio.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{t.portfolio.heading}</h2>
          <p className="text-muted-foreground max-w-2xl">{t.portfolio.subheading}</p>
        </div>

        <div className="hidden lg:grid grid-cols-[300px_1fr] gap-8">
          <div className="space-y-2">
            {projects.map((project, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  activeProject === i
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-card border border-border hover:border-primary/20"
                }`}
              >
                <p className="text-xs text-muted-foreground mb-1">{project.category}</p>
                <p className={`font-medium ${activeProject === i ? "text-primary" : "text-foreground"}`}>
                  {project.title}
                </p>
              </button>
            ))}
          </div>

          <div className="p-8 rounded-lg bg-card border border-border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-primary mb-2">{active.category}</p>
                <h3 className="text-2xl font-bold text-foreground">{active.title}</h3>
              </div>
              <Button variant="outline" size="icon" className="border-border text-muted-foreground hover:text-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">{active.description}</p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-medium text-foreground mb-2">{t.portfolio.theProblem}</p>
                <p className="text-sm text-muted-foreground">{active.problem}</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-medium text-foreground mb-2">{t.portfolio.theSolution}</p>
                <p className="text-sm text-muted-foreground">{active.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {active.metrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <p className="text-2xl font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {projectTags[activeProject].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {projects.map((project, i) => (
            <div key={i} className="p-6 rounded-lg bg-card border border-border">
              <p className="text-xs text-primary mb-2">{project.category}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                    <p className="text-lg font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {projectTags[i].map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {t.portfolio.bottomCta}
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
