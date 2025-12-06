// app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GameHeroCard } from "@/components/GameHeroCard";
import { games } from "@/lib/games";

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
  // 当前选中的游戏（默认第一个）
  const [activeGameId, setActiveGameId] = useState(games[0].id);
  const activeGame = games.find((g) => g.id === activeGameId) ?? games[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030b2a] via-[#02061a] to-[#010312] text-slate-100">
      {/* 顶部导航条（保持 V1.52 样式） */}
      <header className="sticky top-0 z-20 backdrop-blur bg-gradient-to-r from-[#1350d4] via-[#2337b7] to-[#1350d4] border-b border-bts-border/60 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="font-semibold tracking-tight text-lg md:text-xl hover:text-white"
            >
              Bad Time Simulator
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-base text-slate-200">
              <Link href="/games" className="hover:text-white">
                All Games
              </Link>
              <Link
                href="/posts/sans-fight-mastery"
                className="hover:text-white"
              >
                Sans Fight Mastery
              </Link>
              <Link
                href="/posts/papyrus-encounter"
                className="hover:text-white"
              >
                Papyrus Encounter
              </Link>
              <button className="hover:text-white">Play Deltarune</button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center bg-[#020b27]/80 border border-bts-border/80 rounded-full px-3 py-1.5 text-base text-slate-100 min-w-[260px]">
              <span className="mr-2 opacity-70 text-lg">🔍</span>
              <input
                className="bg-transparent outline-none flex-1 text-sm placeholder:text-slate-400"
                placeholder="Search games, Sans fights, guides..."
              />
            </div>
            <button className="hidden sm:inline-flex items-center text-sm px-4 py-1.5 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition">
              Log in
            </button>
            <button className="inline-flex items-center text-sm px-4 py-1.5 rounded-full bg-bts-accent hover:bg-bts-accent-soft transition shadow-bts-soft">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* 主体内容 */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-8">
        {/* 顶部 Hero：左侧大游戏卡片 + 右侧游戏列表 */}
        <section className="grid lg:grid-cols-[minmax(0,2.4fr)_minmax(260px,1fr)] gap-6 items-start">
          {/* 左侧：大游戏卡片（根据 activeGame 渲染） */}
          <GameHeroCard game={activeGame} />

          {/* 右侧：广告位 + 游戏列表 */}
          <div className="space-y-4">
            {/* Ads 卡片（保持原样） */}
            <div className="bg-bts-card-soft rounded-3xl p-4 border border-bts-border/80">
              <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
                Ads by Google
              </p>
              <div className="w-full h-24 rounded-2xl bg-slate-900/60 border border-dashed border-slate-600 flex items-center justify-center text-xs text-slate-400">
                300×250 Ad Placeholder
              </div>
            </div>

            {/* 右侧游戏列表：点击切换左侧大卡片 */}
            <div className="bg-bts-card-soft rounded-3xl p-3 border border-bts-border/80">
              <h2 className="text-xs font-semibold text-slate-300 mb-2 uppercase tracking-[0.2em]">
                Sans Fights
              </h2>
              <div className="flex flex-col gap-2">
                {games.map((game) => (
                  <button
                    key={game.id}
                    type="button"
                    onClick={() => setActiveGameId(game.id)}
                    className={`flex items-center gap-3 rounded-2xl px-2.5 py-2 border transition text-left ${
                      activeGameId === game.id
                        ? "border-bts-accent bg-bts-card"
                        : "border-bts-border/40 bg-[#050a23]"
                    }`}
                  >
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-black/60 flex-shrink-0">
                      <Image
                        src={game.avatar || game.heroBg}
                        alt={game.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-slate-100 truncate">
                        {game.name}
                      </div>
                      {game.shortTag && (
                        <div className="text-[11px] text-slate-400 truncate">
                          {game.shortTag}
                        </div>
                      )}
                      <div className="mt-0.5 flex items-center gap-2 text-[11px] text-slate-400">
                        <span>★ {game.rating.toFixed(1)}</span>
                        <span className="text-slate-500">
                          ({game.ratingCount.toLocaleString()})
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshot 区域（保持 V1.52 风格） */}
        <section className="bg-bts-card rounded-3xl p-4 md:p-5 border border-bts-border/80 shadow-bts-soft">
          <h2 className="text-sm font-semibold mb-3">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
            {galleryShots.map((shot) => (
              <div
                key={shot.id}
                className="relative w-full pt-[70%] rounded-2xl overflow-hidden bg-black/60"
              >
                <Image
                  src={shot.src}
                  alt={`Gameplay screenshot ${shot.id}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 下方：左侧文章 + 右侧评论 / FAQ */}
        <section className="grid lg:grid-cols-[minmax(0,2.1fr)_minmax(320px,1fr)] gap-6 items-start">
          {/* 左侧：文章内容 */}
          <article className="space-y-6">
            <div className="bg-bts-card rounded-3xl p-5 border border-bts-border/80 space-y-4">
              <div>
                <h2 className="text-xl font-semibold">
                  Bad Time Simulator | Sans Fight &amp; Undertale Boss Battles
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Bullet hell • Pattern memorization • High-intensity boss rush
                </p>
              </div>

              <p className="text-sm text-slate-200/90 leading-relaxed">
                Bad Time Simulator brings the iconic Sans fight and other
                Undertale-inspired boss battles into your browser. Train
                reaction speed, learn dense bullet patterns, and push your focus
                to the limit with endless and practice-style modes.
              </p>

              <p className="text-sm text-slate-200/90 leading-relaxed">
                Use Normal modes to learn basic routes and timing, then step up
                into Hardcore or Endless variants when you&apos;re ready. Every
                attempt helps you memorize patterns, build better movement
                habits, and slowly push further into each phase.
              </p>
            </div>

            {/* FAQ */}
            <div className="bg-bts-card-soft rounded-3xl p-5 border border-bts-border/80 space-y-3">
              <h3 className="text-sm font-semibold mb-1">
                Bad Time Simulator FAQ
              </h3>
              {faqItems.map((item, idx) => (
                <div key={idx} className="border-t border-bts-border/60 pt-3">
                  <p className="text-xs font-semibold text-slate-200 mb-1">
                    {item.q}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* 右侧：评论 / 活动区 */}
          <aside className="space-y-4">
            <div className="bg-bts-card-soft rounded-3xl p-4 border border-bts-border/80">
              <h3 className="text-sm font-semibold mb-2">Recent comments</h3>
              <div className="space-y-3">
                {comments.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-[#050a23] border border-bts-border/70 px-3 py-2.5"
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-semibold text-slate-100">
                        {c.user}
                      </span>
                      <span className="text-slate-500">{c.time}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bts-card-soft rounded-3xl p-4 border border-bts-border/80">
              <h3 className="text-sm font-semibold mb-2">
                Submit your run or score
              </h3>
              <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                Share your best streaks, no-hit attempts or creative challenges
                with the community. We&apos;ll feature standout runs in future
                updates.
              </p>
              <button className="w-full inline-flex items-center justify-center text-xs px-3 py-2 rounded-full bg-bts-accent hover:bg-bts-accent-soft transition shadow-bts-soft">
                Upload run / share replay
              </button>
            </div>
          </aside>
        </section>
      </main>

      {/* 底部 Footer */}
      <footer className="border-t border-bts-border/80 mt-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-200">
              Bad Time Simulator
            </span>
            <span>© {new Date().getFullYear()} bad-time-simulator.com</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-slate-200">About Us</button>
            <button className="hover:text-slate-200">Contact</button>
            <button className="hover:text-slate-200">Game Guide</button>
            <button className="hover:text-slate-200">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
