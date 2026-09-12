/**
 * Casino Flat ships without apostrophes, quotes or dashes. Figma silently substituted a fallback glyph;
 * we do the same on purpose, tuned to sit against the heavy caps (see .punct in base.css).
 */
export function Apos() {
  return <span className="punct">&rsquo;</span>;
}
