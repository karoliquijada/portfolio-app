const technologies = [
  { name: "Laravel", category: "Backend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "PHP", category: "Backend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "MySQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "REST APIs", category: "Integration" },
  { name: "Stripe", category: "Integration" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Git", category: "Tools" },
]

export function TechStack() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Focused on the Laravel and Vue ecosystem, with expertise in payment integrations and responsive design.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <span className="text-sm text-foreground">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-card border border-border">
            <p className="text-2xl font-bold text-foreground mb-1">Backend</p>
            <p className="text-sm text-muted-foreground">Laravel, PHP, REST APIs, Database design</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border">
            <p className="text-2xl font-bold text-foreground mb-1">Frontend</p>
            <p className="text-sm text-muted-foreground">Vue.js, JavaScript, Tailwind CSS, Responsive UI</p>
          </div>
          <div className="p-6 rounded-lg bg-card border border-border">
            <p className="text-2xl font-bold text-foreground mb-1">Integration</p>
            <p className="text-sm text-muted-foreground">Payment gateways, Third-party APIs, Webhooks</p>
          </div>
        </div>
      </div>
    </section>
  )
}
