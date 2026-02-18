import type { Metadata } from 'next'
import { LegalDocumentPage } from '@/components/legal/LegalDocumentPage'
import { getLegalDocument, getLegalDocumentMarkdown } from '@/lib/legal-documents'

const legalDocument = getLegalDocument('privacy-policy')

export const metadata: Metadata = {
  title: `${legalDocument.title} | Unlokie`,
  description: legalDocument.description,
  alternates: {
    canonical: '/privacy-policy',
  },
}

export default async function PrivacyPolicyPage() {
  const markdown = await getLegalDocumentMarkdown('privacy-policy')
  return <LegalDocumentPage slug="privacy-policy" markdown={markdown} />
}
