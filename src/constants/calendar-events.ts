import { TaskCategory } from '@/types/category.types'

export interface CalendarEvent {
  id: number
  title: string
  time: string
  dur: number
  cat: TaskCategory
}

export const EVENTS: Record<string, CalendarEvent[]> = {
  '2026-05-04': [
    { id: 1, title: 'Sprint Planning', time: '09:00', dur: 60, cat: 'Work' },
    { id: 2, title: 'Treino — Pernas', time: '12:30', dur: 60, cat: 'Health' },
    { id: 3, title: 'Revisar PR #142', time: '15:00', dur: 30, cat: 'Work' },
    { id: 4, title: 'Ler Atomic Habits', time: '21:00', dur: 30, cat: 'Personal' },
  ],
  '2026-05-05': [
    { id: 5, title: 'Reunião de Design', time: '10:00', dur: 90, cat: 'Work' },
    { id: 6, title: 'Corrida 5km', time: '07:00', dur: 45, cat: 'Health' },
  ],
  '2026-05-06': [{ id: 7, title: 'All Hands', time: '14:00', dur: 60, cat: 'Work' }],
  '2026-05-07': [
    { id: 8, title: 'Meditação', time: '07:30', dur: 15, cat: 'Health' },
    { id: 9, title: 'Lançamento Beta', time: '16:00', dur: 120, cat: 'Work' },
  ],
  '2026-05-08': [{ id: 10, title: 'Jantar família', time: '19:30', dur: 120, cat: 'Personal' }],
  '2026-05-11': [{ id: 11, title: 'Workshop UX', time: '09:00', dur: 240, cat: 'Work' }],
  '2026-05-15': [{ id: 12, title: 'Aniversário Marina', time: '20:00', dur: 180, cat: 'Personal' }],
}
