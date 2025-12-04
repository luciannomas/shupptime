"use client"

import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "./language-switcher"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navigateToSection = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    } else {
      // Navegar a home con hash para que scroll suceda después de cargar
      window.location.href = `/#${id}`
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Shupptime
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <button
              onClick={() => navigateToSection("projects")}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {t("nav.projects")}
            </button>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t("nav.contact")}
            </Link>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">{t("home.cta")}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-4 py-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                {t("nav.home")}
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                {t("nav.about")}
              </Link>
              <button
                onClick={() => navigateToSection("projects")}
                className="text-foreground hover:text-primary transition-colors text-left cursor-pointer"
              >
                {t("nav.projects")}
              </button>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                {t("nav.contact")}
              </Link>
              <div className="flex gap-2 pt-4 border-t border-border">
                <LanguageSwitcher />
                <Link href="/contact" className="flex-1">
                  <Button className="w-full bg-primary hover:bg-primary/90">{t("home.cta")}</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
