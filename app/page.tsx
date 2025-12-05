// app/page.tsx
import { GameHeroCard } from "@/components/GameHeroCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#02061A] text-slate-100 flex items-start justify-center p-4">
      <div className="max-w-6xl w-full">
        <header className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-bts-accent flex items-center justify-center text-xs font-semibold">
              BTS
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                Bad Time Simulator
              </h1>
              <p className="text-xs text-slate-400">
                Sans Fight • Bullet Hell • Undertale Boss Battle
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs">
            <span className="text-slate-400">All Games</span>
            <span className="text-slate-400">Sans Fight Memory</span>
            <span className="text-slate-400">Papyrus Encounter</span>
          </div>
        </header>

        {/* 这里就是你首页的大卡片 + 内嵌游戏 */}
        <GameHeroCard />
      </div>
    </div>
  );
}
