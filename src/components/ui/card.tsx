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
        'border-border-subtle shadow-card rounded-xl border p-6',
        variant === 'elevated' ? 'bg-bg-card-elevated' : 'bg-bg-card',
        className,
      )}
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
