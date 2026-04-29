'use client'

import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { Modal, ModalTitle, ModalClose } from '@/components/ui/Modal'
import { useFocusStore } from '@/stores/focus-store'
import { TASK_CATEGORIES } from '@/lib/constants'
import { toAmPm, defaultTime } from '@/lib/time'
import { addTaskSchema, type AddTaskFormData } from '@/schemas/addTaskSchema'

interface AddTaskModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddTaskModal({ isOpen, onClose }: AddTaskModalProps) {
  const addTask = useFocusStore.getState().addTask

  const { register, handleSubmit, setValue, control, reset, formState: { errors, isValid } } =
    useForm<AddTaskFormData>({
      resolver: zodResolver(addTaskSchema),
      defaultValues: { title: '', category: '', time: defaultTime() },
      mode: 'onChange',
    })

  const selectedCategory = useWatch({ control, name: 'category' })

  function onSubmit(data: AddTaskFormData) {
    addTask({
      id: crypto.randomUUID(),
      title: data.title,
      category: data.category,
      time: data.time ? toAmPm(data.time) : '',
      done: false,
    })
    reset({ title: '', category: '', time: defaultTime() })
    onClose()
  }

  function handleClose() {
    reset({ title: '', category: '', time: defaultTime() })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="bg-bg-card-elevated border-border-subtle shadow-elevated rounded-xl border p-6">
        <div className="mb-6 flex items-center justify-between">
          <ModalTitle className="text-fg-primary text-lg font-semibold">New Task</ModalTitle>
          <ModalClose
            aria-label="Close modal"
            className="text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-150"
          >
            <X className="h-4 w-4" />
          </ModalClose>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="task-title" className="text-fg-secondary text-sm font-medium">
              Title
            </label>
            <input
              id="task-title"
              type="text"
              placeholder="What needs to be done?"
              autoFocus
              autoComplete="off"
              {...register('title')}
              className="bg-bg-input border-border-default focus:border-border-brand text-fg-primary placeholder:text-fg-subtle rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors duration-150"
            />
            {errors.title && <span className="text-danger text-xs">{errors.title.message}</span>}
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="text-fg-secondary text-sm font-medium">Category</span>
            <div className="flex flex-wrap gap-2">
              {TASK_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setValue('category', cat.id, { shouldValidate: true })}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-150 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-brand shadow-brand-glow border-transparent text-white'
                      : 'bg-bg-input border-border-subtle text-fg-secondary hover:border-border-brand hover:text-fg-primary'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            {errors.category && (
              <span className="text-danger text-xs">{errors.category.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="task-time" className="text-fg-secondary text-sm font-medium">
              Time
            </label>
            <input
              id="task-time"
              type="time"
              {...register('time')}
              className="bg-bg-input border-border-default focus:border-border-brand text-fg-primary rounded-lg border px-3 py-2.5 text-sm outline-none transition-colors duration-150 scheme-dark"
            />
          </div>

          <div className="mt-1 flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="bg-bg-input border-border-subtle text-fg-secondary hover:bg-bg-card-hover hover:text-fg-primary flex-1 rounded-lg border py-2.5 text-sm font-medium transition-all duration-150"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className="bg-gradient-brand shadow-brand-glow flex-1 rounded-lg py-2.5 text-sm font-medium text-white transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
