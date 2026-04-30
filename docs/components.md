# FocusFlow — Catálogo de Componentes

> **Para o Claude Code**: Cada componente abaixo tem uma "receita" pronta. Use como ponto de partida ao criar/refatorar. Os exemplos usam **Tailwind v4 + tokens definidos em `design-tokens.css`**. Adapte para suas props/conteúdo.

---

## 1. Button — Primário (Gradient)

```tsx
<button className="bg-gradient-brand shadow-brand-glow hover:shadow-brand-glow-strong inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 active:scale-[0.98]">
  <PlusIcon className="h-4 w-4" />
  New
</button>
```

## 2. Button — Secundário (Ghost)

```tsx
<button className="bg-bg-input border-border-subtle text-fg-secondary hover:bg-bg-card-hover hover:text-fg-primary inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all duration-150">
  Filter
</button>
```

## 3. Card — Padrão

```tsx
<section className="bg-bg-card border-border-subtle shadow-card rounded-xl border p-6">
  <header className="mb-5 flex items-center justify-between">
    <h2 className="text-fg-primary text-lg font-semibold">{title}</h2>
    {action && <span className="text-fg-muted text-sm">{action}</span>}
  </header>
  {children}
</section>
```

## 4. Sidebar Item

```tsx
// Estado padrão
<li className="
  flex items-center gap-3
  px-3 py-2.5
  rounded-lg
  text-fg-muted text-md font-medium
  hover:bg-bg-card-hover hover:text-fg-primary
  transition-colors duration-150
  cursor-pointer
">
  <Icon className="w-5 h-5" />
  Goals
</li>

// Estado ativo
<li className="
  flex items-center gap-3
  px-3 py-2.5
  rounded-lg
  bg-gradient-card-active
  border border-border-brand
  text-fg-primary text-md font-semibold
  cursor-pointer
">
  <Icon className="w-5 h-5 text-brand-400" />
  Dashboard
</li>
```

## 5. Tag / Badge (Work, Health, Personal)

```tsx
<span className="bg-bg-tag text-fg-muted inline-flex items-center rounded-xs px-2 py-0.5 text-xs font-medium">
  Work
</span>
```

## 6. Task Item (linha da lista de tarefas)

```tsx
<li className="hover:bg-bg-card-hover group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition-colors">
  {/* Checkbox circular */}
  <button
    aria-label="Toggle task"
    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
      done ? 'bg-brand-500 border-brand-500' : 'border-fg-subtle group-hover:border-brand-400'
    } `}
  >
    {done && <CheckIcon className="h-3 w-3 text-white" />}
  </button>

  {/* Título */}
  <span className={`flex-1 text-sm ${done ? 'text-fg-muted line-through' : 'text-fg-primary'}`}>
    {title}
  </span>

  {/* Tag categoria */}
  <Tag>{category}</Tag>

  {/* Data */}
  <span className="text-fg-muted min-w-20 text-right text-xs">{dueDate}</span>

  {/* Flag */}
  <FlagIcon className="text-fg-subtle group-hover:text-brand-400 h-4 w-4" />
</li>
```

## 7. Donut Progress (estilo Goals Overview)

```tsx
// SVG circular progress — substitua por lib se preferir (ex: react-circular-progressbar)
<div className="relative flex h-32 w-32 items-center justify-center">
  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
    {/* track */}
    <circle cx="50" cy="50" r="42" stroke="#1F1F2B" strokeWidth="8" fill="none" />
    {/* progress */}
    <circle
      cx="50"
      cy="50"
      r="42"
      stroke="url(#progressGradient)"
      strokeWidth="8"
      strokeLinecap="round"
      fill="none"
      strokeDasharray={`${progress * 2.64} 264`}
    />
    <defs>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
  <div className="absolute text-center">
    <div className="text-fg-primary text-3xl font-bold">{progress}%</div>
    <div className="text-fg-muted text-xs">Overall Progress</div>
  </div>
