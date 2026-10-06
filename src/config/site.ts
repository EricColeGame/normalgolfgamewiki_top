export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Normal Golf Game Wiki",
  shortName: "Normal Golf Game",
  logoText: "N",
  tagline: "Guides, Bounties, Clubs & Walkthroughs",
  description: "Fan-made Normal Golf Game wiki covering golf controls, clubs, bounties, walkthroughs, achievements, secrets and tips for the surreal physics golf simulator.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://normalgolfgamewiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://normalgolfgamewiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3510740/Normal_Golf_Game/",
  heroVideoId: "rT1IYuT5X4o", // Normal Golf Game — official trailer (Luke Muscat)
  social: {
    discord: "https://discord.com/game/normal-golf-game-1511211351266164737",
    youtube: "https://www.youtube.com/@lukemuscat",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
