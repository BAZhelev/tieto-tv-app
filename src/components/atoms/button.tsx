import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

export function Button({
  icon,
  iconPosition = "left",
  children,
  ...props
}: Props) {
  const iconNode = icon ? <span aria-hidden="true">{icon}</span> : null;

  return (
    <button {...props}>
      {iconPosition === "left" && iconNode}
      {children}
      {iconPosition === "right" && iconNode}
    </button>
  );
}
