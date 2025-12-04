"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/hooks/use-language"
import { LanguageProvider } from "@/hooks/use-language"
import { CheckCircle2 } from "lucide-react"

function AboutContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("about.title")}
            </h1>
            <p className="text-2xl text-muted-foreground">{t("about.subtitle")}</p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <h2 className="text-3xl font-bold mb-4 text-primary">{t("about.mission")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.missionDesc")}</p>
              </div>

              <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <h2 className="text-3xl font-bold mb-4 text-accent">{t("about.vision")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("about.visionDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t("about.values")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: t("about.value1"),
                  desc: "Nos mantenemos al frente de la tecnología, constantemente explorando nuevas herramientas y metodologías.",
                },
                {
                  title: t("about.value2"),
                  desc: "Tu satisfacción es nuestra prioridad. Entregamos soluciones de calidad superior en cada proyecto.",
                },
                {
                  title: t("about.value3"),
                  desc: "No descansamos hasta lograr tus objetivos. Cada proyecto es un compromiso con tu éxito.",
                },
                {
                  title: t("about.value4"),
                  desc: "Comunicación clara y honesta en todos nuestros procesos y relaciones con clientes.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">{t("about.team")}</h2>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{t("about.teamDesc")}</p>
              <p className="text-lg text-muted-foreground">
                Somos un colectivo de diseñadores, desarrolladores y especialistas en marketing digital que comparten
                una pasión común: transformar ideas en soluciones digitales de impacto.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function About() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  )
}
