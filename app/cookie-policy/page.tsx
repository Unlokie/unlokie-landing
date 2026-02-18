import type { Metadata } from 'next'
import { LegalDocumentPage } from '@/components/legal/LegalDocumentPage'
import { getLegalDocument, getLegalDocumentMarkdown } from '@/lib/legal-documents'

const legalDocument = getLegalDocument('cookie-policy')

export const metadata: Metadata = {
  title: `${legalDocument.title} | Unlokie`,
  description: legalDocument.description,
  alternates: {
    canonical: '/cookie-policy',
  },
}

export default async function CookiePolicyPage() {
  const markdown = await getLegalDocumentMarkdown('cookie-policy')
  return <LegalDocumentPage slug="cookie-policy" markdown={markdown} />
}
