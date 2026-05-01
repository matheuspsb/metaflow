import type { FieldError, UseFormRegister } from 'react-hook-form'
import { User, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LoginFormData } from '@/schemas/loginSchema'

interface EmailFieldProps {
  value: string
  register: UseFormRegister<LoginFormData>
  error?: FieldError
  isTouched: boolean
}

export function EmailField({ value, register, error, isTouched }: EmailFieldProps) {
  const isValid = isTouched && !error && value.length > 0
  const isInvalid = isTouched && !!error

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-fg-primary text-[13px] font-semibold">
        E-mail
      </label>
      <div
        className={cn(
          'input-auth',
          isInvalid && 'input-auth-invalid',
          isValid && 'input-auth-valid',
        )}
      >
        <User
          size={18}
          className={cn('shrink-0 transition-colors', isValid ? 'text-brand-400' : 'text-fg-subtle')}
        />
        <input
          id="email"
          type="email"
          placeholder="seu@email.com"
          autoComplete="email"
          className="placeholder:text-fg-subtle text-fg-primary min-w-0 flex-1 bg-transparent text-[15px] outline-none"
          {...register('email')}
        />
        {isValid && <Check size={16} className="shrink-0" style={{ color: '#4ade80' }} />}
      </div>
      {isInvalid && (
        <p className="animate-shake text-[12px]" style={{ color: '#ff6b8a' }}>
          {error?.message}
        </p>
      )}
    </div>
  )
}
