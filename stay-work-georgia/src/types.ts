import type { CSSProperties, ReactElement } from 'react'

export type NavKey = 'services' | 'about' | 'faq' | 'contact'

export type Service = {
  key: string
  title: string
  short: string
  description: string
  whatsIncluded: Array<{ title: string; desc: string }>
  detailedId: string
  icon: (props: { className?: string; style?: CSSProperties }) => ReactElement
}

export const delayStyle = (ms: number): CSSProperties =>
  ({ ['--d' as string]: ms } as CSSProperties)
