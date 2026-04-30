export function HeroHeadline() {
  return (
    <div>
      <h2
        className="text-fg-primary leading-[1.08] font-bold tracking-tight"
        style={{ fontSize: 'clamp(34px, 3.6vw, 46px)' }}
      >
        Automatize processos.
        <br />
        Integre sistemas.
        <br />
        <span
          style={{
            background: 'linear-gradient(120deg, #c4b5fd 0%, #a78bfa 45%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Impulsione resultados.
        </span>
      </h2>
      <p className="text-fg-secondary mt-4.5 max-w-115 text-[15px] leading-relaxed">
        O MetaFlow conecta suas ferramentas, otimiza fluxos de trabalho e transforma dados em
        crescimento para o seu negócio.
      </p>
    </div>
  )
}
