/**
 * Card — Componente primitivo do FocusFlow.
 *
 * Segue o padrão definido em docs/DESIGN.md:
 * - bg-bg-card + border-subtle + rounded-xl + p-6
 * - Aceita variantes: 'default' | 'elevated'
 *
 * Use este componente como base para QUALQUER card do dashboard.
 */
import { ReactNode } from "react";

interface CardProps {
  title?: string;
  action?: ReactNode;
  variant?: "default" | "elevated";
  className?: string;
  children: ReactNode;
}

export function Card({
  title,
  action,
  variant = "default",
  className = "",
  children,
}: CardProps) {
  const bgClass = variant === "elevated" ? "bg-bg-card-elevated" : "bg-bg-card";

  return (
    <section
      className={`
        ${bgClass}
        border border-border-subtle
        rounded-xl
        p-6
        shadow-card
        ${className}
      `}
    >
      {(title || action) && (
        <header className="flex items-center justify-between mb-5">
          {title && (
            <h2 className="text-lg font-semibold text-fg-primary">{title}</h2>
          )}
          {action && <div className="text-sm text-fg-muted">{action}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
