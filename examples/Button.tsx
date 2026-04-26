/**
 * Button — Componente primitivo do FocusFlow.
 *
 * Variantes:
 *  - primary: gradient violeta + glow (CTAs principais)
 *  - secondary: ghost com bg-input (ações neutras)
 *  - ghost: sem background, só hover (ações terciárias)
 *
 * Tamanhos: sm | md | lg
 */
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<string, string> = {
  primary: `
    bg-gradient-brand text-white shadow-brand-glow
    hover:shadow-brand-glow-strong
  `,
  secondary: `
    bg-bg-input text-fg-secondary border border-border-subtle
    hover:bg-bg-card-hover hover:text-fg-primary
  `,
  ghost: `
    text-fg-muted
    hover:bg-bg-card-hover hover:text-fg-primary
  `,
};

const sizeStyles: Record<string, string> = {
  sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-4 py-2 text-sm rounded-lg gap-2",
  lg: "px-5 py-2.5 text-base rounded-lg gap-2",
};

export function Button({
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center
        font-medium
        transition-all duration-200
        active:scale-[0.98]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
