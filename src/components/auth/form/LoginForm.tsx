'use client'

import { useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, User, Lock, ArrowRight, AlertCircle, Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { loginSchema, type LoginFormData } from '@/schemas/loginSchema'
import GoogleIcon from '@/assets/svgs/icon-google.svg'
import MicrosoftIcon from '@/assets/svgs/icon-microsoft.svg'
import { Divider } from '@/components/ui/Divider'

function SuccessState({ onBack }: { onBack: () => void }) {
  return (
    <div className="animate-card-in flex flex-col items-center gap-5 py-4 text-center">
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
      <div
        className="h-1 w-full overflow-hidden rounded-full"
        style={{ background: 'rgba(139, 92, 246, 0.18)' }}
      >
        <div className="animate-fill-bar bg-gradient-brand h-full w-0 rounded-full" />
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
    control,
    reset,
    formState: { errors, touchedFields },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: true },
    mode: 'onBlur',
  })

  const emailValue = useWatch({ control, name: 'email' })
  const passwordValue = useWatch({ control, name: 'password' })
  const rememberValue = useWatch({ control, name: 'remember' })

  const emailTouched = !!touchedFields.email
  const passwordTouched = !!touchedFields.password
  const emailIsValid = emailTouched && !errors.email && emailValue.length > 0
  const emailIsInvalid = emailTouched && !!errors.email

  const isEmailValidRaw = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue || '')
  const canSubmit = isEmailValidRaw && (passwordValue || '').length >= 6 && !submitting

  async function onSubmit(data: LoginFormData) {
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4.5">
      <div>
        <h1 className="text-fg-primary text-2xl font-bold tracking-tight">
          Bem-vindo de volta! <span className="animate-wave">👋</span>
        </h1>
        <p className="text-fg-muted mt-1.5 text-sm">Acesse sua conta para continuar</p>
      </div>

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
            className="placeholder:text-fg-subtle text-fg-primary min-w-0 flex-1 bg-transparent text-[15px] outline-none"
            {...register('email')}
          />
          {emailIsValid && <Check size={16} className="shrink-0" style={{ color: '#4ade80' }} />}
        </div>
        {emailIsInvalid && (
          <p className="animate-shake text-[12px]" style={{ color: '#ff6b8a' }}>
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-fg-primary text-[13px] font-semibold">
          Senha
        </label>
        <div
          className={cn('input-auth', passwordTouched && errors.password && 'input-auth-invalid')}
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
        {passwordTouched && errors.password && (
          <p className="animate-shake text-[12px]" style={{ color: '#ff6b8a' }}>
            {errors.password?.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <label className="text-fg-muted flex cursor-pointer items-center gap-2 text-[13px] select-none">
          <input type="checkbox" className="sr-only" {...register('remember')} />
          <span
            className={cn(
              'grid h-4 w-4 place-items-center rounded-[4px] border transition-all duration-150',
              rememberValue ? 'border-brand-500 bg-brand-600' : 'border-fg-subtle bg-transparent',
            )}
          >
            {rememberValue && <Check size={10} className="text-white" />}
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

      <button
        type="submit"
        disabled={!canSubmit}
        className={cn(
          'bg-gradient-brand shadow-brand-glow hover:shadow-brand-glow-strong mt-1 flex h-12.5 w-full items-center justify-center gap-2.5 rounded-xl text-[15px] font-semibold text-white transition-all duration-200',
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

      <Divider label="ou continue com" />

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="btn-social"
          onClick={() => onSocial('google')}
          disabled={!!socialLoading || submitting}
        >
          {socialLoading === 'google' ? (
            <Loader2 size={14} className="text-brand-400 animate-spin" />
          ) : (
            <GoogleIcon width={24} height={24} />
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
            <Loader2 size={14} className="text-brand-400 animate-spin" />
          ) : (
            <MicrosoftIcon width={24} height={24} />
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
