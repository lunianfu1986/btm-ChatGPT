// components/GameHeroCard.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const GAME_URL = "https://jcw87.github.io/c2-sans-fight/";
// 以后你把游戏文件拷到自己项目的 public/games/sans-fight 下，就可以改成：
// const GAME_URL = "/games/sans-fight/index.html";

export function GameHeroCard() {
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
          title: "Bad Time Simulator – Endless Sans",
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
      <div className="relative aspect-[16/9] w-full">
        {/* 背景 / 游戏区域 */}
        {playing ? (
          <iframe
            src={GAME_URL}
            title="Bad Time Simulator – Sans Fight"
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen; autoplay"
          />
        ) : (
          <>
            {/* 背景图 */}
            <Image
              src="/images/bts-hero.jpg"
              alt="Endless Sans background"
              fill
              className="object-cover"
            />
            {/* 蓝色蒙版 */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f63]/70 via-[#071443]/80 to-[#02061a]/95" />

            {/* 中间内容：圆头像 + 标题 + Play 按钮 */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full border-[6px] border-[#6f8cff] shadow-[0_0_40px_rgba(111,140,255,0.7)] bg-black/60 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/bts-avatar.png"
                    alt="Endless Sans"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-5">
                Endless Sans
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

        {/* 底部评分条 */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 md:h-14 bg-gradient-to-t from-[#010313]/95 via-[#010313]/80 to-transparent flex items-center">
          <div className="pointer-events-auto flex items-center gap-2 text-xs md:text-sm text-slate-100 px-6">
            <div className="flex items-center text-[#ffcf44]">
              <span className="mr-0.5">★</span>
              <span className="mr-0.5">★</span>
              <span className="mr-0.5">★</span>
              <span className="mr-0.5">★</span>
              <span className="opacity-50">★</span>
            </div>
            <span className="font-semibold text-slate-100">2.8</span>
            <span className="text-slate-300 text-[11px] md:text-xs">(6)</span>
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
