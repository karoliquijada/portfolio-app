"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Checkout Flow Optimization",
    category: "E-commerce",
    description: "Redesigned a multi-step checkout process for an e-commerce platform, reducing cart abandonment by 35% and improving conversion rates.",
    problem: "Complex checkout with too many steps, confusing validation, and poor mobile experience leading to high abandonment rates.",
    solution: "Simplified to a streamlined 2-step process, added real-time validation, optimized for mobile, and integrated address autocomplete.",
    tags: ["Laravel", "Vue.js", "Stripe", "UI/UX"],
    metrics: [
      { label: "Cart abandonment", value: "-35%" },
      { label: "Conversion rate", value: "+22%" },
      { label: "Mobile orders", value: "+40%" },
    ],
  },
  {
    id: 2,
    title: "Online Course Platform",
    category: "SaaS",
    description: "Built a full-featured learning management system with role-based access, payment integration, and interactive course management.",
    problem: "Client needed a scalable platform for selling and managing online courses with different user roles and payment processing.",
    solution: "Developed a complete SaaS solution with student, instructor, and admin dashboards, Stripe subscriptions, and progress tracking.",
    tags: ["Laravel", "Vue.js", "Stripe", "API"],
    metrics: [
      { label: "User roles", value: "3" },
      { label: "Course modules", value: "100+" },
      { label: "Active users", value: "2k+" },
    ],
  },
  {
    id: 3,
    title: "Dashboard & Checkout UI Template",
    category: "UI Components",
    description: "Created a reusable component library and dashboard template focused on checkout flows and admin interfaces.",
    problem: "Development teams spending too much time building common UI patterns from scratch for each new project.",
    solution: "Built a comprehensive component library with pre-built checkout flows, data tables, charts, and responsive layouts.",
    tags: ["Vue.js", "Tailwind CSS", "TypeScript", "Components"],
    metrics: [
      { label: "Components", value: "50+" },
      { label: "Dev time saved", value: "40%" },
      { label: "Projects using it", value: "8" },
    ],
  },
]

export function Portfolio() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <section id="portfolio" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Selected work
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Real projects with real results. Here&apos;s a selection of work that showcases my approach to solving problems.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-[300px_1fr] gap-8">
          <div className="space-y-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  activeProject.id === project.id
                    ? "bg-primary/10 border border-primary/30"
                    : "bg-card border border-border hover:border-primary/20"
                }`}
              >
                <p className="text-xs text-muted-foreground mb-1">{project.category}</p>
                <p className={`font-medium ${activeProject.id === project.id ? "text-primary" : "text-foreground"}`}>
                  {project.title}
                </p>
              </button>
            ))}
          </div>

          <div className="p-8 rounded-lg bg-card border border-border">
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-primary mb-2">{activeProject.category}</p>
                <h3 className="text-2xl font-bold text-foreground">{activeProject.title}</h3>
              </div>
              <Button variant="outline" size="icon" className="border-border text-muted-foreground hover:text-foreground">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {activeProject.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-medium text-foreground mb-2">The Problem</p>
                <p className="text-sm text-muted-foreground">{activeProject.problem}</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="text-sm font-medium text-foreground mb-2">The Solution</p>
                <p className="text-sm text-muted-foreground">{activeProject.solution}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {activeProject.metrics.map((metric) => (
                <div key={metric.label} className="p-4 rounded-lg bg-primary/5 border border-primary/10 text-center">
                  <p className="text-2xl font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg bg-card border border-border"
            >
              <p className="text-xs text-primary mb-2">{project.category}</p>
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="p-3 rounded-lg bg-primary/5 border border-primary/10 text-center">
                    <p className="text-lg font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
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
            Want to discuss a similar project?
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
