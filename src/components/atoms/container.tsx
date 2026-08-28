import type { ElementType, HTMLAttributes } from "react";
import {
  alignClasses,
  directionClasses,
  gapClasses,
  justifyClasses,
} from "./constants";
import type { Align, Direction, Gap, Justify, Tag } from "./types";

type Props = HTMLAttributes<HTMLElement> & {
  as?: Tag;
  direction?: Direction;
  align?: Align;
  justify?: Justify;
  wrap?: boolean;
  gap?: Gap;
  inline?: boolean;
};

export function Container({
  as = "div",
  direction = "row",
  align,
  justify,
  wrap = false,
  gap,
  inline = false,
  className,
  children,
  ...props
}: Props) {
  const Component = as as ElementType;

  const classes = [
    inline ? "inline-flex" : "flex",
    directionClasses[direction],
    align && alignClasses[align],
    justify && justifyClasses[justify],
    wrap && "flex-wrap",
    gap !== undefined && gapClasses[gap],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
