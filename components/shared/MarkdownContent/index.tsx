'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import styles from './styles.module.scss'
import { renderers } from './renderers'

type MarkdownContentProps = {
  rawContent: string
}

const MarkdownContent = ({ rawContent }: MarkdownContentProps) => {
  return (
    <ReactMarkdown className={styles.content} remarkPlugins={[remarkGfm]} components={renderers}>
      {rawContent}
    </ReactMarkdown>
  )
}

export default MarkdownContent
