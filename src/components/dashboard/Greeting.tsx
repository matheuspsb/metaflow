'use client'

interface GreetingProps {
  name: string
}

function getGreeting(hour: number): string {
  if (hour < 12) return 'Bom dia'
  if (hour < 18) return 'Boa tarde'
  return 'Boa noite'
}

export function Greeting({ name }: GreetingProps) {
  const greeting = getGreeting(new Date().getHours())

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-tight">
        {greeting}, {name} 👋
      </h1>
      <p className="text-fg-muted mt-1">Vamos focar no que realmente importa hoje.</p>
    </div>
  )
}
