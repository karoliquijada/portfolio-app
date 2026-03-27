"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle theme"
    >
      <Sun className="h-4 w-4 hidden dark:block" />
      <Moon className="h-4 w-4 block dark:hidden" />
    </button>
  )
}

function LanguageToggle() {
  const { locale, setLocale } = useLanguage()
  return (
    <button
      onClick={() => setLocale(locale === "en" ? "es" : "en")}
      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Toggle language"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">Karoli Q.</span>
            <span className="hidden sm:inline text-sm text-muted-foreground">Full-Stack Developer</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact">{t.nav.getInTouch}</a>
            </Button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t.nav.getInTouch}</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
