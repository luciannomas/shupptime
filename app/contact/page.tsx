"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/hooks/use-language"
import { LanguageProvider } from "@/hooks/use-language"
import { Mail, MapPin, Clock } from "lucide-react"

function ContactContent() {
  const { t } = useLanguage()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 pt-32 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("contact.title")}
            </h1>
            <p className="text-2xl text-muted-foreground">{t("contact.subtitle")}</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.info.email")}</h3>
                      <a
                        href="mailto:info@shupptime.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@shupptime.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.info.address")}</h3>
                      <p className="text-muted-foreground">Latinoamérica</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t("contact.info.hours")}</h3>
                      <p className="text-muted-foreground">Lunes - Viernes</p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <ContactForm variant="full" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ-like Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>

            <div className="space-y-6">
              {[
                {
                  q: "¿Cuánto tiempo toma un proyecto?",
                  a: "Los plazos varían según la complejidad. Pequeños proyectos pueden tomar 2-3 semanas, mientras que proyectos más complejos pueden tomar 2-3 meses.",
                },
                {
                  q: "¿Ofrecen soporte después del lanzamiento?",
                  a: "Sí, ofrecemos paquetes de soporte y mantenimiento adaptados a tus necesidades específicas.",
                },
                {
                  q: "¿Cuál es el precio de vuestros servicios?",
                  a: "Los precios varían según el proyecto. Te ofrecemos una cotización personalizada después de conocer tus necesidades.",
                },
                {
                  q: "¿Trabajamos con empresas pequeñas?",
                  a: "Absolutamente. Trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-background border border-border rounded-lg p-6 cursor-pointer hover:border-primary transition-colors"
                >
                  <summary className="flex gap-2 font-bold text-lg">
                    {item.q}
                    <span className="ml-auto group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function Contact() {
  return (
    <LanguageProvider>
      <ContactContent />
    </LanguageProvider>
  )
}
