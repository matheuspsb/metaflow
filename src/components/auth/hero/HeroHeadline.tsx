export function HeroHeadline() {
  return (
    <div>
      <h2 className="text-fg-primary max-xs:text-2xl text-center text-[34px] leading-[1.08] font-bold tracking-tight lg:text-left lg:text-[clamp(34px,3.6vw,46px)]">
        Conecte suas tarefas.
        <br />
        Mantenha a constância.
        <br />
        <span
          style={{
            background: 'linear-gradient(120deg, #c4b5fd 0%, #a78bfa 45%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Conquiste seus objetivos.
        </span>
      </h2>
      <p className="text-fg-secondary lg:text-md mt-4.5 max-w-105 text-center text-sm leading-relaxed lg:max-w-115 lg:text-left">
        O MetaFlow organiza sua rotina, monitora suas metas e transforma o seu esforço diário em
        crescimento real.
      </p>
    </div>
  )
}
