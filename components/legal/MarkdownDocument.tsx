import type { ReactNode } from 'react'

type MarkdownDocumentProps = {
  content: string
}

type MarkdownBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; lines: string[] }
  | { type: 'unordered-list'; items: string[] }
  | { type: 'ordered-list'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }

const headingPattern = /^(#{1,3})\s+(.*)$/
const unorderedListPattern = /^[-*]\s+(.*)$/
const orderedListPattern = /^\d+\.\s+(.*)$/
const inlinePattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\(([^)]+)\))/g

function isTableRow(line: string): boolean {
  const trimmed = line.trim()
  return trimmed.startsWith('|') && trimmed.endsWith('|')
}

function parseTableRow(line: string): string[] {
  return line
    .trim()
    .slice(1, -1)
    .split('|')
    .map((cell) => cell.trim())
}

function isTableSeparatorRow(cells: string[]): boolean {
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  let index = 0
  let match: RegExpExecArray | null
  inlinePattern.lastIndex = 0

  while ((match = inlinePattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const token = match[0]

    if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(
        <strong key={`${keyPrefix}-strong-${index}`} className="font-semibold text-charcoal">
          {token.slice(2, -2)}
        </strong>,
      )
    } else if (token.startsWith('`') && token.endsWith('`')) {
      nodes.push(
        <code
          key={`${keyPrefix}-code-${index}`}
          className="rounded bg-lightGray px-1.5 py-0.5 text-sm text-charcoal"
        >
          {token.slice(1, -1)}
        </code>,
      )
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/)

      if (linkMatch) {
        const [, label, href] = linkMatch
        const external = /^https?:\/\//.test(href)

        nodes.push(
          <a
            key={`${keyPrefix}-link-${index}`}
            href={href}
            className="text-unlokieGreen underline decoration-unlokieGreen/40 underline-offset-2 hover:text-forestGreen"
            {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
          >
            {label}
          </a>,
        )
      } else {
        nodes.push(token)
      }
    }

    lastIndex = inlinePattern.lastIndex
    index += 1
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return nodes
}

function parseMarkdown(content: string): MarkdownBlock[] {
  const lines = content.replace(/\r\n/g, '\n').split('\n')
  const blocks: MarkdownBlock[] = []
  let cursor = 0

  while (cursor < lines.length) {
    const currentLine = lines[cursor]
    const trimmed = currentLine.trim()

    if (!trimmed) {
      cursor += 1
      continue
    }

    const headingMatch = trimmed.match(headingPattern)
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length as 1 | 2 | 3,
        text: headingMatch[2].trim(),
      })
      cursor += 1
      continue
    }

    if (isTableRow(trimmed)) {
      const tableRows: string[][] = []

      while (cursor < lines.length && isTableRow(lines[cursor].trim())) {
        tableRows.push(parseTableRow(lines[cursor]))
        cursor += 1
      }

      if (tableRows.length > 0) {
        const headers = tableRows[0]
        const hasSeparator = tableRows.length > 1 && isTableSeparatorRow(tableRows[1])
        const rows = hasSeparator ? tableRows.slice(2) : tableRows.slice(1)
        blocks.push({ type: 'table', headers, rows })
      }

      continue
    }

    if (unorderedListPattern.test(trimmed)) {
      const items: string[] = []

      while (cursor < lines.length) {
        const listLine = lines[cursor].trim()
        const listMatch = listLine.match(unorderedListPattern)

        if (!listMatch) {
          break
        }

        items.push(listMatch[1].trim())
        cursor += 1
      }

      blocks.push({ type: 'unordered-list', items })
      continue
    }

    if (orderedListPattern.test(trimmed)) {
      const items: string[] = []

      while (cursor < lines.length) {
        const listLine = lines[cursor].trim()
        const listMatch = listLine.match(orderedListPattern)

        if (!listMatch) {
          break
        }

        items.push(listMatch[1].trim())
        cursor += 1
      }

      blocks.push({ type: 'ordered-list', items })
      continue
    }

    const paragraphLines: string[] = []

    while (cursor < lines.length) {
      const paragraphLine = lines[cursor]
      const paragraphTrimmed = paragraphLine.trim()

      if (
        !paragraphTrimmed ||
        headingPattern.test(paragraphTrimmed) ||
        isTableRow(paragraphTrimmed) ||
        unorderedListPattern.test(paragraphTrimmed) ||
        orderedListPattern.test(paragraphTrimmed)
      ) {
        break
      }

      paragraphLines.push(paragraphLine.trimEnd())
      cursor += 1
    }

    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', lines: paragraphLines })
    }
  }

  return blocks
}

