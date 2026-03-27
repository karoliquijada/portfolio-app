"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">{t.contact.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">{t.contact.heading}</h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">{t.contact.description}</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.emailLabel}</p>
                  <a
                    href="mailto:hello@karoliq.dev"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    hello@karoliq.dev
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm text-foreground">
                  <span className="font-medium">{t.contact.responseTimeLabel}</span> {t.contact.responseTimeValue}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-lg bg-background border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">{t.contact.formTitle}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">{t.contact.nameLabel}</label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">{t.contact.emailFieldLabel}</label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">{t.contact.messageLabel}</label>
                <Textarea
                  id="message"
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary min-h-32 resize-none"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t.contact.submitBtn}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-lg bg-background border border-border text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.contact.bottomCtaTitle}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{t.contact.bottomCtaDesc}</p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:hello@karoliq.dev">
              {t.contact.bottomCtaBtn}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