</div>
```

## 8. Mini Progress Bar (lista de metas)

```tsx
<div className="bg-bg-input h-1.5 flex-1 overflow-hidden rounded-full">
  <div
    className="bg-gradient-brand h-full rounded-full transition-all duration-500"
    style={{ width: `${value}%` }}
  />
</div>
```

## 9. Calendar — Dia ativo

```tsx
// Dia normal
<button className="
  w-8 h-8 rounded-full
  text-sm text-fg-secondary
  hover:bg-bg-card-hover
  transition
">
  {day}
</button>

// Dia ativo (selecionado)
<button className="
  w-8 h-8 rounded-full
  bg-brand-500
  text-sm font-semibold text-white
  shadow-brand-glow
">
  {day}
</button>

// Dia fora do mês
<button className="w-8 h-8 rounded-full text-sm text-fg-disabled cursor-default">
  {day}
</button>
```

## 10. Search Bar

```tsx
<div className="bg-bg-input border-border-subtle focus-within:border-border-brand flex w-full max-w-md items-center gap-2 rounded-lg border px-3 py-2 text-sm transition">
  <SearchIcon className="text-fg-muted h-4 w-4" />
  <input
    type="text"
    placeholder="Search anything..."
    className="text-fg-primary placeholder:text-fg-subtle flex-1 bg-transparent outline-none"
  />
  <kbd className="text-fg-muted bg-bg-card border-border-subtle rounded border px-1.5 py-0.5 text-xs">
    ⌘K
  </kbd>
</div>
```

## 11. Streak / Consistency (12 days 🔥)

```tsx
;<div className="flex items-center gap-2">
  <span className="text-2xl">🔥</span>
  <span className="text-warning text-4xl font-bold">12</span>
  <span className="text-fg-muted text-sm">days</span>
</div>

{
  /* Dots da semana */
}
;<div className="flex gap-2">
  {days.map((d, i) => (
    <div
      key={i}
      className={`h-2.5 w-2.5 rounded-full ${d.completed ? 'bg-brand-500' : 'bg-bg-input'}`}
    />
  ))}
</div>
```

## 12. Upgrade to Pro Card

```tsx
<div className="bg-gradient-upgrade border-border-brand rounded-xl border p-4">
  <div className="mb-2 flex items-center gap-2">
    <CrownIcon className="text-brand-300 h-4 w-4" />
    <h3 className="text-fg-primary text-sm font-semibold">Upgrade to Pro</h3>
  </div>
  <p className="text-brand-200 mb-3 text-xs">
    Unlock advanced features, unlimited goals, and deeper analytics.
  </p>
  <button className="bg-bg-base/40 text-fg-primary hover:bg-bg-base/60 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition">
    Upgrade Now
    <ArrowRightIcon className="h-4 w-4" />
  </button>
</div>
```

## 13. Quote Banner (citação com paisagem)

```tsx
<div className="bg-gradient-hero-quote relative flex min-h-40 items-center overflow-hidden rounded-xl p-8">
  {/* Imagem decorativa à direita (opcional) */}
  <div className="absolute top-0 right-0 bottom-0 w-1/2 opacity-60">
    {/* <Image src="/mountains.png" ... /> */}
  </div>

  <div className="relative z-10 max-w-md">
    <QuoteIcon className="text-brand-300 mb-2 h-6 w-6" />
    <p className="text-fg-primary mb-2 text-xl font-medium">
      The secret of getting ahead is getting started.
    </p>
    <span className="text-brand-200 text-sm">— Mark Twain</span>
  </div>
</div>
```

## 14. Tab Filter (All, Work, Personal, Health)

```tsx
<div className="bg-bg-input flex items-center gap-1 rounded-lg p-1">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActive(tab)}
      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
        active === tab
          ? 'bg-brand-500 shadow-brand-glow text-white'
          : 'text-fg-muted hover:text-fg-primary'
      } `}
    >
      {tab}
    </button>
  ))}
</div>
```

