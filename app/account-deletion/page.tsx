import type { Metadata } from 'next'
import { LegalDocumentPage } from '@/components/legal/LegalDocumentPage'
import { getLegalDocument, getLegalDocumentMarkdown } from '@/lib/legal-documents'

const legalDocument = getLegalDocument('account-deletion')

export const metadata: Metadata = {
  title: `${legalDocument.title} | Unlokie`,
  description: legalDocument.description,
  alternates: {
    canonical: '/account-deletion',
  },
}

export default async function AccountDeletionPage() {
  const markdown = await getLegalDocumentMarkdown('account-deletion')
  return <LegalDocumentPage slug="account-deletion" markdown={markdown} />
}
