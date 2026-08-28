import type { ElementType, HTMLAttributes } from "react";

// Allowed body-level tags
type BodyTag =
  | "p"
  | "span"
  | "div"
  | "pre"
  | "code"
  | "blockquote"
  | "em"
  | "strong"
  | "b"
  | "i"
  | "u"
  | "small"
  | "mark"
  | "del"
  | "ins"
  | "sub"
  | "sup"
  | "abbr"
  | "cite"
  | "q"
  | "kbd"
  | "samp"
  | "var";

// Map each tag to its HTML attributes type
type Props = HTMLAttributes<HTMLElement> & {
  as?: BodyTag;
};
// Polymorphic Text component
export function Typography({ as, children, ...props }: Props) {
  const Component = as as ElementType;

  return <Component {...props}>{children}</Component>;
}
