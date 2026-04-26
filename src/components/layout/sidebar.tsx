'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems } from './nav-items'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-border-subtle bg-bg-sidebar flex h-screen w-60 shrink-0 flex-col border-r">
      <div className="flex items-center gap-3 px-5 py-6">
        <div className="bg-gradient-sidebar-active flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" />
        <span className="font-display text-fg-primary text-lg font-bold tracking-tight">
          MetaFlow
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
                isActive
                  ? 'bg-gradient-sidebar-active shadow-brand-glow text-white'
                  : 'text-fg-muted hover:bg-gradient-sidebar-hover hover:text-fg-primary',
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
