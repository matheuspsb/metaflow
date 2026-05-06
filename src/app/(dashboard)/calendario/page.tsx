import { CalendarPageClient } from '@/components/calendar/CalendarPageClient'
import { CalendarTopbar } from '@/components/layout/calendar-topbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calendário | MetaFlow',
  description: 'Visualize e gerencie seus eventos e rotinas.',
}

export default function CalendarioPage() {
  return (
    <>
      <CalendarTopbar />
      <CalendarPageClient />
    </>
  )
}
