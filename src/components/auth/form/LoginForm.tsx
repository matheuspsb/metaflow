'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertCircle, ArrowRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { loginSchema, type LoginFormData } from '@/schemas/loginSchema'
import { useAuthStore } from '@/stores/auth-store'
import { loginAction, socialLoginAction } from '@/app/(auth)/login/actions'
import { Divider } from '@/components/ui/Divider'
import { SuccessState } from './SuccessState'
import { FormHeader } from './FormHeader'
import { EmailField } from './EmailField'
import { PasswordField } from './PasswordField'
import { RememberRow } from './RememberRow'
import { SocialButtons } from './SocialButtons'

type Provider = 'google' | 'microsoft'

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export function LoginForm() {
  const [success, setSuccess] = useState(false)
  const [socialLoading, setSocialLoading] = useState<Provider | null>(null)
  const login = useAuthStore((s) => s.login)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors, touchedFields, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: true },
    mode: 'onBlur',
  })

  const emailValue = useWatch({ control, name: 'email' }) ?? ''
  const passwordValue = useWatch({ control, name: 'password' }) ?? ''
  const rememberValue = useWatch({ control, name: 'remember' })

  const canSubmit = !isSubmitting && emailValue.length > 0 && passwordValue.length >= 6

  async function handleSuccess(token: string) {
    login(token)
    setSuccess(true)
    await sleep(2000)
    router.push('/dashboard')
  }

  async function onSubmit(data: LoginFormData) {
    clearErrors('root')
    const result = await loginAction(data)
    if ('error' in result) {
      setError('root', { message: result.error })
      return
    }
    await handleSuccess(result.token)
  }

  async function onSocial(provider: Provider) {
    if (socialLoading || isSubmitting) return
    setSocialLoading(provider)
    const result = await socialLoginAction(provider)
    setSocialLoading(null)
    await handleSuccess(result.token)
  }

  if (success) return <SuccessState />

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4.5">
      <FormHeader />

      {errors.root?.message && (
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
          <span>{errors.root.message}</span>
        </div>
      )}

      <EmailField
        value={emailValue}
        register={register}
        error={errors.email}
        isTouched={!!touchedFields.email}
      />

      <PasswordField
        value={passwordValue}
        register={register}
        error={errors.password}
        isTouched={!!touchedFields.password}
      />

      <RememberRow checked={rememberValue} register={register} />

      <button
        type="submit"
        disabled={!canSubmit}
        className={cn(
          'bg-gradient-brand shadow-brand-glow hover:shadow-brand-glow-strong mt-1 flex h-12.5 w-full items-center justify-center gap-2.5 rounded-xl text-[15px] font-semibold text-white transition-all duration-200',
          !canSubmit && 'cursor-not-allowed opacity-50',
          canSubmit && !isSubmitting && 'hover:-translate-y-px active:scale-[0.98]',
          isSubmitting && 'cursor-wait',
        )}
      >
        {isSubmitting ? (
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

      <SocialButtons onSocial={onSocial} loading={socialLoading} disabled={isSubmitting} />

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
