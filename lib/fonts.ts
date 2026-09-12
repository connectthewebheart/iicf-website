import localFont from "next/font/local";
import { Manrope, Bayon, Gochi_Hand } from "next/font/google";

/**
 * Casino Flat — display face (72 glyphs: A–Z a–z 0–9 ! , . : ; ?).
 * Punctuation falls through to Manrope via the font stack in tokens.css.
 */
export const display = localFont({
  src: "./fonts/CasinoFlat.woff2",
  variable: "--font-display-face",
  display: "swap",
  preload: true,
  weight: "400",
  adjustFontFallback: "Arial",
});

export const displayShadow = localFont({
  src: "./fonts/CasinoFlatShadow.woff2",
  variable: "--font-display-shadow-face",
  display: "swap",
  preload: false,
  weight: "400",
  adjustFontFallback: "Arial",
});

export const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-face",
  display: "swap",
  preload: true,
});

export const accent = Bayon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent-face",
  display: "swap",
  preload: true,
});

export const script = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script-face",
  display: "swap",
  preload: false,
});

export const fontVariables = [display.variable, displayShadow.variable, body.variable, accent.variable, script.variable].join(" ");
