import { waves } from '@/constants/constellation'

export function ConstellationWaves() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-1/2 w-full"
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
    >
      {waves.map((wave) => (
        <path
          key={wave.id}
          d={wave.d}
          fill="none"
          stroke="#7c3aed"
          strokeOpacity={wave.strokeOpacity}
          strokeWidth="0.6"
        />
      ))}
    </svg>
  )
}
