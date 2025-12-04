"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useLanguage } from "@/hooks/use-language"
import { LanguageProvider } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Brain, BarChart3, Cpu, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ScrollImage } from "@/components/scroll-image"
import { TechStack } from "@/components/tech-stack"
import { ProjectsSection } from "@/components/projects-section"
import { CountriesSection } from "@/components/countries-section"
import { useEffect, useState } from "react"

function HomeContent() {
  const { t } = useLanguage()
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section
          className="relative py-20 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden transition-all duration-300"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(1 - scrollY / 500, 0.3),
          }}
        >
          {/* Efecto de fondo cibernético */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-accent/20 rounded-full border border-accent/40 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-accent flex items-center gap-2">
                      <Zap size={16} />
                      {t("home.subtitle")}
                    </span>
                  </div>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
                  {t("home.title")}
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                  Potencia tu negocio con soluciones de IA que automatizan procesos, mejoran decisiones y aceleran tu
                  crecimiento.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-6 h-auto group shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all">
                      {t("home.cta")}
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </Link>

                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto text-lg px-8 py-6 h-auto border-2 bg-background hover:bg-accent/20 border-accent text-accent hover:text-accent hover:border-accent/80 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all">
                      <MessageSquare className="mr-2" size={20} />
                      {t("home.whatsapp")}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right Visual - Animated AI concept */}
              <div className="hidden lg:block relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full" />
                  <div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 border border-primary/30 backdrop-blur-sm">
                    <div className="space-y-8">
                      {/* Animated lines representing AI connections */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                          <div className="h-2 bg-gradient-to-r from-primary/50 to-accent/30 rounded-full flex-1" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                          <div className="h-2 bg-gradient-to-r from-accent/50 to-primary/30 rounded-full flex-1" />
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                          <div className="h-2 bg-gradient-to-r from-secondary/50 to-accent/30 rounded-full flex-1" />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">85%</div>
                          <div className="text-xs text-muted-foreground">Mejora de Eficiencia</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">24/7</div>
                          <div className="text-xs text-muted-foreground">Automatización</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 transition-all duration-700"
          style={{
            opacity: Math.min(scrollY / 300, 1),
            transform: `translateY(${Math.max(50 - scrollY / 5, 0)}px)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Tecnología Innovadora en Acción</h2>
              <p className="text-xl text-muted-foreground">Soluciones impulsadas por IA y automatización</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <ScrollImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wlnGakgR73xfeI1MuHVqlEUgeo7Vyn.png"
                  alt="Robot IA trabajando"
                  className="h-64 md:h-80 shadow-xl hover:shadow-2xl transition-shadow"
                  parallaxFactor={0.3}
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">IA Inteligente</h3>
                  <p className="text-muted-foreground">Robots y sistemas autónomos que trabajan 24/7</p>
                </div>
              </div>

              <div className="space-y-4">
                <ScrollImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uno-lzOYIdXZssEBXFzOFL8zgEPHddmUKc.jpg"
                  alt="Conectividad digital"
                  className="h-64 md:h-80 shadow-xl hover:shadow-2xl transition-shadow"
                  parallaxFactor={0.5}
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Conectividad Total</h3>
                  <p className="text-muted-foreground">Integración de todos tus sistemas en una plataforma</p>
                </div>
              </div>

              <div className="space-y-4">
                <ScrollImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-7FOipkoZlXxorvBNtyry77S9HW1Jru.jpg"
                  alt="Seguridad digital"
                  className="h-64 md:h-80 shadow-xl hover:shadow-2xl transition-shadow"
                  parallaxFactor={0.7}
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Seguridad Máxima</h3>
                  <p className="text-muted-foreground">Protección de datos con tecnología de punta</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-y border-primary/10 transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 600) / 300, 0), 1),
            transform: `translateY(${Math.max(50 - (scrollY - 600) / 5, 0)}px)`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-block px-6 py-3 bg-accent/20 rounded-full border border-accent/40 backdrop-blur-sm">
                <span className="text-sm font-semibold text-accent">{t("home.motto")}</span>
              </div>
            </div>
            <p className="text-2xl font-semibold text-foreground mb-4">{t("home.mottoDesc")}</p>
          </div>
        </section>

        <div
          className="transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 400) / 300, 0), 1),
            transform: `translateY(${Math.max(50 - (scrollY - 400) / 5, 0)}px)`,
          }}
        >
          <TechStack />
        </div>

        <section
          id="services"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 border-y border-primary/10 transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 800) / 300, 0), 1),
            transform: `translateY(${Math.max(50 - (scrollY - 800) / 5, 0)}px)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">{t("home.services")}</h2>
              <p className="text-xl text-muted-foreground">Soluciones completas de IA y automatización</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Brain,
                  title: t("home.service1"),
                  desc: t("home.service1_desc"),
                },
                {
                  icon: Zap,
                  title: t("home.service2"),
                  desc: t("home.service2_desc"),
                },
                {
                  icon: BarChart3,
                  title: t("home.service3"),
                  desc: t("home.service3_desc"),
                },
                {
                  icon: Cpu,
                  title: t("home.service4"),
                  desc: t("home.service4_desc"),
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="group p-6 rounded-xl bg-background border border-primary/20 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                    <service.icon className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          className="transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 1500) / 300, 0), 1),
            transform: `translateY(${Math.max(50 - (scrollY - 1500) / 5, 0)}px)`,
          }}
        >
          <ProjectsSection />
        </div>

        <div
          className="transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 2100) / 300, 0), 1),
            transform: `translateY(${Math.max(50 - (scrollY - 2100) / 5, 0)}px)`,
          }}
        >
          <CountriesSection />
        </div>

        <section
          className="py-20 px-4 sm:px-6 lg:px-8 transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 2500) / 300, 0), 1),
            transform: `translateY(${Math.max(50 - (scrollY - 2500) / 5, 0)}px)`,
          }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t("home.quickContact")}</h2>
              <p className="text-lg text-muted-foreground">Cuéntanos tu reto y descubre cómo IA puede ayudarte</p>
            </div>
            <ContactForm variant="quick" />
          </div>
        </section>

        <section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-700"
          style={{
            opacity: Math.min(Math.max((scrollY - 3000) / 300, 0), 1),
            transform: `scale(${Math.min(0.95 + (scrollY - 3000) / 2000, 1)})`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">¿Listo para transformar tu negocio con IA?</h2>
            <p className="text-lg mb-8 text-white/90">
              Nuestro equipo de expertos está listo para ayudarte a automatizar y escalar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white hover:bg-white/90 text-primary px-8 py-6 h-auto font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Solicitar Consulta
                </Button>
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/70 hover:border-white px-8 py-6 h-auto font-semibold text-lg backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Chat en WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}
