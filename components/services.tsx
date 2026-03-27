"use client"

import { Bug, CreditCard, Palette, Plug, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const icons = [Bug, CreditCard, Palette, Plug]
const tags = [
  ["Debugging", "Refactoring", "Testing"],
  ["Stripe", "PayPal", "Conversion"],
  ["Responsive", "Accessibility", "Vue.js"],
  ["REST", "Webhooks", "Third-party"],
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-4 mb-12">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">{t.services.label}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t.services.heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl">{t.services.subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[i]
            return (
              <div
                key={service.title}
                className="group p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {tags[i].map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 p-6 rounded-lg bg-background border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{t.services.ctaTitle}</h3>
            <p className="text-sm text-muted-foreground">{t.services.ctaDesc}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
          >
            {t.services.ctaLink}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
