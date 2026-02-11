import { NextResponse } from 'next/server'

interface ContactPayload {
  name?: string
  email?: string
  organization?: string
  message?: string
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnjbjgdb'

function normalize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload
    const name = normalize(body.name)
    const email = normalize(body.email)
    const organization = normalize(body.organization)
    const message = normalize(body.message)

    if (!name || !email || !organization || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const upstreamResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        organization,
        message,
        _replyto: email,
        _subject: `New Contact Form: ${name} from ${organization}`,
      }),
    })

    if (!upstreamResponse.ok) {
      const errorText = await upstreamResponse.text()
      console.error('Upstream form submission failed', upstreamResponse.status, errorText)
      return NextResponse.json(
        { error: 'Upstream form service returned an error' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
