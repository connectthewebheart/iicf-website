import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({ title, subtitle, align = "center", titleClassName, subtitleClassName, className, as: Tag = "h2" }: Props) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      <Tag data-reveal className={cn("font-display text-display-lg uppercase text-balance", titleClassName)}>
        {title}
      </Tag>
      {subtitle && (
        <p data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className={cn("text-lead font-medium text-pretty", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
