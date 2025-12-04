"use client"

import { useLanguage } from "@/hooks/use-language"
import { Globe2 } from "lucide-react"

interface CountryData {
  name: string
  code: string
  flag: string
}

const countries: CountryData[] = [
  { name: "México", code: "MX", flag: "🇲🇽" },
  { name: "Colombia", code: "CO", flag: "🇨🇴" },
  { name: "Uruguay", code: "UY", flag: "🇺🇾" },
  { name: "Chile", code: "CL", flag: "🇨🇱" },
  { name: "Argentina", code: "AR", flag: "🇦🇷" },
  { name: "Ecuador", code: "EC", flag: "🇪🇨" },
  { name: "España", code: "ES", flag: "🇪🇸" },
]

export function CountriesSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe2 className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold">Presencia Global</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Servimos a empresas en múltiples países de Latinoamérica y Europa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {countries.map((country) => (
            <div
              key={country.code}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-primary/20 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-6xl mb-3 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">
                {country.flag}
              </div>

              {/* Tooltip que aparece al hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-foreground text-background text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {country.name}
              </div>

              <h3 className="text-sm font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                {country.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{country.code}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-center">
          <h3 className="text-2xl font-bold mb-3">¿Tu país no está en la lista?</h3>
          <p className="text-muted-foreground mb-6">
            Expandimos constantemente nuestros servicios. Contacta con nuestro equipo para explorar posibilidades.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-colors"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}
