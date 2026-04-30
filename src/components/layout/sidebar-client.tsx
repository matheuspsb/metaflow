'use client'

import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SidebarNav } from './sidebar-nav'
import { MetaFlowLogo } from '../auth/MetaFlowLogo'

interface SidebarClientProps {
  footer: ReactNode
  children: ReactNode
}

export function SidebarClient({ footer, children }: SidebarClientProps) {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={close}
        />
      )}

      <aside
        className={cn(
          'border-border-subtle fixed inset-y-0 left-0 z-50 flex h-screen w-56 shrink-0 flex-col border-r transition-transform duration-300 ease-in-out',
          'bg-bg-sidebar/5 backdrop-blur-xl',
          'lg:bg-bg-sidebar lg:relative lg:translate-x-0 lg:backdrop-blur-none',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center gap-3 px-5 py-6">
          <MetaFlowLogo size={32} />
          <span className="font-display text-fg-primary text-lg font-bold tracking-tight">
            MetaFlow
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-2">
          <SidebarNav onNavigate={close} footer={footer} />
        </nav>
      </aside>

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="border-border-subtle bg-bg-sidebar flex items-center gap-3 border-b px-4 py-3 lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-fg-muted hover:bg-bg-card hover:text-fg-primary rounded-lg p-1.5 transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-display text-fg-primary text-base font-bold">MetaFlow</span>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
