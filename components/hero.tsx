"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Clock, Shield } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()

  const highlights = [
    { icon: Zap, text: t.hero.fast },
    { icon: Clock, text: t.hero.async },
    { icon: Shield, text: t.hero.reliable },
  ]

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-primary">{t.hero.available}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            {t.hero.headline}{" "}
            <span className="text-primary">{t.hero.headlineAccent}</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">
                {t.hero.primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <a href="#portfolio">{t.hero.secondaryCta}</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
              <p className="text-sm text-muted-foreground mt-1">{t.hero.yearsLabel}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground mt-1">{t.hero.projectsLabel}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">10+</p>
              <p className="text-sm text-muted-foreground mt-1">{t.hero.hoursLabel}</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-foreground">24h</p>
              <p className="text-sm text-muted-foreground mt-1">{t.hero.responseLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
