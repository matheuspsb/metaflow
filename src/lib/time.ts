export function toAmPm(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return `${hour}:${m.toString().padStart(2, '0')} ${period}`
}

export function defaultTime(): string {
  const now = new Date()
  const m = now.getMinutes() < 30 ? 30 : 0
  const h = m === 0 ? (now.getHours() + 1) % 24 : now.getHours()
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
}