## 15. TodaysFocusCard

Card de tarefas do dia com altura fixa (3 itens visíveis), scroll vertical e botão "Add Task". Consome estado via `useFocusStore`.

```tsx
// src/components/dashboard/focus/TodaysFocusCard.tsx
'use client'

import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TaskRow } from './TaskRow'
import { useFocusStore } from '@/stores/focus-store'

export function TodaysFocusCard({ onAddTask, className }) {
  const tasks = useFocusStore((s) => s.tasks)
  const toggleTask = useFocusStore((s) => s.toggleTask)

  return (
    <Card
      className={className}
      title="Today's Focus"
      action={
        <span className="bg-bg-tag text-fg-muted flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold">
          {tasks.length}
        </span>
      }
    >
      {/* max-h-47 ≈ 3 itens; scrollbar violeta fina */}
      <ul className="divide-border-subtle mb-4 flex max-h-47 flex-col divide-y overflow-y-auto pr-2
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-brand-500/70">
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>

      {/* Botão Add Task — dashed, sem gradient para não competir */}
      <button
        onClick={onAddTask}
        className="border-border-subtle text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary
          flex w-full items-center justify-center gap-2 rounded-lg border border-dashed py-2.5 text-sm transition-colors duration-150"
      >
        <Plus className="h-4 w-4" />
        Add Task
      </button>
    </Card>
  )
}
```

**TaskRow** (item 6 atualizado — layout com tag abaixo do título):

