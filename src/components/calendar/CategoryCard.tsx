import { TASK_CATEGORIES } from '@/lib/constants'
import { TaskCategory } from '@/types/category.types'

export function CategoryCard() {
  const CAT_COUNTS: Partial<Record<TaskCategory, number>> = {
    Work: 8,
    Health: 5,
    Personal: 3,
    Study: 2,
    Finance: 4,
  }

  const categories = TASK_CATEGORIES.filter((category) => CAT_COUNTS[category.id] !== undefined)

  return (
    <div>
      <div className="text-fg-primary pb-3.5 text-sm font-bold">Categorias</div>
      {categories.map((category) => (
        <label
          key={category.id}
          className="flex cursor-pointer items-center gap-2.5 px-1 py-2 [&_input]:hidden"
        >
          <input type="checkbox" defaultChecked />
          <span
            className="h-3.5 w-3.5 rounded shadow-[0_0_0_2px_rgba(255,255,255,0.05)]"
            style={{ background: category.color }}
          />
          <category.Icon size={14} className="text-fg-muted" />
          <span className="text-fg-primary flex-1 text-[13px]">{category.label}</span>
          <span className="text-fg-muted text-[11px] font-semibold">{CAT_COUNTS[category.id]}</span>
        </label>
      ))}
    </div>
  )
}
