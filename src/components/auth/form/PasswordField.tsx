'use client'

import { useState } from 'react'
import type { FieldError, UseFormRegister } from 'react-hook-form'
import { Lock, Eye, EyeOff } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LoginFormData } from '@/schemas/loginSchema'

interface PasswordFieldProps {
  value: string
  register: UseFormRegister<LoginFormData>
  error?: FieldError
  isTouched: boolean
}

export function PasswordField({ value, register, error, isTouched }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
  const isInvalid = isTouched && !!error

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="password" className="text-fg-primary text-[13px] font-semibold">
        Senha
      </label>
      <div className={cn('input-auth', isInvalid && 'input-auth-invalid')}>
        <Lock
          size={18}
          className={cn(
            'shrink-0 transition-colors',
            value.length >= 6 ? 'text-brand-400' : 'text-fg-subtle',
          )}
        />
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="••••••••"
          autoComplete="current-password"
          className="placeholder:text-fg-subtle text-fg-primary min-w-0 flex-1 bg-transparent text-[15px] outline-none"
          {...register('password')}
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          className="text-fg-subtle hover:text-brand-300 grid place-items-center p-1 transition-colors"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {isInvalid && (
        <p className="animate-shake text-[12px]" style={{ color: '#ff6b8a' }}>
          {error?.message}
        </p>
      )}
    </div>
  )
}
