"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

interface ContactFormProps {
  variant?: "quick" | "full"
}

export function ContactForm({ variant = "quick" }: ContactFormProps) {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    need: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage({ type: "success", text: variant === "quick" ? t("home.success") : t("contact.form.success") })
        setFormData({ name: "", email: "", phone: "", company: "", need: "", message: "" })
      } else {
        setMessage({ type: "error", text: variant === "quick" ? t("home.error") : t("contact.form.error") })
      }
    } catch (error) {
      setMessage({ type: "error", text: variant === "quick" ? t("home.error") : t("contact.form.error") })
    } finally {
      setLoading(false)
    }
  }

  if (variant === "quick") {
    return (
      <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 border border-border shadow-lg">
        <h3 className="text-xl font-bold mb-4 text-foreground">{t("home.quickContact")}</h3>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder={t("home.name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder={t("home.email")}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <select
              name="need"
              value={formData.need}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">{t("home.need")}</option>
              <option value="Diseño Web">{t("home.service1")}</option>
              <option value="Desarrollo">{t("home.service2")}</option>
              <option value="E-commerce">{t("home.service3")}</option>
              <option value="SEO">{t("home.service4")}</option>
            </select>
          </div>

          {message && (
            <div
              className={`p-3 rounded-lg text-sm ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {message.text}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {loading ? t("home.sending") : t("home.send")}
          </Button>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t("contact.form.name")}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t("contact.form.email")}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t("contact.form.phone")}</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t("contact.form.company")}</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">{t("contact.form.need")}</label>
          <select
            name="need"
            value={formData.need}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">{t("contact.form.need")}</option>
            <option value="Diseño Web">{t("home.service1")}</option>
            <option value="Desarrollo">{t("home.service2")}</option>
            <option value="E-commerce">{t("home.service3")}</option>
            <option value="SEO">{t("home.service4")}</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">{t("contact.form.message")}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {message && (
          <div
            className={`md:col-span-2 p-4 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message.text}
          </div>
        )}

        <div className="md:col-span-2">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 h-auto"
          >
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </Button>
        </div>
      </div>
    </form>
  )
}
