"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("privacy.title")}</h1>
          <p className="text-primary-foreground/90">{t("privacy.lastUpdated")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="mb-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-lg text-foreground leading-relaxed">{t("privacy.intro")}</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section1Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section1")}</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section2Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section2")}</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section3Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section3")}</p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section4Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section4")}</p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section5Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section5")}</p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section6Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section6")}</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">{t("privacy.section7Title")}</h2>
            <p className="text-foreground/80 leading-relaxed">{t("privacy.section7")}</p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
