/**
 * Card — Componente primitivo do FocusFlow.
 *
 * Segue o padrão definido em docs/DESIGN.md:
 * - bg-bg-card + border-subtle + rounded-xl + p-6
 * - Aceita variantes: 'default' | 'elevated'
 *
 * Use este componente como base para QUALQUER card do dashboard.
 */
import { ReactNode } from 'react'

interface CardProps {
  title?: string
  action?: ReactNode
  variant?: 'default' | 'elevated'
  className?: string
  children: ReactNode
}

export function Card({ title, action, variant = 'default', className = '', children }: CardProps) {
  const bgClass = variant === 'elevated' ? 'bg-bg-card-elevated' : 'bg-bg-card'

  return (
    <section
      className={` ${bgClass} border-border-subtle shadow-card rounded-xl border p-6 ${className} `}
    >
      {(title || action) && (
        <header className="mb-5 flex items-center justify-between">
          {title && <h2 className="text-fg-primary text-lg font-semibold">{title}</h2>}
          {action && <div className="text-fg-muted text-sm">{action}</div>}
        </header>
      )}
      {children}
    </section>
  )
}
