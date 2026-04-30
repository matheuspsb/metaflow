'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, User, Lock, ArrowRight, AlertCircle, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  email: z.string().email({ message: 'Por favor, insira um e-mail válido.' }),
  password: z.string().min(6, { message: 'A senha precisa ter ao menos 6 caracteres.' }),
  remember: z.boolean(),
})

type FormData = z.infer<typeof schema>

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <path d="M21.6 12.23c0-.74-.07-1.45-.19-2.13H12v4.03h5.4a4.62 4.62 0 0 1-2 3.03v2.52h3.24c1.9-1.74 2.99-4.31 2.99-7.45z" fill="#4285F4" />
      <path d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.23-2.52c-.9.6-2.04.96-3.39.96-2.6 0-4.81-1.76-5.6-4.12H3.06v2.6A10 10 0 0 0 12 22z" fill="#34A853" />
      <path d="M6.4 13.9a6.02 6.02 0 0 1 0-3.82V7.48H3.06a10 10 0 0 0 0 9.04l3.34-2.62z" fill="#FBBC05" />
      <path d="M12 5.96c1.47 0 2.79.5 3.82 1.49l2.86-2.86A10 10 0 0 0 12 2 10 10 0 0 0 3.06 7.48L6.4 10.1c.79-2.36 3-4.13 5.6-4.13z" fill="#EA4335" />
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden>
      <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  )
}