```tsx
// src/components/dashboard/focus/TaskRow.tsx
<li className="group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-bg-card-hover">
  <button
    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-150 ${
      done ? 'border-brand-500 bg-brand-500' : 'border-fg-subtle group-hover:border-brand-400'
    }`}
  >
    {done && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
  </button>

  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
    <span className={`truncate text-sm ${done ? 'text-fg-muted line-through' : 'text-fg-primary'}`}>
      {title}
    </span>
    <span className="bg-bg-tag text-fg-muted inline-flex w-fit items-center rounded-xs px-2 py-0.5 text-xs font-medium">
      {category}
    </span>
  </div>

  <span className="text-fg-muted shrink-0 text-xs tabular-nums">{time}</span>
</li>
```

## 16. IconButton

Primitive para botões icon-only. `aria-label` é obrigatório. Base styles baked in; use `className` para shape e cor.

```tsx
// src/components/ui/IconButton.tsx
<IconButton
  aria-label="Flag task"
  onClick={() => onFlag(id)}
  className="text-fg-subtle opacity-0 group-hover:opacity-100"
>
  <Flag className="h-4 w-4" />
</IconButton>
```

**Não use** para botões com label de texto — use o `Button` com variante `ghost` ou `secondary`.

---

## 17. TaskItem (Tasks card row)

Row da lista de tarefas com checkbox circular, título, tag de categoria, data e flag. Consome `TaskEntry` de `tasks-store`.

```tsx
// src/components/dashboard/tasks/TaskItem.tsx
// Layout: [checkbox] [título] [tag] [data] [flag]

<li className="group hover:bg-bg-card-hover flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-150">
  <IconButton aria-label="Mark as complete" className="h-5 w-5 rounded-full border-2 border-fg-subtle group-hover:border-brand-400">
    {/* filled quando done: border-brand-500 bg-brand-500 */}
    <Check className="h-3 w-3 text-white" strokeWidth={3} />
  </IconButton>

  <span className="min-w-0 flex-1 truncate text-sm text-fg-primary">{title}</span>

  <span className="bg-bg-tag text-fg-muted shrink-0 rounded-xs px-2 py-0.5 text-xs font-medium">
    {category}
  </span>

  {/* "Today" → text-success font-medium; demais → text-fg-muted */}
  <span className="w-16 shrink-0 text-right text-xs tabular-nums text-fg-muted">{label}</span>

  <IconButton aria-label="Flag task" className="text-brand-400">
    <Flag className="h-4 w-4" fill="currentColor" />
  </IconButton>
</li>
```

**Lógica de data**: `formatDueDate(dueDate: string)` retorna `{ label, isToday }` — compara por dia de calendário sem side effects.

---

## 18. TasksCard

Card de largura dupla (`col-span-2`) com tab filter por categoria, lista filtrada via `useMemo` e ações Filter/Sort. Consome `useTasksStore`.

```tsx
// src/components/dashboard/tasks/TasksCard.tsx
'use client'

// Tabs derivadas de TASK_CATEGORIES + 'All'
const TABS: FilterTab[] = ['All', ...TASK_CATEGORIES.map((category) => category.id)]

<Card title="Tasks" action={<FilterSortButtons />} className={className}>
  {/* Tab bar — receita do componente 14 */}
  <div className="bg-bg-input mb-4 flex items-center gap-1 rounded-lg p-1">
    {TABS.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-150 ${
          activeTab === tab
            ? 'bg-brand-500 shadow-brand-glow text-white'
            : 'text-fg-muted hover:text-fg-primary'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* Lista filtrada */}
  <ul className="divide-border-subtle divide-y">
    {filteredTasks.map((task) => (
      <TaskItem key={task.id} task={task} onToggle={toggleTask} onFlag={toggleFlag} />
    ))}
  </ul>
</Card>
```

**No dashboard**: `<TasksCard className="xl:col-span-2" />` — ocupa 2 de 3 colunas no breakpoint `xl`.

**Tab buttons**: não usam o `Button` UI — o active state precisa de `bg-brand-500` sólido (não gradient) e o inactive não deve ter hover background. Padrão standalone conforme receita 14.

## 19. TodaysFocusCard ↔ CalendarCard (conexão de data)

O card de foco é driven pelo `selectedDate` do `calendar-store` — não tem data própria. Ao clicar em qualquer dia no calendário, o foco filtra automaticamente.

**Padrão de conexão:**
```tsx
// TodaysFocusCard.tsx
const selectedDate = useCalendarStore((state) => state.selectedDate)

// Filtra por dia de calendário — sem useEffect
const filteredTasks = useMemo(
  () => tasks.filter((task) => isSameDay(new Date(task.dueDate + 'T00:00:00'), selectedDate)),
  [tasks, selectedDate],
)

// Título dinâmico
function formatCardTitle(date: Date): string {
  if (isSameDay(date, today())) return "Today's Focus"
  return date.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })
}

// defaultDate evita UTC drift
<AddTaskModal defaultDate={toISODate(selectedDate)} />
```

**Regras:**
- `selectedDate` vive no `calendar-store` — nunca duplique no `focus-store`
- `toISODate` (de `@/lib/calendar`) converte `Date` → `YYYY-MM-DD` usando `getFullYear/Month/Date` para evitar drift de timezone
- Novas tarefas adicionadas pelo modal herdam o `selectedDate` via prop `defaultDate`
- O campo `dueDate: string` (ISO) é obrigatório em todo `Task` do `focus-store`

**Helpers em `@/lib/calendar`:**
| Função | Uso |
|---|---|
| `today()` | Retorna `Date` zerado em meia-noite local |
| `isSameDay(a, b)` | Compara dois `Date` por dia de calendário |
| `toISODate(date)` | Converte `Date` → `'YYYY-MM-DD'` sem UTC drift |
| `toDayKey(date)` | Chave interna do calendário (não usar como ISO) |

---

## 🧪 Convenções de código

- **Componentes**: `PascalCase.tsx` em `components/`
- **Variantes**: usar `cva` (class-variance-authority) ou simples props condicionais
- **Ícones**: preferir `lucide-react`
- **Estados**: sempre tipados (loading, empty, error)
- **Animações**: usar `transition-all duration-150/200` por padrão
