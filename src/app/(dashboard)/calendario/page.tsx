import { CalendarPageClient } from '@/components/calendar/CalendarPageClient'
import { PageHeader } from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/button'
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
          <Button variant="primary" className="border-0" size="md" leftIcon={<Plus size={16} />}>
            Novo Evento
          </Button>
        }
      />
      <CalendarPageClient />
    </>
  )
}
