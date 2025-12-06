// components/GameHeroCard.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { GameConfig } from "@/lib/games";

type Props = {
  game: GameConfig;
};

export function GameHeroCard({ game }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleFullscreen = () => {
    if (containerRef.current && containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen().catch(() => {
        // 全屏失败就静默忽略
      });
    }
  };

  const handleShare = () => {
    const url = game.gameUrl;
    const text = `Play ${game.name} on Bad Time Simulator`;

    if (typeof navigator !== "undefined" && (navigator as any).share) {
      (navigator as any)
        .share({
          title: game.name,
          text,
          url,
        })
        .catch(() => {});
    } else {
      // 简单用 X 做一个默认分享，PC 上也能用
      const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-bts-card rounded-3xl border border-bts-border/80 shadow-bts-soft p-4 md:p-5 lg:p-6 space-y-4">
      {/* 顶部信息行：头像 + 标题 + 分享/全屏 */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-black/60 border border-bts-border/60">
            <Image
              src={game.avatar || game.heroBg}
              alt={game.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Sans Fight
            </div>
            <h1 className="text-xl md:text-2xl font-semibold leading-tight">
              {game.name}
            </h1>
            {game.shortTag && (
              <p className="text-xs text-slate-400 mt-0.5">{game.shortTag}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition"
            >
              <span className="text-sm">⤴</span>
              <span>Share</span>
            </button>
            <button
              type="button"
              onClick={handleFullscreen}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-bts-border/80 hover:border-bts-accent hover:text-bts-accent transition"
            >
              <span className="text-sm">⛶</span>
              <span>Fullscreen</span>
            </button>
          </div>
        </div>
      </div>

      {/* 评分行 */}
      <div className="flex items-center gap-3 text-xs text-slate-300">
        <div className="flex items-center text-amber-400 text-sm">
          {"★".repeat(5)}
        </div>
        <span className="font-semibold">{game.rating.toFixed(1)}</span>
        <span className="text-slate-500">
          ({game.ratingCount.toLocaleString()})
        </span>
        {game.difficulty && (
          <>
            <span className="text-slate-600">•</span>
            <span className="uppercase tracking-wide text-[11px] text-slate-400">
              {game.difficulty}
            </span>
          </>
        )}
      </div>

      {/* 大游戏窗口 + Play 按钮 / iframe */}
      <div
        ref={containerRef}
        className="relative w-full rounded-3xl overflow-hidden border border-bts-border/80 bg-black/80"
      >
        {!isPlaying ? (
          // 未开始时：显示背景 + 居中的 Play UI
          <div className="relative w-full pt-[56.25%]">
            <Image
              src={game.heroBg}
              alt={game.name}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black/60 border border-white/20 shadow-bts-soft">
                <span className="text-lg">⟁</span>
              </div>
              <h2 className="text-lg md:text-xl font-semibold">
                {game.name}
              </h2>
              <button
                type="button"
                onClick={handlePlay}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-bts-accent hover:bg-bts-accent-soft text-sm font-semibold shadow-bts-soft"
              >
                <span>▶</span>
                <span>PLAY NOW</span>
              </button>
            </div>
          </div>
        ) : (
          // 开始后：直接显示 iframe
          <div className="relative w-full pt-[56.25%]">
            <iframe
              src={game.gameUrl}
              title={game.name}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}
