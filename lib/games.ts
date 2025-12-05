// lib/games.ts

export type GameConfig = {
  id: string;
  name: string;
  slug: string;
  shortTag?: string;
  rating: number;
  ratingCount: number;
  heroBg: string;
  avatar: string;
  gameUrl: string;
};

export const games: GameConfig[] = [
  {
    id: "endless-sans",
    name: "Endless Sans",
    slug: "endless-sans",
    shortTag: "Sans Fight • Endless",
    rating: 2.8,
    ratingCount: 6,
    heroBg: "/images/bts-hero.jpg",
    avatar: "/images/bts-avatar.png",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    // 以后改成自托管：
    // gameUrl: "/games/sans-fight/index.html",
  },
  {
    id: "classic-sans",
    name: "Classic Sans Fight",
    slug: "classic-sans",
    shortTag: "Original Sans boss battle",
    rating: 4.5,
    ratingCount: 124,
    heroBg: "/images/bts-hero.jpg",
    avatar: "/images/bts-avatar.png",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
  },
  {
    id: "practice-sans",
    name: "Practice Mode",
    slug: "practice-sans",
    shortTag: "Pattern practice & training",
    rating: 4.2,
    ratingCount: 73,
    heroBg: "/images/bts-hero.jpg",
    avatar: "/images/bts-avatar.png",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
  },
];
