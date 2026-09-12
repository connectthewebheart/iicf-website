export const site = {
  name: "India International Coffee Festival",
  shortName: "IICF 2027",
  url: "https://indiacoffeefestival.com",
  description:
    "India's largest celebration of coffee — a three-day experience in Bengaluru, 26–28 February 2027, where the entire coffee value chain comes together under one roof.",
  dates: { label: "26 – 28 February 2027", start: "2027-02-26", end: "2027-02-28" },
  city: "Bengaluru",
  email: "indiacoffeefestival@gmail.com",
  phone: "+91 63625 61750",
  phoneHref: "tel:+916362561750",
  cta: {
    tickets: { label: "Buy Tickets", href: "#contact" },
    exhibit: { label: "Exhibit Now", href: "#contact" },
  },
  /** Bump this key whenever the announcement text changes so dismissed users see the new one. */
  announcementKey: "iicf:announce:2027-02",
} as const;
