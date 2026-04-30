import DatabaseIcon from '@/assets/svgs/icon-database.svg'
import CodeIcon from '@/assets/svgs/icon-code.svg'
import PeopleIcon from '@/assets/svgs/icon-people.svg'
import AiIcon from '@/assets/svgs/icon-ai.svg'
import MailIcon from '@/assets/svgs/icon-mail.svg'
import type { FC, SVGProps } from 'react'

export const connections = [
  { id: 'conn-db',     x1: 50, y1: 50, x2: 22, y2: 28 },
  { id: 'conn-code',   x1: 50, y1: 50, x2: 38, y2: 12 },
  { id: 'conn-people', x1: 50, y1: 50, x2: 78, y2: 22 },
  { id: 'conn-ai',     x1: 50, y1: 50, x2: 22, y2: 78 },
  { id: 'conn-mail',   x1: 50, y1: 50, x2: 78, y2: 70 },
]

export const waves = Array.from({ length: 5 }, (_, i) => ({
  id: `wave-${i + 1}`,
  d: `M -20 ${130 + i * 10} Q 100 ${90 + i * 6} 200 ${120 + i * 8} T 420 ${130 + i * 10}`,
  strokeOpacity: 0.18 + i * 0.05,
}))

export const particles: Array<{ id: string; path: string; dur: string; begin: string }> = [
  { id: 'p-db-out-1', path: 'M50,50 L22,28', dur: '2.4s', begin: '-0.3s' },
  { id: 'p-db-in-1',  path: 'M22,28 L50,50', dur: '2.8s', begin: '-1.2s' },
  { id: 'p-db-out-2', path: 'M50,50 L22,28', dur: '3.2s', begin: '-2.0s' },
  { id: 'p-code-out-1', path: 'M50,50 L38,12', dur: '2.6s', begin: '-0.8s' },
  { id: 'p-code-in-1',  path: 'M38,12 L50,50', dur: '2.3s', begin: '-1.5s' },
  { id: 'p-code-out-2', path: 'M50,50 L38,12', dur: '3.4s', begin: '-2.6s' },
  { id: 'p-people-out-1', path: 'M50,50 L78,22', dur: '2.9s', begin: '-0.5s' },
  { id: 'p-people-in-1',  path: 'M78,22 L50,50', dur: '2.5s', begin: '-1.8s' },
  { id: 'p-people-out-2', path: 'M50,50 L78,22', dur: '3.5s', begin: '-2.5s' },
  { id: 'p-ai-out-1', path: 'M50,50 L22,78', dur: '2.7s', begin: '-1.0s' },
  { id: 'p-ai-in-1',  path: 'M22,78 L50,50', dur: '3.0s', begin: '-0.4s' },
  { id: 'p-ai-out-2', path: 'M50,50 L22,78', dur: '3.6s', begin: '-2.2s' },
  { id: 'p-mail-out-1', path: 'M50,50 L78,70', dur: '2.5s', begin: '-1.4s' },
  { id: 'p-mail-in-1',  path: 'M78,70 L50,50', dur: '2.9s', begin: '-0.7s' },
  { id: 'p-mail-out-2', path: 'M50,50 L78,70', dur: '3.3s', begin: '-2.8s' },
]

export const nodes: Array<{
  x: number
  y: number
  Icon: FC<SVGProps<SVGSVGElement>>
  delay: number
}> = [
  { x: 22, y: 28, Icon: DatabaseIcon, delay: 0 },
  { x: 38, y: 12, Icon: CodeIcon, delay: 0.4 },
  { x: 78, y: 22, Icon: PeopleIcon, delay: 0.8 },
  { x: 22, y: 78, Icon: AiIcon, delay: 1.2 },
  { x: 78, y: 70, Icon: MailIcon, delay: 1.6 },
]
