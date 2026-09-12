import type { Partner } from "@/lib/types";

export const partners: Partner[] = [
  {
    id: "scai",
    label: "Organized by",
    name: "Speciality Coffee Association of India",
    logo: { src: "/assets/partners/scai.png", width: 800, height: 800, alt: "Speciality Coffee Association of India" },
    href: "https://scai.in",
  },
  {
    id: "coffee-board",
    label: "Supported by",
    name: "Coffee Board of India",
    logo: { src: "/assets/partners/coffee-board.png", width: 800, height: 800, alt: "Coffee Board of India" },
    href: "https://www.indiacoffee.org",
  },
];
