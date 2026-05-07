import { TaskCategory } from '@/types/category.types'
import { Briefcase, BookOpen, DollarSign, Heart, User, type LucideIcon } from 'lucide-react'

export interface CategoryDef {
  id: TaskCategory
  label: string
  color: string
  Icon: LucideIcon
}

export const TASK_CATEGORIES: CategoryDef[] = [
  { id: 'Work', label: 'Trabalho', color: 'var(--color-cat-work)', Icon: Briefcase },
  { id: 'Health', label: 'Saúde', color: 'var(--color-cat-health)', Icon: Heart },
  { id: 'Personal', label: 'Pessoal', color: 'var(--color-cat-personal)', Icon: User },
  { id: 'Study', label: 'Estudo', color: 'var(--color-cat-study)', Icon: BookOpen },
  { id: 'Finance', label: 'Finanças', color: 'var(--color-cat-finance)', Icon: DollarSign },
]

export const CATEGORY_MAP = Object.fromEntries(
  TASK_CATEGORIES.map((category) => [category.id, category]),
) as Record<TaskCategory, CategoryDef>

export const DEFAULT_TASKS: Array<{
  id: string
  title: string
  category: TaskCategory
  dueDate: string
  done: boolean
  flagged: boolean
}> = [
  {
    id: '1',
    title: 'Build authentication flow',
    category: 'Work',
    dueDate: '2026-04-30',
    done: true,
    flagged: true,
  },
  {
    id: '2',
    title: 'Design system updates',
    category: 'Work',
    dueDate: '2026-04-30',
    done: false,
    flagged: true,
  },
  {
    id: '3',
    title: 'Go for a 5km run',
    category: 'Health',
    dueDate: '2026-05-01',
    done: false,
    flagged: false,
  },
  {
    id: '4',
    title: 'Read Atomic Habits',
    category: 'Personal',
    dueDate: '2026-05-01',
    done: false,
    flagged: false,
  },
  {
    id: '5',
    title: 'Meditation – 15 minutes',
    category: 'Health',
    dueDate: '2026-06-19',
    done: false,
    flagged: false,
  },
  {
    id: '6',
    title: 'Plan content for launch',
    category: 'Work',
    dueDate: '2026-06-20',
    done: false,
    flagged: false,
  },
]

export const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]

export const DAY_INITIALS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
