// app/games/page.tsx
import Image from "next/image";
import Link from "next/link";
import { games } from "../../lib/games";

export default function AllGamesPage() {
  return (
    <div className="min-h-screen flex text-slate-100 bg-gradient-to-b from-[#030b2a] via-[#02061a] to-[#010312]">
      {/* 左侧竖导航（和首页一致） */}
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
        {/* 顶部导航（渐变背景 + logo 链接） */}
        <header className="sticky top-0 z-20 backdrop-blur bg-gradient-to-r from-[#1350d4] via-[#2337b7] to-[#1350d4] border-b border-bts-border/60 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="lg:hidden w-9 h-9 rounded-2xl bg-bts-accent flex items-center justify-center text-sm font-semibold">
                BTS
              </div>
              <Link
                href="/"
                className="font-semibold tracking-tight text-lg md:text-xl hover:text-white"
              >
                Bad Time Simulator
              </Link>
              <nav className="hidden md:flex items-center gap-6 text-base text-slate-200">
                <Link href="/games" className="text-white font-semibold">
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

        {/* All Games 列表主体 */}
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8 space-y-6 text-base">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                All Games
              </h1>
              <p className="mt-1 text-base text-slate-300 max-w-xl leading-relaxed">
                Browse every Bad Time Simulator variant – Endless Sans, classic
                Sans fight, practice modes and more. Click any card to jump
                straight into the fight.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-bts-card-soft border border-bts-border/80 text-sm text-slate-200 hover:border-bts-accent hover:text-bts-accent transition"
            >
              ← Back to homepage
            </Link>
          </div>

          {/* 游戏网格 */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-bts-card rounded-3xl p-4 border border-bts-border/80 flex flex-col shadow-bts-soft"
              >
                {/* 顶部预览图 */}
                <div className="relative w-full pt-[56%] rounded-2xl overflow-hidden bg-black/70">
                  <Image
                    src={game.avatar}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 文本信息 */}
                <div className="mt-3 flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-base font-semibold truncate">
                      {game.name}
                    </h2>
                    <span className="text-sm text-slate-200 whitespace-nowrap">
                      ★ {game.rating.toFixed(1)} ({game.ratingCount})
                    </span>
                  </div>
                  {game.shortTag && (
                    <p className="text-sm text-slate-300 line-clamp-2 leading-snug">
                      {game.shortTag}
                    </p>
                  )}
                </div>

                {/* 按钮区域 */}
                <div className="mt-3 flex items-center gap-2">
                  <Link
                    href={game.gameUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center flex-1 px-3 py-2 rounded-full bg-bts-accent hover:bg-bts-accent-soft text-sm font-medium shadow-bts-soft"
                  >
                    <span className="mr-1 text-base">▶</span>
                    Play Now
                  </Link>
                  <Link
                    href="/"
                    className="text-sm text-slate-300 hover:text-bts-accent whitespace-nowrap"
                  >
                    View hero
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </main>

        {/* 页脚（和首页风格统一） */}
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
    </div>
  );
}
