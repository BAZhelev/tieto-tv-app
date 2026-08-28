import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function Heading({ as = "h1", children, ...props }: Props) {
  const Component = as;

  return <Component {...props}>{children}</Component>;
}
