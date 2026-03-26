import { Bug, CreditCard, Palette, Plug, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Bug,
    title: "Bug Fixing & Feature Improvements",
    description: "Quick diagnosis and resolution of bugs, performance issues, and feature enhancements. Clean, tested code that integrates seamlessly with your existing codebase.",
    tags: ["Debugging", "Refactoring", "Testing"],
  },
  {
    icon: CreditCard,
    title: "Checkout & Payment Flow Optimization",
    description: "Streamline your checkout process to reduce cart abandonment and increase conversions. Payment gateway integrations, validation improvements, and UX optimization.",
    tags: ["Stripe", "PayPal", "Conversion"],
  },
  {
    icon: Palette,
    title: "UI/UX Improvements",
    description: "Transform clunky interfaces into clean, intuitive experiences. Responsive design, accessibility improvements, and modern component libraries.",
    tags: ["Responsive", "Accessibility", "Vue.js"],
  },
  {
    icon: Plug,
    title: "API Integrations",
    description: "Connect your application with third-party services. REST APIs, webhooks, payment processors, email services, and custom integrations.",
    tags: ["REST", "Webhooks", "Third-party"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            How I can help you
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Whether you need a quick fix or a full feature build, I focus on delivering quality work that makes a measurable difference to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-background border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Have a different project in mind?</h3>
            <p className="text-sm text-muted-foreground">Let&apos;s discuss your specific requirements.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
