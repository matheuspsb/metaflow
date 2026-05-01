import type { UseFormRegister } from 'react-hook-form'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { LoginFormData } from '@/schemas/loginSchema'

interface RememberRowProps {
  checked: boolean
  register: UseFormRegister<LoginFormData>
}

export function RememberRow({ checked, register }: RememberRowProps) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-fg-muted flex cursor-pointer select-none items-center gap-2 text-[13px]">
        <input type="checkbox" className="sr-only" {...register('remember')} />
        <span
          className={cn(
            'grid h-4 w-4 place-items-center rounded-[4px] border transition-all duration-150',
            checked ? 'border-brand-500 bg-brand-600' : 'border-fg-subtle bg-transparent',
          )}
        >
          {checked && <Check size={10} className="text-white" />}
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
  )
}
