import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  note?: string;
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  disabled = false,
  note,
}: ButtonLinkProps) {
  const isInternal = href.startsWith("/");
  const linkClass = `btn btn--${variant} ${disabled ? "btn--disabled" : ""} ${className}`;
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {note ? <span className="btn__note">{note}</span> : null}
    </>
  );

  if (isInternal) {
    return (
      <Link
        href={disabled ? "#" : href}
        className={linkClass}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={disabled ? "#" : href}
      className={linkClass}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      rel="noreferrer"
    >
      {content}
    </a>
  );
}
