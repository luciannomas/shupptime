"use client"

import { Github, Cloud, Zap, Code2, Palette } from "lucide-react"

const technologies = [
  { name: "GitHub", category: "Version Control", icon: Github },
  { name: "Vercel", category: "Deployment", icon: Cloud },
  { name: "Next.js", category: "Framework", icon: Code2 },
  { name: "MongoDB", category: "Database", icon: Zap },
  { name: "SQL", category: "Database", icon: Zap },
  { name: "v0", category: "AI Design", icon: Palette },
  { name: "Cursor", category: "IDE", icon: Code2 },
  { name: "Google Cloud", category: "Cloud Services", icon: Cloud },
  { name: "AWS", category: "Cloud Services", icon: Cloud },
  { name: "Azure", category: "Cloud Services", icon: Cloud },
  { name: "Node.js", category: "Runtime", icon: Zap },
  { name: "React", category: "Frontend", icon: Code2 },
  { name: "Tailwind CSS", category: "Styling", icon: Palette },
  { name: "shadcn/ui", category: "Components", icon: Palette },
  { name: "Semantic UI", category: "Components", icon: Palette },
  { name: "Material UI", category: "Components", icon: Palette },
]

export function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background border-y border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tecnologías que Dominamos</h2>
          <p className="text-xl text-muted-foreground">Stack moderno y completo para soluciones IA</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => {
            const Icon = tech.icon
            return (
              <div
                key={i}
                className="group relative p-6 rounded-lg bg-card border border-primary/20 hover:border-accent hover:bg-accent/5 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex flex-col items-center gap-3">
                  <Icon className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
                  <span className="text-sm font-semibold text-center text-foreground group-hover:text-accent transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground group-hover:text-accent/70 transition-colors">
                    {tech.category}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20">
          <p className="text-center text-xl font-semibold text-foreground leading-relaxed">
            Atrévete a crear interfaces personalizadas. Adapta tu mejor idea con las últimas tecnologías.
          </p>
        </div>
      </div>
    </section>
  )
}
