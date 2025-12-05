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
        <div className="w-10 h-10 rounded-2xl bg-bts-accent flex items-center justify-center text-xs font-semibold shadow-bts-soft">
          BTS
        </div>
        <div className="flex flex-col gap-4 mt-4 text-slate-400 text-xl">
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
        {/* 顶部导航 */}
        <header className="sticky top-0 z-20 backdrop-blur bg-[#02061A]/90 border-b border-bts-border/60">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="lg:hidden w-9 h-9 rounded-2xl bg-bts-accent flex items-center justify-center text-xs font-semibold">
                BTS
              </div>
              <div className="font-semibold tracking-tight">
                Bad Time Simulator
              </div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
  <Link href="/games" className="hover:text-white">
    All Games
  </Link>
  <button className="hover:text-white">Sans Fight Memory</button>
  <button className="hover:text-white">Papyrus Encounter</button>
  <button className="hover:text-white">Play Deltarune</button>
</nav>

            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-[#020b27] border border-bts-border/80 rounded-full px-3 py-1.5 text-sm text-slate-300 min-w-[220px]">
                <span className="mr-2 opacity-60">🔍</span>
                <input
                  className="bg-transparent outline-none flex-1 text-xs placeholder:text-slate-500"
                  placeholder="Search games, Sans fights, guides..."
                />
              </div>
              <button className="hidden sm:inline-flex items-center text-xs px-3 py-1.5 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition">
                Log in
              </button>
              <button className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-bts-accent hover:bg-bts-accent-soft transition shadow-bts-soft">
                Sign up
              </button>
            </div>
          </div>
        </header>

        {/* 主内容 */}
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-8">
          {/* 顶部：英雄区 + 右侧缩略图 */}
          <section className="grid lg:grid-cols-[minmax(0,2.4fr)_minmax(260px,1fr)] gap-6 items-start">
            {/* 左侧：英雄卡片（含多游戏列表） */}
            <GameHeroSection />

            {/* 右侧：广告 + 竖图墙（全部展开，无滚动条） */}
            <div className="space-y-4">
              <div className="bg-bts-card-soft rounded-3xl p-4 border border-bts-border/80">
                <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
                  Ads by Google
                </p>
                <div className="w-full h-24 rounded-2xl bg-slate-900/60 border border-dashed border-slate-600 flex items-center justify-center text-xs text-slate-400">
                  300×250 Ad Placeholder
                </div>
              </div>

              <div className="bg-bts-card-soft rounded-3xl p-3 border border-bts-border/80">
                <div className="grid grid-cols-3 gap-2">
                  {thumbs.map((t) => (
                    <div
                      key={t.id}
                      className="relative w-full pt-[100%] rounded-xl overflow-hidden bg-black/60"
                    >
                      <Image
                        src={t.src}
                        alt={`Bad Time Simulator thumbnail ${t.id}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 中部截图区 */}
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

          {/* 下部：左文字 + 右评论 */}
          <section className="grid lg:grid-cols-[minmax(0,2.1fr)_minmax(320px,1fr)] gap-6 items-start">
            {/* 左侧内容 */}
            <article className="space-y-6">
              <div className="bg-bts-card rounded-3xl p-5 border border-bts-border/80 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Bad Time Simulator | Sans Fight &amp; Undertale Boss Battles
                  </h2>
                </div>

                <p className="text-sm text-slate-200/90">
                  Play Bad Time Simulator and relive multiple Sans fight
                  variants, Bad Time re-creations, and all major boss fights
                  from Undertale and Deltarune – including custom remixes,
                  Papyrus, Mettaton EX, Jevil, and more. Experience these
                  legendary bullet-hell challenges instantly in your browser.
                </p>

                <h3 className="text-lg font-semibold mt-4">
                  What is Bad Time Simulator?
                </h3>
                <p className="text-sm text-slate-200/90">
                  Bad Time Simulator takes the game’s most notorious challenge –
                  the final confrontation from Undertale&apos;s genocide route –
                  and turns it into a focused boss-rush experience. Every attack
                  pattern is reproduced to keep the intensity, while the browser
                  format makes it easy to jump in and try again.
                </p>

                <h4 className="font-semibold mt-3 text-sm">
                  Core Gameplay Highlights
                </h4>
                <ul className="text-sm text-slate-200/90 space-y-1 list-disc list-inside">
                  <li>
                    Authentic recreation of Sans&apos; fourth-wall-breaking
                    dialogue and personality.
                  </li>
                  <li>
                    True bullet-hell rhythm with escalating difficulty and
                    unique mechanics.
                  </li>
                  <li>
                    Blue soul gravity mechanics that change movement physics
                    mid-battle.
                  </li>
                  <li>
                    Karma damage system that punishes greedy choices more than
                    defensive play.
                  </li>
                </ul>
              </div>

              {/* How to play + video */}
              <div className="bg-bts-card rounded-3xl p-5 border border-bts-border/80 space-y-4">
                <h3 className="text-lg font-semibold">
                  How to Play Bad Time Simulator
                </h3>
                <p className="text-sm text-slate-200/90">
                  Master the controls and game modes to survive the legendary
                  Bad Time Simulator challenge.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bts-card-soft rounded-2xl p-4 border border-bts-border/80 text-sm text-slate-200/90 space-y-2">
                    <h4 className="font-semibold text-sm mb-1">
                      Game Modes Available
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>
                        <span className="font-semibold">Normal Mode:</span> The
                        classic Sans boss experience.
                      </li>
                      <li>
                        <span className="font-semibold">Practice Mode:</span>{" "}
                        Retry specific patterns without pressure.
                      </li>
                      <li>
                        <span className="font-semibold">Endless Mode:</span>{" "}
                        Survive as long as possible with randomized attacks.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-bts-card-soft rounded-2xl p-4 border border-bts-border/80 text-sm text-slate-200/90 space-y-2">
                    <h4 className="font-semibold text-sm mb-1">
                      Master Bad Time Strategies
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Learn patterns instead of reacting randomly.</li>
                      <li>Focus on hitbox awareness and tiny movements.</li>
                      <li>Avoid panic jumping – stay calm and precise.</li>
                      <li>Use Practice mode to drill the hardest attacks.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-bts-card-soft rounded-2xl border border-bts-border/80 overflow-hidden">
                  <div className="aspect-video relative bg-black/70">
                    <Image
                      src="/images/bts-video-thumb.jpg"
                      alt="Bad Time Simulator video"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
                    <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-bts-accent hover:bg-bts-accent-soft flex items-center justify-center shadow-bts-soft text-2xl">
                      ▶
                    </button>
                  </div>
                  <div className="px-4 py-3 text-sm flex items-center justify-between">
                    <span className="font-medium">
                      Bad Time Mastery – See All Attack Patterns in Action
                    </span>
                    <span className="text-xs text-slate-400 hidden md:inline">
                      YouTube • Gameplay walkthrough
                    </span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-bts-card rounded-3xl p-5 border border-bts-border/80 space-y-3">
                <h3 className="text-lg font-semibold mb-1">FAQ</h3>
                <p className="text-sm text-slate-300 mb-2">
                  Common questions about Bad Time Simulator.
                </p>
                <div className="space-y-2">
                  {faqItems.map((item, idx) => (
                    <details
                      key={idx}
                      className="group bg-bts-card-soft border border-bts-border/80 rounded-2xl px-4 py-3 text-sm"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <span className="font-medium">{item.q}</span>
                        <span className="ml-4 text-xs text-slate-400 group-open:hidden">
                          +
                        </span>
                        <span className="ml-4 text-xs text-slate-400 hidden group-open:inline">
                          −
                        </span>
                      </summary>
                      <p className="mt-2 text-slate-200/90">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              {/* 底部 CTA */}
              <div className="bg-gradient-to-r from-bts-card-soft to-[#163b7e] rounded-3xl p-6 border border-bts-border/80 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Ready for the Challenge?
                  </h3>
                  <p className="text-sm text-slate-200/90 mt-1">
                    Jump into the Sans fight and see how long your determination
                    lasts.
                  </p>
                </div>
                <Link
                  href="#top"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-bts-accent hover:bg-bts-accent-soft text-sm font-medium shadow-bts-soft"
                >
                  ▶ Play Bad Time Simulator Now
                </Link>
              </div>
            </article>

            {/* 右侧评论区 */}
            <aside className="space-y-4">
              <div className="bg-bts-card rounded-3xl p-4 border border-bts-border/80 max-h-[520px] overflow-y-auto">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold">Comments</h3>
                  <button className="text-[11px] text-bts-accent hover:underline">
                    Load More
                  </button>
                </div>
                <div className="space-y-3">
                  {comments.map((c, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-bts-card-soft/70 p-3 border border-bts-border/70"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-bts-accent/30 flex items-center justify-center text-[11px] font-semibold">
                            {c.user[0]}
                          </div>
                          <div>
                            <p className="text-xs font-medium">{c.user}</p>
                            <p className="text-[11px] text-slate-400">
                              {c.time}
                            </p>
                          </div>
                        </div>
                        <button className="text-[10px] text-slate-400 hover:text-slate-200">
                          ⋮
                        </button>
                      </div>
                      <p className="text-xs text-slate-200/90">{c.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-bts-border/70">
                  <p className="text-xs font-semibold mb-2">Add a Comment</p>
                  <input
                    className="w-full bg-[#020b27] border border-bts-border/80 rounded-xl px-3 py-2 text-xs outline-none focus:border-bts-accent"
                    placeholder="Name"
                  />
                  <textarea
                    className="mt-2 w-full bg-[#020b27] border border-bts-border/80 rounded-xl px-3 py-2 text-xs outline-none resize-none focus:border-bts-accent h-20"
                    placeholder="Write your comment..."
                  />
                  <button className="mt-2 w-full inline-flex items-center justify-center px-4 py-2 rounded-xl bg-bts-accent hover:bg-bts-accent-soft text-xs font-medium">
                    Submit Comment
                  </button>
                </div>
              </div>
            </aside>
          </section>
        </main>

        {/* 页脚 */}
        <footer className="border-t border-bts-border/80 mt-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
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
    </div>
  );
}
