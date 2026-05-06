import { Bell, Clock, Search } from 'lucide-react'
import { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  description: string
  action?: ReactNode
}

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-5.5 flex items-start justify-between gap-6">
      <div>
        <h1 className="text-fg-primary text-[26px] font-bold tracking-[-0.02em]">{title}</h1>
        <p className="text-fg-secondary mt-1 text-[13px]">{description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-2.5">
        <div className="border-border-subtle bg-bg-card flex w-70 items-center gap-2 rounded-md border px-3 py-2">
          <Search size={15} className="text-fg-subtle shrink-0" />
          <input
            placeholder="Buscar..."
            className="text-fg-primary placeholder:text-fg-subtle min-w-0 flex-1 border-0 bg-transparent text-[13px] outline-none"
          />
          <kbd className="bg-brand-500/10 text-fg-subtle rounded px-1.5 py-0.5 text-[10px] font-semibold">
            ⌘K
          </kbd>
        </div>

        <button className="border-border-subtle bg-bg-card text-fg-secondary hover:border-border-strong hover:text-fg-primary relative grid h-9.5 w-9.5 place-items-center rounded-md border transition-colors">
          <Bell size={16} />
          <span className="bg-[#ff6b8a] shadow-[0_0_0_2px_var(--color-bg-card)] absolute right-2 top-2 h-1.75 w-1.75 rounded-full" />
        </button>
        <button className="border-border-subtle bg-bg-card text-fg-secondary hover:border-border-strong hover:text-fg-primary grid h-9.5 w-9.5 place-items-center rounded-md border transition-colors">
          <Clock size={16} />
        </button>

        {action}
      </div>
    </div>
  )
}
