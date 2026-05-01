'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from './nav-items'

interface SidebarNavProps {
  onNavigate: () => void
  footer?: ReactNode
}

export function SidebarNav({ onNavigate, footer }: SidebarNavProps) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  const linkClass = (href: string) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
      isActive(href)
        ? 'bg-gradient-sidebar-active shadow-brand-glow text-white'
        : 'text-fg-muted hover:bg-gradient-sidebar-hover hover:text-fg-primary',
    )

  return (
    <>
      {navItems.map(({ label, href, icon: Icon }) => (
        <Link key={href} href={href} onClick={onNavigate} className={linkClass(href)}>
          <Icon className="h-5 w-5 shrink-0" />
          {label}
        </Link>
      ))}

      <div className="mt-auto flex flex-col gap-3 pb-2">{footer}</div>
    </>
  )
}
