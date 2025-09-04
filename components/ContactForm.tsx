'use client'

import { useState, FormEvent } from 'react'
import { Button } from './Button'

interface FormData {
  name: string
  email: string
  organization: string
  message: string
  requestDeck: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    message: '',
    requestDeck: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.organization.trim()) newErrors.organization = 'Organization is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Use Formspree as the primary form handler
      const formspreeEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || 'https://formspree.io/f/mldejqgp'
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          requestDeck: formData.requestDeck,
          _replyto: formData.email,
          _subject: `New Contact Form: ${formData.name} from ${formData.organization}`
        })
      })
      
      if (!response.ok) {
        throw new Error('Form submission failed')
      }
      
      setIsSubmitted(true)
      
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting the form. Please try again or contact us directly at info@unlokie.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-charcoal mb-2">Thank you!</h3>
          <p className="text-lg text-charcoal/80 mb-4">
            We&apos;ve received your message and will follow up within 24 hours.
            {formData.requestDeck && ' We&apos;ll send you our investor intro deck under NDA if required.'}
          </p>
          <Button 
            variant="secondary" 
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                organization: '',
                message: '',
                requestDeck: false,
              })
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-base font-medium text-charcoal mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-base font-medium text-charcoal mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-unlokieGreen focus:border-unlokieGreen transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="your.email@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="block text-base font-medium text-charcoal mb-2">
          Organization *
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-unlokieGreen focus:border-unlokieGreen transition-colors ${
            errors.organization ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Investment fund, incubator, or organization"
        />
        {errors.organization && <p className="mt-1 text-sm text-red-500">{errors.organization}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-base font-medium text-charcoal mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-unlokieGreen focus:border-unlokieGreen transition-colors resize-vertical ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Tell us about your interest in Unlokie..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="requestDeck"
          name="requestDeck"
          checked={formData.requestDeck}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-unlokieGreen border-gray-300 rounded focus:ring-unlokieGreen"
        />
        <label htmlFor="requestDeck" className="text-base text-charcoal">
          Send me the investor intro deck (subject to NDA)
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => setFormData({
            name: '',
            email: '',
            organization: '',
            message: '',
            requestDeck: false,
          })}
          className="flex-1"
        >
          Clear Form
        </Button>
      </div>

      <p className="text-sm text-charcoal/60 text-center">
        We&apos;ll only use your info to reply. No cookies. No tracking pixels.
        <br />
        Privacy-friendly analytics help us improve our site.
      </p>
    </form>
  )
}
