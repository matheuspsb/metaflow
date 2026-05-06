export function getGreeting(name: string): string {
  const hour = new Date().getHours()
  if (hour < 12) return `Bom dia, ${name} 👋`
  if (hour < 18) return `Boa tarde, ${name} 👋`
  return `Boa noite, ${name} 👋`
}
