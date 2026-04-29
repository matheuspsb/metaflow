import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dashed'
  size?: 'sm' | 'md' | 'lg'
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const variantStyles = {
  primary: 'bg-gradient-brand text-white shadow-brand-glow hover:shadow-brand-glow-strong',
  secondary:
    'bg-bg-input text-fg-secondary border border-border-subtle hover:bg-bg-card-hover hover:text-fg-primary',
  ghost: 'text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary',
  dashed:
    'border border-dashed border-border-subtle text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary',
} as const

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  md: 'px-4 py-2 text-sm rounded-lg gap-2',
  lg: 'px-5 py-2.5 text-base rounded-lg gap-2',
} as const

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  )
}

export type { ButtonProps }
