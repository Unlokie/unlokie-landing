import Link from 'next/link'
import { MarkdownDocument } from '@/components/legal/MarkdownDocument'
import { getLegalDocument, getLegalDocuments, type LegalDocumentSlug } from '@/lib/legal-documents'

type LegalDocumentPageProps = {
  slug: LegalDocumentSlug
  markdown: string
}

export function LegalDocumentPage({ slug, markdown }: LegalDocumentPageProps) {
  const currentDocument = getLegalDocument(slug)
  const legalDocuments = getLegalDocuments()

  return (
    <div className="relative min-h-screen overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-unlokieGreen/10 via-transparent to-sageGreen/10" />

      <header className="sticky top-0 z-20 border-b border-gray-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-charcoal hover:text-unlokieGreen">
            <img
              src="/Unlokie_logo.png"
              alt="Unlokie"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <span className="hidden text-sm font-medium sm:inline">Back to homepage</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {legalDocuments.map((document) => {
              const isActive = document.slug === slug

              return (
                <Link
                  key={document.slug}
                  href={`/${document.slug}`}
                  className={`rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-unlokieGreen text-white'
                      : 'bg-lightGray/80 text-slateGray hover:bg-unlokieGreen/10 hover:text-unlokieGreen'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {document.title}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <main className="relative z-10 pb-16 pt-8 sm:pb-20 sm:pt-12">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3 overflow-x-auto pb-1 md:hidden">
            {legalDocuments.map((document) => {
              const isActive = document.slug === slug

              return (
                <Link
                  key={`mobile-${document.slug}`}
                  href={`/${document.slug}`}
                  className={`whitespace-nowrap rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-unlokieGreen text-white'
                      : 'bg-white text-slateGray shadow-sm ring-1 ring-gray-200 hover:text-unlokieGreen'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {document.title}
                </Link>
              )
            })}
          </div>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-card sm:p-10 lg:p-12">
            <div className="mb-10 border-b border-gray-100 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-unlokieGreen">Unlokie Legal</p>
              <p className="mt-2 text-sm text-slateGray">{currentDocument.description}</p>
            </div>
            <MarkdownDocument content={markdown} />
          </section>
        </div>
      </main>
    </div>
  )
}
