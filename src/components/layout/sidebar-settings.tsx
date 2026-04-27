import Link from 'next/link'
import { Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarSettingsProps {
  pathname: string
  onNavigate: () => void
}

export function SidebarSettings({ pathname, onNavigate }: SidebarSettingsProps) {
  const isActive = pathname === '/configuracoes' || pathname.startsWith('/configuracoes/')

  return (
    <div className="pt-2">
      <div className="border-border-subtle mb-2 border-t" />
      <Link
        href="/configuracoes"
        onClick={onNavigate}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
          isActive
            ? 'bg-gradient-sidebar-active shadow-brand-glow text-white'
            : 'text-fg-muted hover:bg-gradient-sidebar-hover hover:text-fg-primary',
        )}
      >
        <Settings className="h-5 w-5 shrink-0" />
        Configurações
      </Link>
    </div>
  )
}
