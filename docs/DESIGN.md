# FocusFlow — Design System

> **Para o Claude Code**: Este é o documento mestre do design. Antes de criar qualquer componente, leia este arquivo e o `components.md` para garantir consistência. Os tokens vivem em `styles/design-tokens.css` e estão expostos como utilitários do Tailwind v4.

---

## 🎯 Visão do Produto

FocusFlow é um app de **produtividade pessoal premium** que une metas de longo prazo, tarefas diárias, hábitos e analytics. A interface deve transmitir **foco, calma e ambição**.

**Princípios de design:**

- **Dark-first**: o app é nativamente escuro; não existe modo claro neste design.
- **Violeta como linguagem**: roxo/violeta é a única cor de marca. Evite multi-color.
- **Hierarquia por luminosidade**: contraste vem do background (cards mais claros que a página), não de bordas pesadas.
- **Espaçamento generoso**: respiração entre elementos é prioridade.
- **Micro-interações sutis**: glow no hover, escala suave, transições de 150–200ms.

---

## 🎨 Sistema de Cores

### Backgrounds (escala de elevação)

| Token                 | Hex       | Uso                         |
| --------------------- | --------- | --------------------------- |
| `bg-bg-base`          | `#0A0A0F` | Fundo da página             |
| `bg-bg-sidebar`       | `#0D0D14` | Sidebar                     |
| `bg-bg-card`          | `#13131C` | Cards principais            |
| `bg-bg-card-elevated` | `#161622` | Cards com leve destaque     |
| `bg-bg-card-hover`    | `#1C1C28` | Estado hover/active         |
| `bg-bg-input`         | `#1F1F2B` | Inputs, search bar          |
| `bg-bg-tag`           | `#252533` | Tags neutras (Work, Health) |

> **Regra**: nunca crie um card com fundo mais escuro que o do container pai. Hierarquia sobe em luminosidade.

### Brand (violeta)

A escala vai de `brand-50` (quase branco) a `brand-950` (quase preto roxo). Use:

