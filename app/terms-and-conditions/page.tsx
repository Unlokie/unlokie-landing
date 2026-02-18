import type { Metadata } from 'next'
import { LegalDocumentPage } from '@/components/legal/LegalDocumentPage'
import { getLegalDocument, getLegalDocumentMarkdown } from '@/lib/legal-documents'

const legalDocument = getLegalDocument('terms-and-conditions')

export const metadata: Metadata = {
  title: `${legalDocument.title} | Unlokie`,
  description: legalDocument.description,
  alternates: {
    canonical: '/terms-and-conditions',
  },
}

export default async function TermsAndConditionsPage() {
  const markdown = await getLegalDocumentMarkdown('terms-and-conditions')
  return <LegalDocumentPage slug="terms-and-conditions" markdown={markdown} />
}
