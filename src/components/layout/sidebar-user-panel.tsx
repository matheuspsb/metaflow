import { Crown } from 'lucide-react'
import retrato from '@/assets/retrato.png'
import { UserDropdown } from './user-dropdown'

export function SidebarUserPanel() {
  const user = {
    name: 'Matheus Paulo',
    email: 'dev.matheus.paulo@gmail.com',
    avatar: retrato,
  }

  return (
    <div className="flex flex-col gap-3 px-1">
      <UserDropdown name={user.name} email={user.email} avatar={user.avatar} />

      <div className="bg-gradient-upgrade border-border-brand rounded-xl border p-3">
        <div className="mb-2 flex items-center gap-2">
          <Crown className="text-brand-300 h-4 w-4" />
          <span className="text-fg-primary text-sm font-semibold">Upgrade Pro</span>
        </div>
        <p className="text-fg-muted mb-3 text-xs">
          Desbloqueie metas ilimitadas e analytics avançado.
        </p>
        <button className="bg-bg-card hover:bg-bg-card-hover text-fg-primary flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all duration-150">
          Upgrade Now
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  )
}
