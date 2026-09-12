import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { site } from "@/lib/content/site";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} 2027 | IICF`, template: "%s | IICF 2027" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.shortName,
    url: "/",
    title: `${site.name} 2027`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#8b1821",
  colorScheme: "light",
};

// Restores a dismissed announcement bar before first paint so it never flashes.
const announceInit = `try{if(localStorage.getItem(${JSON.stringify(site.announcementKey)})==='1')document.documentElement.dataset.announce='off'}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${fontVariables} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: announceInit }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-pill focus:bg-gold focus:px-5 focus:py-3 focus:font-bold focus:text-maroon"
        >
          Skip to content
        </a>
        {children}
        <MotionProvider />
      </body>
    </html>
  );
}
