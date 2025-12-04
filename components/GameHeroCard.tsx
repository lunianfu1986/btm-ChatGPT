// components/GameHeroCard.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const GAME_URL = "https://jcw87.github.io/c2-sans-fight/";
// 以后你把文件放到 public/games/sans-fight 之后，改成：
// const GAME_URL = "/games/sans-fight/index.html";

export function GameHeroCard() {
  const [playing, setPlaying] = useState(false);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      if (navigator.share) {
        await navigator.share({
          title: "Bad Time Simulator – Sans Fight",
          text: "Try this Sans fight in your browser!",
          url,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFullscreen = () => {
    const el = previewRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(console.error);
    } else {
      document.exitFullscreen?.().catch(console.error);
    }
  };

  return (
    <div className="bg-bts-card rounded-3xl p-5 md:p-6 shadow-bts-soft relative overflow-hidden">
      {/* 背景图 */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <Image
          src="/images/bts-hero.jpg"
          alt="Bad Time Simulator"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02061A]/40 via-[#02061A]/70 to-[#02061A]/95" />
      </div>

      {/* 前景内容 */}
      <div className="relative flex flex-col gap-5">
        {/* 上半部分：头像 + 文案 + Play 按钮 + 信息卡片 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 rounded-3xl bg-black/70 border border-bts-border/80 overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/bts-avatar.png"
                  alt="Game avatar"
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  Bad Time Simulator
                </h1>
                <p className="text-xs md:text-sm text-slate-300 mt-1">
                  Sans Fight • Bullet Hell • Undertale Boss Battle
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 border border-bts-border/70">
                ⭐ <span className="font-semibold">4.8</span>
                <span className="opacity-70">(12476)</span>
              </span>
              <span className="px-2 py-1 rounded-full bg-black/30 border border-bts-border/70">
                Browser • Free
              </span>
              <span className="px-2 py-1 rounded-full bg-black/30 border border-bts-border/70">
                Keyboard Recommended
              </span>
            </div>

            <p className="text-sm text-slate-200/90 max-w-2xl">
              Survive the infamous Sans boss battle recreated as a browser-based
              bullet-hell challenge. Dodge bones, avoid blasters, and test your
              determination.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {!playing && (
                <button
                  onClick={handlePlayClick}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-bts-accent hover:bg-bts-accent-soft text-sm font-medium shadow-bts-soft"
                >
                  ▶ Play Now
                </button>
              )}
              {playing && (
                <span className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-black/40 border border-bts-border/80 text-slate-200/90">
                  ▶ Game loaded – use arrow keys + Z / X
                </span>
              )}
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-bts-border hover:border-bts-accent text-xs text-slate-200/90">
                View Modes
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-bts-border text-xs text-slate-300 hover:text-white">
                Add to Favorites
              </button>
            </div>
          </div>

          {/* 右侧信息小卡片 */}
          <div className="w-full md:w-64 bg-black/30 border border-bts-border/70 rounded-2xl p-4 text-xs text-slate-300 flex flex-col gap-3">
            <div>
              <p className="uppercase tracking-wide text-[11px] text-slate-400">
                Released
              </p>
              <p>April 25, 2015</p>
            </div>
            <div>
              <p className="uppercase tracking-wide text-[11px] text-slate-400">
                Developer
              </p>
              <p>Jelly &amp; community remixes</p>
            </div>
            <div>
              <p className="uppercase tracking-wide text-[11px] text-slate-400">
                Platforms
              </p>
              <p>Browser • PC • Chromebook</p>
            </div>
            <div>
              <p className="uppercase tracking-wide text-[11px] text-slate-400">
                Controls
              </p>
              <p>Arrow keys + Z / X</p>
            </div>
          </div>
        </div>

        {/* 下半部分：游戏预览区域（Play 按钮上，游戏在下面） */}
        <div className="mt-1">
          <div className="flex items-center justify-between mb-2 text-xs text-slate-300 px-1">
            <span className="font-semibold">Game Preview</span>
            <span className="text-[11px] text-slate-400">
              Best played on desktop with keyboard
            </span>
          </div>

          <div
            ref={previewRef}
            className="relative w-full rounded-2xl border border-bts-border/80 bg-black/70 overflow-hidden min-h-[260px]"
          >
            {playing ? (
              <>
                <iframe
                  src={GAME_URL}
                  title="Bad Time Simulator – Sans Fight"
                  className="w-full h-[320px] md:h-[360px] lg:h-[420px] border-0"
                  allow="fullscreen; autoplay"
                />
                {/* 右下角分享 & 全屏按钮 */}
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <button
                    onClick={handleShare}
                    className="w-9 h-9 rounded-full bg-black/60 border border-bts-border/80 flex items-center justify-center text-sm hover:bg-bts-card-soft"
                    title="Share"
                  >
                    ↗
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="w-9 h-9 rounded-full bg-black/60 border border-bts-border/80 flex items-center justify-center text-sm hover:bg-bts-card-soft"
                    title="Fullscreen"
                  >
                    ⤢
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-[260px] text-sm text-slate-300">
                <p>Click “Play Now” above to load the Sans fight.</p>
                <p className="mt-1 text-xs text-slate-400">
                  The game will appear here inside this card.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
