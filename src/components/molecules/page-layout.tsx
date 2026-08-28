import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode;
  headerClassName?: string;
  bodyClassName?: string;
};

export function PageLayout({
  header,
  children,
  className,
  headerClassName,
  bodyClassName,
  ...props
}: Props) {
  const rootClass = ["flex flex-col", className].filter(Boolean).join(" ");
  const bodyClass = ["flex-1", bodyClassName].filter(Boolean).join(" ");

  return (
    <div className={rootClass} {...props}>
      {header && <header className={headerClassName}>{header}</header>}
      <main className={bodyClass}>{children}</main>
    </div>
  );
}