function SuccessState({ onBack }: { onBack: () => void }) {
  return (
    <div className="animate-card-in flex flex-col items-center text-center gap-5 py-4">
      <div
        className="animate-pop-in grid place-items-center rounded-full"
        style={{
          width: 72,
          height: 72,
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(34, 197, 94, 0.3))',
          border: '2px solid rgba(74, 222, 128, 0.5)',
          color: '#4ade80',
        }}
      >
        <Check size={36} />
      </div>
      <div>
        <h2 className="text-fg-primary text-2xl font-bold">Acesso liberado!</h2>
        <p className="text-fg-muted mt-2 text-sm">Redirecionando para o seu painel…</p>
      </div>
      <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(139, 92, 246, 0.18)' }}>
        <div className="animate-fill-bar h-full rounded-full w-0 bg-gradient-brand" />
      </div>
      <button
        type="button"
        onClick={onBack}
        className="text-fg-muted border-border-default hover:text-fg-primary hover:border-border-strong rounded-lg border px-4 py-2 text-sm transition-all duration-150"
      >
        Voltar ao login
      </button>
    </div>
  )
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [serverError, setServerError] = useState('')
  const [socialLoading, setSocialLoading] = useState<'google' | 'microsoft' | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, touchedFields },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', password: '', remember: true },
    mode: 'onBlur',
  })

  const emailValue = watch('email')
  const passwordValue = watch('password')

  const emailTouched = !!touchedFields.email
  const passwordTouched = !!touchedFields.password
  const emailIsValid = emailTouched && !errors.email && emailValue.length > 0
  const emailIsInvalid = emailTouched && !!errors.email

  const isEmailValidRaw = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue || '')
  const canSubmit = isEmailValidRaw && (passwordValue || '').length >= 6 && !submitting

  async function onSubmit(data: FormData) {
    setServerError('')
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1400))
    setSubmitting(false)
    if (data.email === 'erro@metaflow.com') {
      setServerError('E-mail ou senha incorretos. Tente novamente.')
      return
    }
    setSuccess(true)
  }

  async function onSocial(provider: 'google' | 'microsoft') {
    if (socialLoading || submitting) return
    setSocialLoading(provider)
    await new Promise((r) => setTimeout(r, 1200))
    setSocialLoading(null)
    setSuccess(true)
  }

  function handleBack() {
    setSuccess(false)
    setServerError('')
    reset()
  }

  if (success) {
    return <SuccessState onBack={handleBack} />
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-[18px]">
      {/* Welcome */}
      <div>
        <h1 className="text-fg-primary text-2xl font-bold tracking-tight">
          Bem-vindo de volta! <span className="animate-wave">👋</span>
        </h1>
        <p className="text-fg-muted mt-1.5 text-sm">Acesse sua conta para continuar</p>
      </div>

      {/* Server error banner */}
      {serverError && (
        <div
          className="animate-shake flex items-center gap-2.5 rounded-lg px-3.5 py-3 text-sm"
          style={{
            background: 'rgba(255, 107, 138, 0.1)',
            border: '1px solid rgba(255, 107, 138, 0.3)',
            color: '#ffb8c5',
          }}
          role="alert"
        >
          <AlertCircle size={16} className="shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Email field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-fg-primary text-[13px] font-semibold">
          E-mail
        </label>
        <div
          className={cn(
            'input-auth',
            emailIsInvalid && 'input-auth-invalid',
            emailIsValid && !emailIsInvalid && 'input-auth-valid',
          )}
        >
          <User
            size={18}
            className={cn(
              'shrink-0 transition-colors',
              emailIsValid ? 'text-brand-400' : 'text-fg-subtle',
            )}
          />
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            autoComplete="email"
            className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-fg-subtle text-fg-primary"
            {...register('email')}
          />
          {emailIsValid && (
            <Check size={16} className="shrink-0" style={{ color: '#4ade80' }} />
          )}
        </div>
        {emailIsInvalid && (
          <p className="animate-shake text-[12px]" style={{ color: '#ff6b8a' }}>
            {errors.email?.message}
          </p>
        )}
      </div>

      {/* Password field */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-fg-primary text-[13px] font-semibold">
          Senha
        </label>
        <div
          className={cn(
            'input-auth',
            passwordTouched && errors.password && 'input-auth-invalid',
          )}
        >
          <Lock
            size={18}
            className={cn(
              'shrink-0 transition-colors',
              (passwordValue || '').length >= 6 ? 'text-brand-400' : 'text-fg-subtle',
            )}
          />
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            autoComplete="current-password"
            className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-fg-subtle text-fg-primary"
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
        {passwordTouched && errors.password && (
          <p className="animate-shake text-[12px]" style={{ color: '#ff6b8a' }}>
            {errors.password?.message}
          </p>
        )}
      </div>

      {/* Remember + forgot */}
      <div className="flex items-center justify-between">
        <label className="text-fg-muted flex cursor-pointer select-none items-center gap-2 text-[13px]">
          <input type="checkbox" className="sr-only" {...register('remember')} />
          <span
            className={cn(
              'grid h-4 w-4 place-items-center rounded-[4px] border transition-all duration-150',
              watch('remember')
                ? 'border-brand-500 bg-brand-600'
                : 'border-fg-subtle bg-transparent',
            )}
          >
            {watch('remember') && <Check size={10} className="text-white" />}
          </span>
          Lembrar de mim
        </label>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-brand-400 hover:text-brand-300 text-[13px] font-medium transition-colors hover:underline"
        >
          Esqueci minha senha
        </a>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={!canSubmit}
        className={cn(
          'bg-gradient-brand shadow-brand-glow hover:shadow-brand-glow-strong mt-1 flex h-[50px] w-full items-center justify-center gap-2.5 rounded-xl text-[15px] font-semibold text-white transition-all duration-200',
          !canSubmit && 'cursor-not-allowed opacity-50',
          canSubmit && !submitting && 'hover:-translate-y-px active:scale-[0.98]',
          submitting && 'cursor-wait',
        )}
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            <span>Entrando…</span>
          </>
        ) : (
          <>
            <span>Entrar</span>
            <ArrowRight size={18} />
          </>
        )}
      </button>

      {/* Divider */}
      <div className="text-fg-subtle flex items-center gap-3 text-[12px]">
        <span
          className="h-px flex-1"
          style={{ background: 'rgba(139, 92, 246, 0.18)' }}
        />
        ou continue com
        <span
          className="h-px flex-1"
          style={{ background: 'rgba(139, 92, 246, 0.18)' }}
        />
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="btn-social"
          onClick={() => onSocial('google')}
          disabled={!!socialLoading || submitting}
        >
          {socialLoading === 'google' ? (
            <Loader2 size={14} className="animate-spin text-brand-400" />
          ) : (
            <GoogleIcon />
          )}
          <span>Google</span>
        </button>
        <button
          type="button"
          className="btn-social"
          onClick={() => onSocial('microsoft')}
          disabled={!!socialLoading || submitting}
        >
          {socialLoading === 'microsoft' ? (
            <Loader2 size={14} className="animate-spin text-brand-400" />
          ) : (
            <MicrosoftIcon />
          )}
          <span>Microsoft</span>
        </button>
      </div>

      {/* Sign up link */}
      <p className="text-fg-muted mt-1 text-center text-[13px]">
        Não tem uma conta?{' '}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-brand-400 hover:text-brand-300 font-semibold transition-colors hover:underline"
        >
          Crie agora
        </a>
      </p>
    </form>
  )
}
