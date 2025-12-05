// components/GameHeroCard.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GameConfig } from "@/lib/games";
import { InteractiveRating } from "./InteractiveRating";

type GameHeroCardProps = {
  game: GameConfig;
};

export function GameHeroCard({ game }: GameHeroCardProps) {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      if (navigator.share) {
        await navigator.share({
          title: `Bad Time Simulator – ${game.name}`,
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
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.().catch(console.error);
    } else {
      document.exitFullscreen?.().catch(console.error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#10236b]/80 rounded-[32px] border border-bts-border/80 shadow-bts-soft overflow-hidden"
    >
      {/* 放大：固定一个比较高的高度，而不是 16:9 比例 */}
      <div className="relative w-full min-h-[360px] md:min-h-[480px] lg:min-h-[560px]">
        {/* 背景 / 游戏区域 */}
        {playing ? (
          <iframe
            src={game.gameUrl}
            title={`Bad Time Simulator – ${game.name}`}
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen; autoplay"
          />
        ) : (
          <>
            {/* 背景图 */}
            <Image
              src={game.heroBg}
              alt={`${game.name} background`}
              fill
              className="object-cover"
            />
            {/* 蓝色蒙版 */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f63]/70 via-[#071443]/82 to-[#02061a]/96" />

            {/* 中间内容：圆头像 + 标题 + Play 按钮 */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 md:w-44 md:h-44 rounded-full border-[6px] border-[#6f8cff] shadow-[0_0_40px_rgba(111,140,255,0.7)] bg-black/60 overflow-hidden flex items-center justify-center">
                  <Image
                    src={game.avatar}
                    alt={game.name}
                    width={176}
                    height={176}
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">
                {game.name}
              </h1>

              <button
                onClick={handlePlay}
                className="inline-flex items-center justify-center px-10 py-3 rounded-full text-sm md:text-base font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.45)] bg-gradient-to-r from-[#3f6bff] to-[#7a4dff] hover:from-[#547aff] hover:to-[#8a5dff] transition transform hover:-translate-y-0.5"
              >
                <span className="mr-2 text-base">▶</span>
                PLAY NOW
              </button>
            </div>
          </>
        )}

        {/* 底部评分条 + 右侧按钮 */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 md:h-14 bg-gradient-to-t from-[#010313]/98 via-[#010313]/85 to-transparent flex items-center">
          <div className="pointer-events-auto flex items-center gap-2 px-6">
            <InteractiveRating
              gameId={game.id}
              initialRating={game.rating}
              initialCount={game.ratingCount}
            />
          </div>

          {/* 右下角按钮 */}
          <div className="pointer-events-auto ml-auto flex items-center gap-2 pr-4 md:pr-5">
            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-slate-100 text-base hover:bg-white/10 transition"
              title="Share"
            >
              ↗
            </button>
            <button
              onClick={handleFullscreen}
              className="w-9 h-9 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-slate-100 text-base hover:bg-white/10 transition"
              title="Fullscreen"
            >
              ⤢
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
