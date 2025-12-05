// components/GameHeroCard.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { GameConfig } from "../lib/games";
import { InteractiveRating } from "./InteractiveRating";

type GameHeroCardProps = {
  game: GameConfig;
};

export function GameHeroCard({ game }: GameHeroCardProps) {
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  // 分享到 X，并复制链接到剪贴板（不再弹出系统短信/邮件）
  const handleShare = async () => {
    try {
      const url = window.location.href;
      const encodedUrl = encodeURIComponent(url);
      const text = encodeURIComponent(
        `Play ${game.name} on Bad Time Simulator!`
      );

      // 打开 X（Twitter）分享窗口
      const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`;
      window.open(shareUrl, "_blank", "noopener,noreferrer");

      // 顺便复制链接到剪贴板
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // 修复全屏：没玩时全屏卡片，玩的时候优先全屏 iframe
  const handleFullscreen = () => {
    const target = playing ? iframeRef.current : containerRef.current;
    if (!target) return;

    if (!document.fullscreenElement) {
      (target as any).requestFullscreen?.().catch(console.error);
    } else {
      document.exitFullscreen?.().catch(console.error);
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#10236b]/80 rounded-[32px] border border-bts-border/80 shadow-bts-soft overflow-hidden"
    >
      {/* 高度：沿用 V1.2 ~ V1.4 设定 */}
      <div className="relative w-full min-h-[420px] md:min-h-[560px] lg:min-h-[640px] xl:min-h-[700px]">
        {/* 背景 / 游戏区域 */}
        {playing ? (
          <iframe
            ref={iframeRef}
            src={game.gameUrl}
            title={`Bad Time Simulator – ${game.name}`}
            className="absolute inset-0 w-full h-full border-0"
            allow="fullscreen; autoplay"
            allowFullScreen
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

            {/* 居中内容：圆圈 + 标题 + Play 按钮 */}
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
              <div className="flex flex-col items-center">
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
            </div>
          </>
        )}

        {/* 底部评分条 + 右侧按钮：始终可点击（z-index 提高） */}
        <div className="absolute left-0 right-0 bottom-0 z-20 h-12 md:h-14 bg-gradient-to-t from-[#010313]/98 via-[#010313]/85 to-transparent flex items-center">
          {/* 评分 */}
          <div className="flex items-center gap-2 px-6">
            <InteractiveRating
              gameId={game.id}
              initialRating={game.rating}
              initialCount={game.ratingCount}
            />
          </div>

          {/* 右下角按钮：紫色分享 + 蓝色全屏（风格接近你截图） */}
          <div className="ml-auto flex items-center gap-2 pr-4 md:pr-5">
            {/* 分享按钮 */}
            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-2xl bg-[#5b4cfb] border border-white/10 flex items-center justify-center text-slate-50 hover:bg-[#6b5cff] transition"
              title="Share"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <circle
                  cx="7"
                  cy="12"
                  r="1.7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="17"
                  cy="7"
                  r="1.7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle
                  cx="17"
                  cy="17"
                  r="1.7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M8.5 11.3 15.5 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 12.7 15.5 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* 全屏按钮 */}
            <button
              onClick={handleFullscreen}
              className="w-9 h-9 rounded-2xl bg-[#0091ff] border border-white/10 flex items-center justify-center text-slate-50 hover:bg-[#0aa0ff] transition"
              title="Fullscreen"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  d="M7 5H5v4M5 7h4M17 5h2v4M19 7h-4M7 19H5v-4M5 17h4M17 19h2v-4M19 17h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
