import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-lg font-semibold text-foreground">
              Karoli Q.
            </Link>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer · Laravel + Vue
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="mailto:hello@karoliq.dev" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link 
              href="https://github.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Karoli Q. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
