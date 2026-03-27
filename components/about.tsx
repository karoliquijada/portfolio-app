"use client"

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">{t.about.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{t.about.heading}</h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.about.p1}</p>
              <p>
                {t.about.p2Prefix}{" "}
                <span className="text-foreground font-medium">{t.about.p2Highlight}</span>{" "}
                {t.about.p2Suffix}
              </p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">{t.about.howIWork}</h3>
              <ul className="space-y-3">
                {t.about.workingStyle.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background border border-border text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">{t.about.yearsLabel}</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">{t.about.projectsLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
