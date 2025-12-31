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
  const base =
    "inline-flex flex-col items-center gap-1 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]";
  const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
    primary:
      "bg-sky-600 text-white shadow-[0_12px_30px_rgba(56,189,248,0.25)] hover:bg-sky-500 hover:shadow-[0_16px_40px_rgba(56,189,248,0.35)]",
    secondary:
      "border border-sky-500/70 text-sky-200 hover:border-sky-400 hover:text-sky-100",
    ghost:
      "border border-white/10 text-gray-200 hover:border-sky-500/50 hover:text-white",
  };
  const disabledClass = disabled ? "opacity-50 pointer-events-none" : "";
  const linkClass = `${base} ${variants[variant]} ${disabledClass} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {note ? <span className="text-xs text-gray-400">{note}</span> : null}
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

