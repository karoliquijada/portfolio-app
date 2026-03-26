import { CheckCircle2 } from "lucide-react"

const workingStyle = [
  "Clear, responsive communication",
  "Understanding your business goals",
  "Clean, maintainable code",
  "Fast turnaround without cutting corners",
  "Flexible scheduling for your timezone",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-card">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">About</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Building software that makes a difference
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Karoli, a full-stack developer with years of experience helping startups, SaaS companies, and product teams ship better software faster.
              </p>
              <p>
                My focus is on <span className="text-foreground font-medium">checkout optimization, UI/UX improvements, and SaaS features</span> — the areas where small changes often create the biggest business impact.
              </p>
              <p>
                I understand that you need someone who can jump in, understand your codebase quickly, and deliver quality work without endless back-and-forth. That&apos;s exactly how I operate.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-background border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">How I work</h3>
              <ul className="space-y-3">
                {workingStyle.map((item) => (
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
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border text-center">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
