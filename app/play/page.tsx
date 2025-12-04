// app/play/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Play Bad Time Simulator – Fullscreen",
  description:
    "Play Bad Time Simulator in fullscreen mode. Experience the Sans fight bullet-hell challenge directly in your browser.",
};

const GAME_URL =
  "https://lunianfu1986.github.io/bad-time-simulator-compiled/landing.html"; // TODO: 把这里替换成你真正的游戏链接

export default function PlayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#05123b] via-[#020821] to-[#010312] text-slate-100">
      {/* 顶部简单导航 */}
      <header className="h-14 border-b border-bts-border/70 bg-[#02061A]/90 backdrop-blur flex items-center">
        <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs px-3 py-1.5 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition"
            >
              ← Back to game page
            </Link>
            <span className="text-sm font-semibold hidden sm:inline">
              Bad Time Simulator – Fullscreen Play
            </span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Tip: Use keyboard for best control (Arrow keys + Z / X)
          </span>
        </div>
      </header>

      {/* 游戏区域 */}
      <main className="flex-1 flex items-stretch justify-center py-3 sm:py-4">
        <div className="max-w-6xl w-full px-2 sm:px-4">
          <div className="bg-bts-card rounded-3xl border border-bts-border/80 shadow-bts-soft overflow-hidden h-[calc(100vh-6.5rem)]">
            {/* 你真正的游戏 iframe */}
            <iframe
              src={GAME_URL}
              title="Bad Time Simulator Game"
              className="w-full h-full border-0"
              allow="fullscreen; autoplay; gamepad; keyboard-map"
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
