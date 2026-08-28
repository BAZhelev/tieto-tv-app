import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { useId } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
  error?: ReactNode;
  button?: ReactNode;
  buttonPosition?: "left" | "right";
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  wrapperClassName?: string;
  labelClassName?: string;
  groupClassName?: string;
  buttonClassName?: string;
  errorClassName?: string;
};

export function Input({
  label,
  error,
  button,
  buttonPosition = "right",
  buttonProps,
  id,
  className,
  wrapperClassName,
  labelClassName,
  groupClassName,
  buttonClassName,
  errorClassName,
  ...props
}: Props) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  const hasButton = Boolean(button);

  const inputClass = hasButton
    ? ["flex-1 min-w-0 border-0", className].filter(Boolean).join(" ")
    : className;

  const groupClass =
    groupClassName ??
    (hasButton
      ? "flex items-stretch overflow-hidden rounded-md border"
      : undefined);

  const buttonClass = [
    buttonPosition === "left" ? "border-r" : "border-l",
    buttonClassName,
    buttonProps?.className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputNode = (
    <input
      id={inputId}
      className={inputClass}
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
      {...props}
    />
  );

  const submitButton = hasButton ? (
    <button type="submit" {...buttonProps} className={buttonClass}>
      {button}
    </button>
  ) : null;

  return (
    <div className={wrapperClassName}>
      {label && (
        <label htmlFor={inputId} className={labelClassName}>
          {label}
        </label>
      )}
      {hasButton ? (
        <div className={groupClass}>
          {buttonPosition === "left" && submitButton}
          {inputNode}
          {buttonPosition === "right" && submitButton}
        </div>
      ) : (
        inputNode
      )}
      {error && (
        <p id={errorId} className={errorClassName}>
          {error}
        </p>
      )}
    </div>
  );
}
