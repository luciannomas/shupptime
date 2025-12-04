"use client"

import { useLanguage } from "@/hooks/use-language"
import { ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    id: "hgmartinez",
    url: "https://www.hgmartinezabogado.com/",
    image: "/abogados-legal-website-professional.jpg",
  },
  {
    id: "altaro",
    url: "https://altaroconsulting.com/",
    image: "/consulting-business-professional.jpg",
  },
]

const partnerLogos = [
  { id: "clarin", name: "clarin" },
  { id: "ole", name: "ole" },
  { id: "accenture", name: "accenture" },
  { id: "carrefour", name: "carrefour" },
  { id: "npc", name: "npc" },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        {/* Casos de Éxito */}
        <div id="projects" className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("home.projects")}</h2>
            <p className="text-xl text-muted-foreground">{t("home.projectsDesc")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {projects.map((project) => {
              const projectData = t(`projects.${project.id}`)
              return (
                <div
                  key={project.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-primary/20 hover:border-accent hover:shadow-xl hover:shadow-accent/20 transition-all hover:-translate-y-1"
                >
                  <div className="overflow-hidden h-64 bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={projectData.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{projectData.name}</h3>

                    <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-3">"{projectData.feedback}"</p>
                      <p className="font-semibold text-sm text-foreground">{projectData.client}</p>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/30 group/btn"
                    >
                      {t("home.visitSite")}
                      <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-6 shadow-lg shadow-accent/30"
              >
                {t("home.requestDemo")}
              </Button>
            </Link>
          </div>
        </div>

        {/* Colaboraciones */}
        <div id="collaborations">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("home.collaborations")}</h2>
            <p className="text-xl text-muted-foreground">{t("home.collaborationsDesc")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerLogos.map((partner) => (
              <div
                key={partner.id}
                className="flex items-center justify-center p-6 bg-card rounded-xl border border-primary/20 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all group cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                    <span className="text-2xl font-bold text-accent group-hover:text-primary transition-colors">
                      {partner.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="font-semibold text-sm">{t(`partners.${partner.id}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