- `brand-500` (#8B5CF6) — cor primária, CTAs, ativos
- `brand-400` (#A78BFA) — destaques, ícones em estado ativo
- `brand-700` (#6D28D9) — pressed state, profundidade
- `brand-900` (#4C1D95) — backgrounds de cards promocionais

### Texto

| Token               | Uso                                   |
| ------------------- | ------------------------------------- |
| `text-fg-primary`   | Títulos, valores numéricos, nomes     |
| `text-fg-secondary` | Body principal                        |
| `text-fg-muted`     | Labels, metadados, datas              |
| `text-fg-subtle`    | Placeholder, hints                    |
| `text-fg-disabled`  | Dias fora do mês, itens desabilitados |

### Funcionais

- `text-success` (#34D399) — verde, raramente usado
- `text-warning` (#FB923C) — laranja do fire streak 🔥
- `text-danger` (#F87171) — erros
- `text-info` (#60A5FA) — informativos

---

## 🌈 Gradients

Disponíveis como classes utilitárias customizadas em `design-tokens.css`:

| Classe                    | Uso                                        |
| ------------------------- | ------------------------------------------ |
| `bg-gradient-brand`       | Botão "New", CTAs primários, ícone do logo |
| `bg-gradient-brand-soft`  | Backgrounds de itens de menu ativos        |
| `bg-gradient-upgrade`     | Card "Upgrade to Pro"                      |
| `bg-gradient-hero-quote`  | Banner inferior com citação                |
| `bg-gradient-card-active` | Item de sidebar selecionado                |
| `bg-conic-progress`       | Donut chart de progresso                   |

---

## ✏️ Tipografia

- **Família**: `Inter` (fallback: SF Pro, system-ui)
- **Pesos usados**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

| Classe      | Tamanho | Uso típico                   |
| ----------- | ------- | ---------------------------- |
| `text-xs`   | 12px    | Tags, badges, day initials   |
| `text-sm`   | 14px    | Body small, lista de tarefas |
| `text-base` | 15px    | Body padrão                  |
| `text-md`   | 16px    | Itens da sidebar             |
| `text-lg`   | 18px    | Títulos de card              |
| `text-xl`   | 20px    | Títulos de seção             |
| `text-2xl`  | 24px    | Subtítulos hero              |
| `text-3xl`  | 30px    | "Good morning, Alex"         |
| `text-4xl`  | 36px    | Números hero (72%, 12 days)  |

**Regras:**

- Títulos: `font-semibold` (600) ou `font-bold` (700)
- Body: `font-normal` (400) ou `font-medium` (500)
- Tags: `font-medium` (500), tracking levemente apertado

---

## 📐 Bordas e Radius

| Classe         | Valor | Uso                                 |
| -------------- | ----- | ----------------------------------- |
| `rounded-xs`   | 6px   | Tags pequenas                       |
| `rounded-sm`   | 8px   | Tags grandes                        |
| `rounded-md`   | 10px  | Botões pequenos                     |
| `rounded-lg`   | 12px  | Botões, inputs                      |
| `rounded-xl`   | 16px  | **Cards principais (padrão)**       |
| `rounded-2xl`  | 20px  | Cards hero                          |
| `rounded-full` | ∞     | Avatares, checkbox, dot do calendar |

**Bordas:**

- Padrão de cards: `border border-border-subtle` (rgba(255,255,255,0.06))
- Inputs: `border border-border-default` (rgba(255,255,255,0.10))
- Estados focus/active: `border-border-brand` (rgba(139,92,246,0.35))

---

## 🌫️ Sombras e Glows

| Classe                     | Uso                                    |
| -------------------------- | -------------------------------------- |
| `shadow-card`              | Cards padrão (sutil)                   |
| `shadow-elevated`          | Modais, dropdowns                      |
| `shadow-brand-glow`        | Glow violeta sutil em elementos ativos |
| `shadow-brand-glow-strong` | Hover de CTAs principais               |

---

## 📏 Layout Padrão

- **Sidebar**: `w-60` (240px) fixa
- **Conteúdo principal**: `flex-1` com padding `p-6` ou `p-8`
- **Grid de cards**: `grid grid-cols-3 gap-5`
- **Padding interno de card**: `p-6` (24px) ou `p-5` (20px) para cards menores
- **Gap entre itens de lista**: `gap-3` ou `gap-4`

---

## 🧱 Anatomia de um Card Padrão

```tsx
<div className="bg-bg-card border-border-subtle shadow-card rounded-xl border p-6">
  {/* Header */}
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-fg-primary text-lg font-semibold">Card Title</h2>
    <button className="text-fg-muted hover:text-fg-primary text-sm transition">See all</button>
  </div>

  {/* Conteúdo */}
  <div>...</div>
</div>
```

---

## ✅ Checklist antes de fechar um componente

- [ ] Usa apenas tokens (`bg-bg-card`, não `bg-[#13131C]`)
- [ ] Tem estado hover claro (transition + mudança de bg ou glow)
- [ ] Texto respeita a hierarquia (primary/secondary/muted)
- [ ] Border-radius coerente com a escala (xl em cards, lg em botões, full em circulares)
- [ ] Espaçamento interno generoso (mínimo `p-4`, padrão `p-6`)
- [ ] Funciona em mobile (testa com `md:` e `lg:` breakpoints)
- [ ] Acessibilidade: contraste mínimo AA, foco visível, aria-labels onde aplicável

---

## 🚫 Anti-patterns (não fazer)

- ❌ Usar cores fora dos tokens (ex: `#FF0000`, `bg-red-500` quando se quer erro — use `text-danger`)
- ❌ Bordas grossas (>1px) em cards
- ❌ Sombras pesadas/dramáticas (a profundidade vem da luminosidade do bg)
- ❌ Múltiplas cores de marca (só violeta é brand)
- ❌ Tipografia abaixo de 12px
- ❌ Cards sem padding suficiente
- ❌ Misturar border-radius (ex: card `rounded-xl` com botão interno `rounded-2xl`)
