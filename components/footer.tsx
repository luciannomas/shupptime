"use client"

import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-sidebar text-sidebar-foreground border-t border-sidebar-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-accent">Shupptime</h3>
            <p className="text-sidebar-foreground/80 text-sm">{t("footer.description")}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  {t("home.service1")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  {t("home.service2")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  {t("home.service3")}
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-accent transition-colors">
                  {t("home.service4")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@shupptime.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@shupptime.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Latinoamérica</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sidebar-foreground/70">
            <p>&copy; 2025 Shupptime. {t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-accent transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="#" className="hover:text-accent transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
