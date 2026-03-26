"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, ArrowRight } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - CTA */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Need something fixed or improved quickly?
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Whether it&apos;s a bug that needs squashing, a checkout flow that needs optimizing, or a new feature that needs building — I&apos;m here to help. Let&apos;s talk about your project.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email me directly</p>
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
                  <span className="font-medium">Typical response time:</span> Within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="p-6 md:p-8 rounded-lg bg-background border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-muted-foreground">
                  Project details
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary min-h-32 resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-lg bg-background border border-border text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Ready to improve your product?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I work with startups, SaaS companies, and product teams who need reliable development help without the overhead.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="mailto:hello@karoliq.dev">
              Let&apos;s talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
