import { readFile } from 'fs/promises'
import path from 'path'
import { cache } from 'react'

export type LegalDocumentSlug = 'privacy-policy' | 'cookie-policy' | 'terms-and-conditions'

type LegalDocument = {
  slug: LegalDocumentSlug
  fileName: string
  title: string
  description: string
}

const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    slug: 'privacy-policy',
    fileName: 'privacy-policy.md',
    title: 'Privacy Policy',
    description: 'How Unlokie collects, uses, and protects personal data.',
  },
  {
    slug: 'cookie-policy',
    fileName: 'cookie-policy.md',
    title: 'Cookie Policy',
    description: 'Cookie practices for web and mobile.',
  },
  {
    slug: 'terms-and-conditions',
    fileName: 'terms-and-conditions.md',
    title: 'Terms & Conditions',
    description: 'Rules and legal terms for using Unlokie services.',
  },
]

const legalDocumentsBySlug = Object.fromEntries(
  LEGAL_DOCUMENTS.map((document) => [document.slug, document] as const),
) as Record<LegalDocumentSlug, LegalDocument>

export function getLegalDocuments(): LegalDocument[] {
  return LEGAL_DOCUMENTS
}

export function getLegalDocument(slug: LegalDocumentSlug): LegalDocument {
  return legalDocumentsBySlug[slug]
}

const readLegalDocument = cache(async (slug: LegalDocumentSlug): Promise<string> => {
  const document = getLegalDocument(slug)
  const filePath = path.join(process.cwd(), 'content', 'legal', document.fileName)
  return readFile(filePath, 'utf8')
})

export async function getLegalDocumentMarkdown(slug: LegalDocumentSlug): Promise<string> {
  return readLegalDocument(slug)
}
