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
        isPrivateRoute: true,
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
        isPrivateRoute: true,
      },
      {
        label: "Playlists",
        href: "/feed/playlists",
        icon: ListVideo,
        isPrivateRoute: true,
      },
      {
        label: "Liked videos",
        href: "/feed/liked",
        icon: Heart,
        isPrivateRoute: true,
      },
    ],
  },
];
