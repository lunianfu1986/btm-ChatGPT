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

const GAME_URL = "https://jcw87.github.io/c2-sans-fight/";

// 这里你可以用之前切好的 hero 背景图，也可以换成别的
const HERO_BG = "/images/bts-hero.jpg";

// 这里建议用你刚才发给我的那张游戏截图：
// 请把图片保存为 public/images/bts-game-placeholder.png
const GAME_PLACEHOLDER = "/images/bts-game-placeholder.png";

export const games: GameConfig[] = [
  {
    id: "endless-sans",
    name: "Endless Sans",
    slug: "endless-sans",
    shortTag: "Endless Sans fight challenge",
    rating: 4.3,
    ratingCount: 128,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "classic-sans",
    name: "Classic Sans Fight",
    slug: "classic-sans",
    shortTag: "Original Undertale genocide route boss",
    rating: 4.7,
    ratingCount: 342,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "practice-sans",
    name: "Practice Mode",
    slug: "practice-sans",
    shortTag: "Train specific attack patterns safely",
    rating: 4.5,
    ratingCount: 201,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "hardcore-sans",
    name: "Hardcore Sans",
    slug: "hardcore-sans",
    shortTag: "Faster attacks, no mistakes allowed",
    rating: 4.6,
    ratingCount: 178,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "one-hit-sans",
    name: "One Hit Challenge",
    slug: "one-hit-sans",
    shortTag: "Survive the fight with only 1 HP",
    rating: 4.1,
    ratingCount: 93,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "no-hit-sans",
    name: "No Hit Run",
    slug: "no-hit-sans",
    shortTag: "Try to clear the fight without getting hit",
    rating: 4.9,
    ratingCount: 57,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "pattern-lab",
    name: "Pattern Lab",
    slug: "pattern-lab",
    shortTag: "Learn every bone & blaster pattern",
    rating: 4.4,
    ratingCount: 136,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "memory-trial",
    name: "Sans Memory Trial",
    slug: "memory-trial",
    shortTag: "Memorization-focused Sans fight remix",
    rating: 4.0,
    ratingCount: 81,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "boss-rush",
    name: "Sans Boss Rush",
    slug: "boss-rush",
    shortTag: "Back-to-back phases with no breaks",
    rating: 4.2,
    ratingCount: 119,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "speedrun-sans",
    name: "Speedrun Sans",
    slug: "speedrun-sans",
    shortTag: "Optimized for speedrun practice",
    rating: 4.1,
    ratingCount: 64,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "training-room",
    name: "Training Room",
    slug: "training-room",
    shortTag: "Slow motion training & safe mode",
    rating: 4.3,
    ratingCount: 102,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
  {
    id: "remix-mania",
    name: "Remix Mania",
    slug: "remix-mania",
    shortTag: "Fan-made Sans fight remix pack",
    rating: 4.6,
    ratingCount: 150,
    heroBg: HERO_BG,
    avatar: GAME_PLACEHOLDER,
    gameUrl: GAME_URL,
  },
];
