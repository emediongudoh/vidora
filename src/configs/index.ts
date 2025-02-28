import {
  Heart,
  History,
  Home,
  ListVideo,
  PlaySquareIcon,
  TrendingUp,
} from "lucide-react";

export const homeSidebarSections = [
  {
    items: [
      {
        label: "Home",
        href: "",
        icon: Home,
      },
      {
        label: "Subscriptions",
        href: "/feed/subscriptions",
        icon: PlaySquareIcon,
      },
      {
        label: "Trending",
        href: "/feed/trending",
        icon: TrendingUp,
      },
    ],
  },
  {
    label: "You",
    items: [
      {
        label: "History",
        href: "/feed/history",
        icon: History,
      },
      {
        label: "Playlists",
        href: "/feed/playlists",
        icon: ListVideo,
      },
      {
        label: "Liked videos",
        href: "/feed/liked",
        icon: Heart,
      },
    ],
  },
];
