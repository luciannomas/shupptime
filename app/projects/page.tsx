"use client"

import { useLanguage } from "@/hooks/use-language"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"

export default function ProjectsPage() {
  const { t, language } = useLanguage()

  const projects = [
    {
      id: "altaro",
      name: "Altaro Consulting",
      country: "🇲🇽 México",
      url: "https://altaroconsulting.com/",
      description: {
        es: "Consultora de negocios especializada en transformación digital y estrategia empresarial",
        en: "Business consulting firm specialized in digital transformation and business strategy",
        it: "Società di consulenza aziendale specializzata in trasformazione digitale e strategia aziendale",
      },
      challenge: {
        es: "Altaro necesitaba una presencia web moderna que reflejara su expertise en consultoría y atrajera clientes de alto valor.",
        en: "Altaro needed a modern web presence that reflected their consulting expertise and attracted high-value clients.",
        it: "Altaro aveva bisogno di una moderna presenza web che riflettesse la loro esperienza di consulenza e attirasse clienti di alto valore.",
      },
      solution: {
        es: "Desarrollamos una plataforma web de alta conversión con diseño moderno, integración de CRM, y sistema de contacto automatizado con IA.",
        en: "We developed a high-conversion web platform with modern design, CRM integration, and automated AI contact system.",
        it: "Abbiamo sviluppato una piattaforma web ad alta conversione con design moderno, integrazione CRM e sistema di contatto AI automatizzato.",
      },
      results: {
        es: [
          "Aumento de 250% en leads mensuales",
          "Reducción del 60% en tiempo de respuesta a consultas",
          "Automatización completa del funnel de ventas",
          "ROI positivo en 2 meses",
        ],
        en: [
          "250% increase in monthly leads",
          "60% reduction in response time to inquiries",
          "Complete sales funnel automation",
          "Positive ROI in 2 months",
        ],
        it: [
          "Aumento del 250% nei lead mensili",
          "Riduzione del 60% nel tempo di risposta alle richieste",
          "Automazione completa del funnel di vendita",
          "ROI positivo in 2 mesi",
        ],
      },
      technologies: ["Next.js", "React", "Tailwind CSS", "MongoDB", "IA Chatbots"],
      feedback: t("projects.altaro.feedback"),
      client: t("projects.altaro.client"),
    },
    {
      id: "hgmartinez",
      name: "HG Martínez Abogados",
      country: "🇦🇷 Argentina",
      url: "https://www.hgmartinezabogado.com/",
      description: {
        es: "Estudio jurídico líder especializado en derecho corporativo y litigación comercial",
        en: "Leading law firm specialized in corporate law and commercial litigation",
        it: "Studio legale leader specializzato in diritto societario e contenzioso commerciale",
      },
      challenge: {
        es: "Necesitaban un sistema para gestionar casos, mejorar comunicación con clientes y automatizar procesos administrativos.",
        en: "They needed a system to manage cases, improve client communication, and automate administrative processes.",
        it: "Avevano bisogno di un sistema per gestire i casi, migliorare la comunicazione con i clienti e automatizzare i processi amministrativi.",
      },
      solution: {
        es: "Implementamos una plataforma integral con portal de clientes, sistema de gestión de casos, y automatización de documentos con IA.",
        en: "We implemented an integrated platform with client portal, case management system, and AI-powered document automation.",
        it: "Abbiamo implementato una piattaforma integrata con portale clienti, sistema di gestione dei casi e automazione documenti basata su IA.",
      },
      results: {
        es: [
          "300% de aumento en productividad del equipo",
          "80% de reducción en tiempo administrativo",
          "Generación automática de documentos jurídicos",
          "Satisfacción de clientes mejorada en 95%",
        ],
        en: [
          "300% increase in team productivity",
          "80% reduction in administrative time",
          "Automatic generation of legal documents",
          "Client satisfaction improved by 95%",
        ],
        it: [
          "Aumento del 300% nella produttività del team",
          "Riduzione dell'80% nel tempo amministrativo",
          "Generazione automatica di documenti legali",
          "Soddisfazione clienti migliorata del 95%",
        ],
      },
      technologies: ["Next.js", "React", "Tailwind CSS", "SQL", "IA Automation"],
      feedback: t("projects.hgmartinez.feedback"),
      client: t("projects.hgmartinez.client"),
    },
  ]

  const collaborations = [
    { name: "Diario Clarín", icon: "📰" },
    { name: "Olé", icon: "⚽" },
    { name: "Accenture", icon: "🏢" },
    { name: "Carrefour", icon: "🛒" },
    { name: "NPC", icon: "💻" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            {language === "es" ? "Volver" : language === "it" ? "Torna indietro" : "Back"}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            {language === "es" ? "Nuestros Proyectos" : language === "it" ? "I Nostri Progetti" : "Our Projects"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {language === "es"
              ? "Casos de éxito que transformaron negocios con IA y automatización"
              : language === "it"
                ? "Storie di successo che hanno trasformato i business con IA e automazione"
                : "Success stories that transformed businesses with AI and automation"}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{project.country.split(" ")[0]}</div>
                    <div className="text-2xl font-bold text-foreground">{project.name}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="mb-6">
                  <div className="text-sm text-accent font-semibold mb-2">{project.country}</div>
                  <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                  <p className="text-muted-foreground mb-4">{project.description[language]}</p>
                </div>

                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === "es" ? "El Desafío" : language === "it" ? "La Sfida" : "The Challenge"}
                    </h3>
                    <p className="text-muted-foreground">{project.challenge[language]}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === "es"
                        ? "Nuestra Solución"
                        : language === "it"
                          ? "La Nostra Soluzione"
                          : "Our Solution"}
                    </h3>
                    <p className="text-muted-foreground">{project.solution[language]}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      {language === "es" ? "Resultados" : language === "it" ? "Risultati" : "Results"}
                    </h3>
                    <ul className="space-y-2">
                      {project.results[language].map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-card rounded-lg p-6 mb-6 border border-border">
                  <p className="text-foreground mb-4 italic">"{project.feedback}"</p>
                  <p className="text-sm text-accent font-semibold">{project.client}</p>
                </div>

                {/* CTA */}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    {language === "es" ? "Visitar Sitio" : language === "it" ? "Visita Sito" : "Visit Site"}
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === "es"
              ? "Colaboraciones Estratégicas"
              : language === "it"
                ? "Partnership Strategici"
                : "Strategic Partnerships"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {collaborations.map((collab) => (
              <div
                key={collab.name}
                className="bg-background rounded-lg p-6 border border-border hover:border-primary transition-colors text-center"
              >
                <div className="text-3xl mb-3">{collab.icon}</div>
                <p className="font-semibold text-sm">{collab.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === "es"
              ? "¿Listo para transformar tu negocio?"
              : language === "it"
                ? "Pronto a trasformare il tuo business?"
                : "Ready to transform your business?"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === "es"
              ? "Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos con IA y automatización"
              : language === "it"
                ? "Contattaci e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi con IA e automazione"
                : "Contact us and discover how we can help you achieve your goals with AI and automation"}
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              {language === "es" ? "Solicitar Demo" : language === "it" ? "Richiedi Demo" : "Request Demo"}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
