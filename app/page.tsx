// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { GameHeroSection } from "@/components/GameHeroSection";

const thumbs = Array.from({ length: 18 }).map((_, i) => ({
  id: i + 1,
  src: `/images/bts-thumb-${i + 1}.jpg`,
}));

const galleryShots = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  src: `/images/bts-gallery-${i + 1}.jpg`,
}));

const comments = [
  {
    user: "Flowey",
    time: "1 hour ago",
    text: "I finally beat Normal mode. The final phase is brutal but super satisfying.",
  },
  {
    user: "Sans",
    time: "5 hours ago",
    text: "Tip: learn the patterns instead of just reacting. Your SOUL will thank you.",
  },
  {
    user: "Chara",
    time: "1 day ago",
    text: "Hard mode is pure chaos. Absolutely love the bullet patterns.",
  },
];

const faqItems = [
  {
    q: "What does bad-time-simulator.com offer?",
    a: "It offers multiple Bad Time Simulator variants, including classic Sans fight, bonus phases, and other Undertale boss challenges playable in the browser.",
  },
  {
    q: "What Bad Time Simulator versions are available?",
    a: "You can play Normal, Practice, Endless, custom difficulties, and fan-made remixes. New variants are added over time.",
  },
  {
    q: "How do the difficulty options work?",
    a: "Each difficulty changes attack density, damage, and speed. Start with Normal and move up as you memorize patterns.",
  },
  {
    q: "Can I play Bad Time Simulator unblocked?",
    a: "Yes, as long as your network or school firewall allows browser games from this domain.",
  },
  {
    q: "Is there a mobile version available?",
    a: "You can play on mobile browsers, but keyboard + desktop is strongly recommended for precise movement.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex text-slate-100 bg-gradient-to-b from-[#030b2a] via-[#02061a] to-[#010312]">
      {/* 左侧竖导航 */}
      <aside className="hidden lg:flex flex-col items-center gap-6 w-16 bg-[#02061A]/80 border-r border-bts-border/60 pt-6">
        <div className="w-10 h-10 rounded-2xl bg-bts-accent flex items-center justify-center text-sm font-semibold shadow-bts-soft">
          BTS
        </div>
        <div className="flex flex-col gap-4 mt-4 text-slate-400 text-2xl">
          <button className="w-9 h-9 rounded-2xl flex items-center justify-center bg-bts-card-soft hover:bg-bts-accent/80 hover:text-white transition">
            🕹
          </button>
          <button className="w-9 h-9 rounded-2xl flex items-center justify-center hover:bg-bts-card-soft transition">
            ⭐
          </button>
          <button className="w-9 h-9 rounded-2xl flex items-center justify-center hover:bg-bts-card-soft transition">
            🎮
          </button>
          <button className="w-9 h-9 rounded-2xl flex items-center justify-center hover:bg-bts-card-soft transition">
            ⚙
          </button>
        </div>
      </aside>

      {/* 右侧主区域 */}
      <div className="flex-1 flex flex-col">
        {/* 顶部导航：改为渐变背景 + Logo 变成链接 */}
        <header className="sticky top-0 z-20 backdrop-blur bg-gradient-to-r from-[#1350d4] via-[#2337b7] to-[#1350d4] border-b border-bts-border/60 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="lg:hidden w-9 h-9 rounded-2xl bg-bts-accent flex items-center justify-center text-sm font-semibold">
                BTS
              </div>
              <Link
                href="/"
                className="font-semibold tracking-tight text-lg md:text-xl hover:text-white flex items-center gap-2"
              >
                Bad Time Simulator
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-base text-slate-200">
                <Link href="/games" className="hover:text-white">
                  All Games
                </Link>
                <button className="hover:text-white">Sans Fight Mastery</button>
                <button className="hover:text-white">Papyrus Encounter</button>
                <button className="hover:text-white">Play Deltarune</button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-[#020b27]/80 border border-bts-border/80 rounded-full px-3 py-1.5 text-base text-slate-100 min-w-[260px]">
                <span className="mr-2 opacity-70 text-lg">🔍</span>
                <input
                  className="bg-transparent outline-none flex-1 text-sm placeholder:text-slate-400"
                  placeholder="Search game
