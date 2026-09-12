"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { Close, Menu } from "@/components/icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-pill text-maroon transition hover:bg-maroon/10"
      >
        {open ? <Close className="size-6" /> : <Menu className="size-6" />}
      </button>

      <div
        id={id}
        hidden={!open}
        className="fixed inset-x-0 top-[calc(var(--announce-h)+var(--header-h))] bottom-0 z-40 overflow-y-auto bg-shell/95 backdrop-blur"
      >
        <nav aria-label="Mobile" className="container-site flex flex-col gap-2 py-8">
          {primaryNav.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              ref={i === 0 ? firstLink : undefined}
              onClick={() => setOpen(false)}
              className="rounded-chip px-3 py-4 font-accent text-[28px] leading-none text-maroon transition hover:bg-maroon/5"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 flex flex-col gap-3">
            <Button href={site.cta.tickets.href} className="w-full">{site.cta.tickets.label}</Button>
            <Button href={site.cta.exhibit.href} className="w-full">{site.cta.exhibit.label}</Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
