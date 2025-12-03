import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    // Get API key from environment variables
    const apiKey = process.env.RESEND_API_KEY
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const body = await request.json()
    const { name, email, company, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission from Arcwell Digital Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service Needed: ${service || 'Not specified'}
Budget: ${budget || 'Not specified'}

Message:
${message}

---
This email was sent from the Arcwell Digital contact form.
    `.trim()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Arcwell Digital <onboarding@resend.dev>',
      to: ['arcwelldigital@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully!',
        id: data?.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

