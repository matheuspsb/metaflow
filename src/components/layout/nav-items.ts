import {
  LayoutDashboard,
  Target,
  CheckSquare,
  Calendar,
  Repeat2,
  BarChart3,
  StickyNote,
  Puzzle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Metas', href: '/metas', icon: Target },
  { label: 'Tarefas', href: '/tarefas', icon: CheckSquare },
  { label: 'Calendário', href: '/calendario', icon: Calendar },
  { label: 'Rotina', href: '/rotina', icon: Repeat2 },
  { label: 'Analytics', href: '/analytics', icon: BarChart3 },
  { label: 'Notas', href: '/notas', icon: StickyNote },
  { label: 'Integrações', href: '/integracoes', icon: Puzzle },
]
