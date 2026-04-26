import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  title?: string
  action?: ReactNode
  variant?: 'default' | 'elevated'
  className?: string
  children: ReactNode
}

export function Card({ title, action, variant = 'default', className, children }: CardProps) {
  return (
    <section
      className={cn(
        'rounded-xl border border-border-subtle p-6 shadow-card',
        variant === 'elevated' ? 'bg-bg-card-elevated' : 'bg-bg-card',
        className,
      )}
    >
      {(title || action) && (
        <header className="mb-5 flex items-center justify-between">
          {title && <h2 className="text-lg font-semibold text-fg-primary">{title}</h2>}
          {action && <div className="text-sm text-fg-muted">{action}</div>}
        </header>
      )}
      {children}
    </section>
  )
}
