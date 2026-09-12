export type ImageAsset = { src: string; width: number; height: number; alt: string };

export type NavLink = { label: string; href: string };

export type QuadrantId = "workshops" | "panel" | "competitions" | "exhibition";

export type Highlight = {
  id: QuadrantId;
  /** Position on the wheel (desktop) */
  quadrant: "tl" | "tr" | "bl" | "br";
  /** Pointer rotation (deg) so the hub arrow points at this quadrant */
  angle: number;
  kicker: string;
  eyebrow: string;
  title: string;
  description: string;
  image: ImageAsset;
};

export type Competition = {
  id: string;
  title: string;
  description: string;
  status: "Open" | "Closing soon" | "Closed";
  palette: "lilac" | "teal" | "gold" | "green";
  prelims: string;
  href: string;
};

export type Testimonial = { id: string; quote: string; author: string; rating: 1 | 2 | 3 | 4 | 5 };

export type Partner = { id: string; label: string; name: string; logo: ImageAsset; href: string };
