'use client'

import { useState } from 'react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronDown, Settings, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/stores/auth-store'
import { logoutAction } from '@/app/(auth)/login/actions'

interface UserDropdownProps {
  name: string
  email: string
  avatar: StaticImageData
}

export function UserDropdown({ name, email, avatar }: UserDropdownProps) {
  const [open, setOpen] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const logout = useAuthStore((s) => s.logout)
  const router = useRouter()

  async function handleLogout() {
    setLoggingOut(true)
    await logoutAction()
    logout()
    router.push('/login')
  }

  function handleBlur(e: React.FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpen(false)
    }
  }

  return (
    <div className="relative" onBlur={handleBlur}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="hover:bg-gradient-sidebar-hover flex w-full items-center gap-3 rounded-lg px-2 py-2 transition-all duration-150"
      >
        <Image
          src={avatar}
          alt={name}
          width={36}
          height={36}
          style={{ width: 36, height: 36 }}
          className="shrink-0 rounded-full object-cover"
        />
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <span className="text-fg-primary truncate text-sm font-semibold">{name}</span>
          <span className="text-fg-muted w-full truncate text-xs">{email}</span>
        </div>
        <ChevronDown
          className={cn(
            'text-fg-muted h-4 w-4 shrink-0 transition-transform duration-200',
            open && 'rotate-180',
          )}
        />
      </button>

      <div
        role="menu"
        className={cn(
          'absolute top-full right-0 left-0 mt-2.5 overflow-hidden rounded-xl border transition-all duration-200',
          'bg-bg-card border-border-subtle',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2 opacity-0',
        )}
      >
        <div className="p-1">
          <Link
            href="/configuracoes"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="text-fg-secondary hover:bg-gradient-sidebar-hover hover:text-fg-primary flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-150"
          >
            <Settings className="h-4 w-4 shrink-0" />
            Configurações
          </Link>

          <div className="border-border-subtle my-1 border-t" />

          <button
            role="menuitem"
            onClick={handleLogout}
            disabled={loggingOut}
            className={cn(
              'flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-150',
              loggingOut
                ? 'text-fg-subtle cursor-wait'
                : 'text-fg-secondary hover:text-danger cursor-pointer hover:bg-[rgba(239,68,68,0.08)]',
            )}
          >
            <LogOut className="h-4 w-4 shrink-0" />
            {loggingOut ? 'Saindo…' : 'Sair'}
          </button>
        </div>
      </div>
    </div>
  )
}
