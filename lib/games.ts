// lib/games.ts

export type GameConfig = {
  id: string;
  name: string;
  slug: string;
  /** 在首页大卡片和 iframe 内嵌时使用的地址 */
  gameUrl: string;
  /** 大游戏卡片背景图 */
  heroBg: string;
  /** 大游戏卡片左下角圆头像 */
  avatar: string;
  rating: number;
  ratingCount: number;
  shortTag?: string;
  tags?: string[];
  difficulty?: string;
};

/**
 * 说明：
 * - 目前所有占位游戏（除了 Stronger Than You）都先用同一个可玩链接：
 *   https://jcw87.github.io/c2-sans-fight/
 *   方便你随时点开就能玩，后期你可以按游戏类型自己替换 gameUrl。
 * - heroBg / avatar 现在都复用同一张占位图，保证不会 404。
 *   你后期可以给每个游戏自己准备专属图片，然后只改这里的路径即可。
 */

export const games: GameConfig[] = [
  {
    id: "endless-sans",
    name: "Endless Sans Fight",
    slug: "endless-sans",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.8,
    ratingCount: 12540,
    shortTag: "Endless Sans bullet hell practice.",
    tags: ["Sans", "Endless", "Practice"],
    difficulty: "Hard",
  },
  {
    id: "practice-sans",
    name: "Sans Practice Mode",
    slug: "sans-practice-mode",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.6,
    ratingCount: 9800,
    shortTag: "Train specific Sans patterns in practice mode.",
    tags: ["Sans", "Practice"],
    difficulty: "Normal",
  },
  {
    id: "memory-sans",
    name: "Sans Fight Memory Challenge",
    slug: "sans-fight-memory",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.7,
    ratingCount: 11230,
    shortTag: "Learn and memorize every Sans attack sequence.",
    tags: ["Sans", "Memory", "Challenge"],
    difficulty: "Hard",
  },
  {
    id: "classic-bad-time",
    name: "Classic Bad Time Simulator",
    slug: "classic-bad-time",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.9,
    ratingCount: 20150,
    shortTag: "The classic browser Sans fight experience.",
    tags: ["Sans", "Classic"],
    difficulty: "Hard",
  },
  {
    id: "hardcore-sans",
    name: "Hardcore Sans Rush",
    slug: "hardcore-sans-rush",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.5,
    ratingCount: 7430,
    shortTag: "Dense patterns, fast attacks, no room for mistakes.",
    tags: ["Hardcore", "Rush"],
    difficulty: "Very Hard",
  },
  {
    id: "low-hit-training",
    name: "Low-Hit Sans Training",
    slug: "low-hit-training",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.4,
    ratingCount: 6120,
    shortTag: "Practice routes designed for low-hit or no-hit runs.",
    tags: ["Training", "No-hit"],
    difficulty: "Hard",
  },
  {
    id: "papyrus-encounter",
    name: "Papyrus Encounter",
    slug: "papyrus-encounter",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.3,
    ratingCount: 5020,
    shortTag: "A lighter, jump-based Papyrus battle to warm up.",
    tags: ["Papyrus", "Jump Training"],
    difficulty: "Normal",
  },
  {
    id: "deltarune-trial",
    name: "Deltarune Trial Fight",
    slug: "deltarune-trial",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.2,
    ratingCount: 4310,
    shortTag: "Deltarune-inspired bullet patterns and boss routes.",
    tags: ["Deltarune", "Trial"],
    difficulty: "Normal",
  },
  {
    id: "blaster-practice",
    name: "Gaster Blaster Drill",
    slug: "gaster-blaster-drill",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.1,
    ratingCount: 3890,
    shortTag: "Focused training on tricky blaster patterns.",
    tags: ["Blaster", "Training"],
    difficulty: "Hard",
  },
  {
    id: "bone-tunnel",
    name: "Bone Tunnel Marathon",
    slug: "bone-tunnel-marathon",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.0,
    ratingCount: 3540,
    shortTag: "Survive extended bone tunnels and tight gaps.",
    tags: ["Bones", "Endurance"],
    difficulty: "Hard",
  },
  {
    id: "randomizer-sans",
    name: "Randomized Sans Patterns",
    slug: "randomized-sans",
    gameUrl: "https://jcw87.github.io/c2-sans-fight/",
    heroBg: "/images/hero/hardcore-bg.jpg",
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.3,
    ratingCount: 4680,
    shortTag: "Every run feels different with shuffled attacks.",
    tags: ["Random", "Replay"],
    difficulty: "Hard",
  },
  {
    id: "stronger-than-you",
    name: "Stronger Than You",
    slug: "stronger-than-you",
    /**
     * ✅ 官方地址（作者 OneCJ 在 itch.io 的发布页）
     * 用来在本站 iframe 内嵌加载官方页面 / 官方嵌入。
     * 以后如果你拿到 itch.io 的 embed 地址，可以把这个换成 embed 的 src。
     */
    gameUrl: "https://onecj.itch.io/sty",
    heroBg: "/images/hero/hardcore-bg.jpg", // 先用占位图，后期你可以换自己的 stronger 背景
    avatar: "/images/hero/hardcore-avatar.jpg",
    rating: 4.7,
    ratingCount: 8200,
    shortTag: "Music-based AU battle inspired by 'Stronger Than You'.",
    tags: ["AU", "Music Battle"],
    difficulty: "Hard",
  },
];
