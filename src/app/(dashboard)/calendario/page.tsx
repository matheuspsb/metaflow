import { CalendarPageClient } from '@/components/calendar/CalendarPageClient'
import { PageHeader } from '@/components/shared/PageHeader'
import { Plus } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendário | MetaFlow',
  description: 'Visualize e gerencie seus eventos e rotinas.',
}

export default function CalendarioPage() {
  return (
    <>
      <PageHeader
        title="Calendário"
        description="Visualize sua semana e organize seus compromissos."
        action={
          <button className="bg-gradient-brand shadow-brand-glow flex cursor-pointer items-center gap-1.5 rounded-md border-0 px-3.5 py-2 text-[13px] font-semibold text-white">
            <Plus size={16} />
            <span>Novo Evento</span>
          </button>
        }
      />
      <CalendarPageClient />
    </>
  )
}
