import { type NextRequest, NextResponse } from "next/server"

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

    // For now, we'll use a simple approach with mailto
    // In production, you'd want to use a service like Resend, SendGrid, or Nodemailer

    // You can integrate with email services here
    // For demonstration, we'll log the email content
    console.log("Email to send:", {
      to: "caleb4sao@gmail.com",
      from: email,
      subject: `Portfolio Contact: ${subject}`,
      content: emailContent,
    })

    // Simulate email sending (replace with actual email service)
    // Example with Resend (you'd need to install and configure):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'contact@yourdomain.com',
      to: 'caleb4sao@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      replyTo: email
    })
    */

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
