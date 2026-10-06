import {
  BookOpen,
  CalendarDays,
  Cog,
  KeyRound,
  MonitorPlay,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "bounties", path: "/bounties", icon: Target, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "secrets", path: "/secrets", icon: KeyRound, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorPlay, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
