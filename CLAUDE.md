# CLAUDE.md — Contexto para o Claude Code

> Este arquivo é lido automaticamente pelo Claude Code ao iniciar uma sessão neste projeto. Ele estabelece as regras de design, stack e workflow para gerar componentes consistentes com o design system **FocusFlow**.

---

## 📚 Documentação obrigatória

Antes de qualquer task de UI, leia nesta ordem:

1. `docs/DESIGN.md` — princípios, tokens, regras
2. `docs/components.md` — receitas de componentes prontas
3. `styles/design-tokens.css` — fonte da verdade dos tokens

---

## 🛠️ Stack do projeto

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 (configurado via `@theme` no CSS, **sem** `tailwind.config.js`)
- **Linguagem**: TypeScript
- **Ícones**: `lucide-react` (preferencial)
- **Modo**: dark-only (não implementar light mode)

---

## ✅ Regras inegociáveis

1. **Sempre use tokens do design system**, nunca hex hardcoded.
   - ✅ `bg-bg-card text-fg-primary`
   - ❌ `bg-[#13131C] text-[#F4F4F5]`

2. **Cards seguem o padrão**: `bg-bg-card border border-border-subtle rounded-xl p-6`

3. **Botão primário SEMPRE usa o gradient**: `bg-gradient-brand` + `shadow-brand-glow`

4. **Hierarquia de texto**:
   - Títulos → `text-fg-primary`
   - Body → `text-fg-secondary`
   - Labels/meta → `text-fg-muted`
   - Hints → `text-fg-subtle`

5. **Hover states**: cards/botões sempre têm transição suave (`transition-all duration-150` ou `200`)

6. **Border-radius coerente**:
   - Cards → `rounded-xl` (16px)
   - Botões/inputs → `rounded-lg` (12px)
   - Tags → `rounded-xs` ou `rounded-sm`
   - Circulares → `rounded-full`

7. **Apenas violeta como cor de marca**. Não introduza azuis, verdes, rosas como acento principal.

---

## 🎯 Workflow esperado

Quando eu pedir um componente novo:

1. **Verifique `components.md`** — se já existe receita, use como base
2. **Confira tokens em uso** — todos devem vir de `design-tokens.css`
3. **Crie em `components/`** com nome `PascalCase.tsx`
4. **Tipescript estrito**: defina `Props` interface, sem `any`
5. **Estados**: trate loading, empty, error quando aplicável
6. **Acessibilidade**: `aria-label`, `role`, foco visível
7. **Responsividade**: pense mobile-first com `md:` e `lg:`

---

## 📂 Estrutura sugerida do projeto

```
project-root/
├── app/
│   ├── globals.css           # importa styles/design-tokens.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                   # primitivos (Button, Card, Tag, Input)
│   ├── dashboard/            # widgets do dashboard
│   └── layout/               # Sidebar, Topbar
├── styles/
│   └── design-tokens.css     # tokens Tailwind v4
├── docs/
│   ├── DESIGN.md
│   └── components.md
├── lib/
│   └── utils.ts              # cn(), helpers
└── CLAUDE.md                 # este arquivo
```

---

## 🚫 Não faça

- Não crie variantes de tema (light mode)
- Não use bibliotecas de UI prontas (shadcn, MUI, Chakra) sem antes checar comigo — o design é proprietário
- Não invente tokens de cor — se faltar algo, **pergunte** e adicionamos em `design-tokens.css`
- Não use `style={{}}` inline para coisas que poderiam ser classes Tailwind
- Não use sombras pesadas (a profundidade vem da luminosidade do background)

---

## 🧠 Como pedir ajuda

Quando algo for ambíguo, **pergunte antes de assumir**. Exemplos:

- "Esse modal deve usar `rounded-xl` ou `rounded-2xl`?"
- "Esse estado de erro deve usar `text-danger` ou só um tom mais apagado?"
- "Devo criar uma variante nova do Button ou usar uma das 2 existentes?"

---

## 📦 Setup inicial (caso o projeto seja novo)

Se este for um projeto Next.js zerado, garanta que:

1. `app/globals.css` tem **apenas** esta linha no topo (Tailwind v4 importa tudo via design-tokens):

   ```css
   @import '../styles/design-tokens.css';
   ```

2. `package.json` tem:

   ```json
   {
     "dependencies": {
       "next": "^15.0.0",
       "react": "^19.0.0",
       "lucide-react": "latest"
     },
     "devDependencies": {
       "tailwindcss": "^4.0.0",
       "@tailwindcss/postcss": "^4.0.0",
       "typescript": "^5.0.0"
     }
   }
   ```

3. `postcss.config.mjs`:

   ```js
   export default {
     plugins: { '@tailwindcss/postcss': {} },
   }
   ```

4. Fonte Inter carregada em `app/layout.tsx`:
   ```tsx
   import { Inter } from 'next/font/google'
   const inter = Inter({ subsets: ['latin'] })
   // <html className={inter.className}>
   ```
