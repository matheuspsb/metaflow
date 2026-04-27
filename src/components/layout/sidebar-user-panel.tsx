import Image from 'next/image'
import { ChevronDown, Crown } from 'lucide-react'
import retrato from '@/assets/retrato.png'

export function SidebarUserPanel() {
  return (
    <div className="flex flex-col gap-3 px-1">
      <button className="hover:bg-gradient-sidebar-hover flex w-full items-center gap-3 rounded-lg px-2 py-2 transition-all duration-150">
        <Image
          src={retrato}
          alt="Matheus Paulo"
          width={36}
          height={36}
          style={{ width: 36, height: 36 }}
          className="shrink-0 rounded-full object-cover"
        />
        <div className="flex min-w-0 flex-1 flex-col items-start">
          <span className="text-fg-primary truncate text-sm font-semibold">Matheus Paulo</span>
          <span className="text-fg-muted w-full truncate text-xs">dev.matheus.paulo@gmail.com</span>
        </div>
        <ChevronDown className="text-fg-muted h-4 w-4 shrink-0" />
      </button>

      <div className="bg-gradient-upgrade border-border-brand rounded-xl border p-4">
        <div className="mb-2 flex items-center gap-2">
          <Crown className="text-brand-300 h-4 w-4" />
          <span className="text-fg-primary text-sm font-semibold">Upgrade to Pro</span>
        </div>
        <p className="text-fg-muted mb-3 text-xs leading-relaxed">
          Unlock advanced features, unlimited goals, and deeper analytics.
        </p>
        <button className="bg-bg-card hover:bg-bg-card-hover text-fg-primary flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150">
          Upgrade Now
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  )
}
