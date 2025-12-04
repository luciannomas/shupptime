import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, need, message } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json({ error: "Nombre y email son requeridos" }, { status: 400 })
    }

    // Send email via Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "luciano.mastran@gmail.com", // Tu email verificado en Resend
      replyTo: email, // Email del usuario para responder
      subject: `Nuevo contacto: ${name} - ${need || "Consulta General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; border-bottom: 3px solid #f59e0b; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
            ${need ? `<p><strong>Servicio Solicitado:</strong> ${need}</p>` : ""}
          </div>

          ${
            message
              ? `
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #374151;">Mensaje:</h3>
              <p style="margin: 0; white-space: pre-wrap; color: #555;">${message}</p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #666;">
            <p>Este mensaje fue enviado a través del formulario de contacto de Shupptime</p>
          </div>
        </div>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Email enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