export function MarkdownDocument({ content }: MarkdownDocumentProps) {
  const blocks = parseMarkdown(content)

  return (
    <article className="text-slateGray">
      {blocks.map((block, blockIndex) => {
        if (block.type === 'heading') {
          if (block.level === 1) {
            return (
              <h1 key={`heading-${blockIndex}`} className="mb-6 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                {renderInline(block.text, `heading-${blockIndex}`)}
              </h1>
            )
          }

          if (block.level === 2) {
            return (
              <h2 key={`heading-${blockIndex}`} className="mb-4 mt-10 text-2xl font-semibold text-charcoal">
                {renderInline(block.text, `heading-${blockIndex}`)}
              </h2>
            )
          }

          return (
            <h3 key={`heading-${blockIndex}`} className="mb-3 mt-8 text-xl font-semibold text-charcoal">
              {renderInline(block.text, `heading-${blockIndex}`)}
            </h3>
          )
        }

        if (block.type === 'unordered-list') {
          return (
            <ul key={`unordered-${blockIndex}`} className="mb-6 list-disc space-y-2 pl-6">
              {block.items.map((item, itemIndex) => (
                <li key={`unordered-item-${blockIndex}-${itemIndex}`} className="leading-relaxed text-slateGray">
                  {renderInline(item, `unordered-${blockIndex}-${itemIndex}`)}
                </li>
              ))}
            </ul>
          )
        }

        if (block.type === 'ordered-list') {
          return (
            <ol key={`ordered-${blockIndex}`} className="mb-6 list-decimal space-y-2 pl-6">
              {block.items.map((item, itemIndex) => (
                <li key={`ordered-item-${blockIndex}-${itemIndex}`} className="leading-relaxed text-slateGray">
                  {renderInline(item, `ordered-${blockIndex}-${itemIndex}`)}
                </li>
              ))}
            </ol>
          )
        }

        if (block.type === 'table') {
          return (
            <div key={`table-${blockIndex}`} className="mb-8 overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full border-collapse text-left text-sm">
                <thead className="bg-lightGray/80">
                  <tr>
                    {block.headers.map((header, headerIndex) => (
                      <th key={`header-${blockIndex}-${headerIndex}`} className="border-b border-gray-200 px-4 py-3 font-semibold text-charcoal">
                        {renderInline(header, `header-${blockIndex}-${headerIndex}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {block.rows.map((row, rowIndex) => (
                    <tr key={`row-${blockIndex}-${rowIndex}`} className="border-b border-gray-100 last:border-0">
                      {row.map((cell, cellIndex) => (
                        <td key={`cell-${blockIndex}-${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top leading-relaxed">
                          {renderInline(cell, `cell-${blockIndex}-${rowIndex}-${cellIndex}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        return (
          <p key={`paragraph-${blockIndex}`} className="mb-6 text-base leading-relaxed">
            {block.lines.map((line, lineIndex) => (
              <span key={`paragraph-line-${blockIndex}-${lineIndex}`}>
                {renderInline(line, `paragraph-${blockIndex}-${lineIndex}`)}
                {lineIndex < block.lines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        )
      })}
    </article>
  )
}
