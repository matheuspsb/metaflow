import { connections, particles } from '@/constants/constellation'

export function ConstellationLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7c3aed" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#a78bfa" stopOpacity="0.6" />
          <stop offset="1" stopColor="#7c3aed" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="dotGrad">
          <stop offset="0" stopColor="#e9d5ff" stopOpacity="1" />
          <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
      </defs>

      {connections.map((c) => (
        <line
          key={c.id}
          x1={c.x1}
          y1={c.y1}
          x2={c.x2}
          y2={c.y2}
          stroke="url(#lineGrad)"
          strokeWidth="0.3"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {particles.map((p) => (
        <circle key={p.id} r="0.9" fill="url(#dotGrad)">
          <animateMotion dur={p.dur} begin={p.begin} repeatCount="indefinite" path={p.path} />
        </circle>
      ))}
    </svg>
  )
}
