import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend" // Add this import

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from your portfolio website
    `.trim()

    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY) // Uncomment this line

    // Send the email using Resend
    await resend.emails.send({
      // Uncomment this block
      from: "onboarding@resend.dev", // IMPORTANT: Change this to your verified Resend domain/email, or use 'onboarding@resend.dev' for testing
      to: "caleb4sao@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      replyTo: email,
    })
    // End of uncommented block

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
