import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "@/components/icons";
import type { ComponentProps, ReactNode } from "react";

type Variant = "maroon" | "green" | "gold";
type Props = {
  href?: string;
  variant?: Variant;
  withArrow?: boolean;
  /** Bayon (header CTAs) or Casino Flat (in-page CTAs) — both appear in the design */
  face?: "accent" | "display";
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

const variants: Record<Variant, string> = {
  maroon: "bg-maroon text-white hover:bg-maroon-hover",
  green: "bg-green text-white hover:bg-green-hover",
  gold: "bg-gold text-black hover:bg-gold-hover",
};

export function Button({ href = "#", variant = "maroon", withArrow = true, face = "accent", className, children, ...rest }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "btn-arrow lift inline-flex items-center justify-center gap-2 rounded-pill px-8 py-4 uppercase leading-none whitespace-nowrap transition-colors",
        face === "accent" ? "font-accent text-[24px] tracking-[-0.02em]" : "font-display text-display-xs",
        variants[variant],
        className,
      )}
      {...rest}
    >
      <span className="translate-y-[1px]">{children}</span>
      {withArrow && <ArrowRight className="size-6 shrink-0" />}
    </Link>
  );
}
