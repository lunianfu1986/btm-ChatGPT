// components/GameHeroCard.tsx
"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import type { GameConfig } from "../lib/games";
import { InteractiveRating } from "./InteractiveRating";

type GameHeroCardProps = {
  game: GameConfig;
};

export function GameHeroCard({ game }: GameHeroCardProps) {
  const [playing, setPlaying] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [pendingFullscreen, setPendingFullscreen] = useState(false); // 👈 等待自动全屏

  const containerRef = useRef<HTMLDivElement | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  // 当前地址
  const currentUrl = () =>
    typeof window !== "undefined" ? window.location.href : "";

  // 分享面板开关
  const toggleSharePanel = () => {
    setShareOpen((prev) => !prev);
  };

  // 各平台分享
  const openShareWindow = (platform: "x" | "facebook" | "reddit") => {
    const url = encodeURIComponent(currentUrl());
    const text = encodeURIComponent(`Play ${game.name} on Bad Time Simulator!`);

    let shareUrl = "";
    if (platform === "x") {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "reddit") {
      shareUrl = `https://www.reddit.com/submit?url=${url}&title=${text}`;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
    setShareOpen(false);
  };

  const handleCopyLink = async () => {
    try {
      const url = currentUrl();
      if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard");
      }
    } catch (e) {
      console.error(e);
    }
  };

  // 全屏按钮逻辑：
  // 1. 若还没 playing，则先开始游戏，并标记 pendingFullscreen
  // 2. 若已经 playing，直接对 iframe 调用全屏 / 退出全屏
  const handleFullscreen = () => {
    // 还没开始游戏：先开始游戏，再等 iframe 出来自动全屏
    if (!playing) {
      setPlaying(true);
      setPendingFullscreen(true);
      return;
    }

    const iframeEl = iframeRef.current;
    if (!iframeEl) return;

    const anyEl = iframeEl as any;

    if (!document.fullscreenElement) {
      const req =
        anyEl.requestFullscreen ||
        anyEl.webkitRequestFullscreen ||
        anyEl.mozRequestFullScreen ||
        anyEl.msRequestFullscreen;

      if (req) {
        req.call(anyEl).catch((err: unknown) => {
          console.error("Failed to enter fullscreen:", err);
        });
      }
    } else {
      document.exitFullscreen?.().catch((err) => {
        console.error("Failed to exit fullscreen:", err);
      });
    }
  };

  // 当 pendingFullscreen = true 且 playing = true 且 iframe 已挂载时，自动请求一次全屏
  useEffect(() => {
    if (!pendingFullscreen || !playing) return;
    const iframeEl = iframeRef.current as any;
    if (!iframeEl) return;

    if (!document.fullscreenElement) {
      const req =
        iframeEl.requestFullscreen ||
        iframeEl.webkitRequestFullscreen ||
        iframeEl.mozRequestFullScreen ||
        iframeEl.msRequestFullscreen;

      if (req) {
        req.call(iframeEl).catch((err: unknown) => {
          console.error("Auto fullscreen failed:", err);
        });
      }
    }
    setPendingFullscreen(false);
  }, [pendingFullscreen, playing]);

  const cardBaseClass =
    "relative bg-[#10236b]/80 rounded-[32px] border border-bts-border/80 shadow-bts-soft overflow-hidden";
  const innerHeightClass =
    "min-h-[420px] md:min-h-[560px] lg:min-h-[640px] xl:min-h-[700px]";

  return (
    <div ref={containerRef} className={cardBaseClass}>
      {/* 分享浮层：右下角上方的小面板 */}
      {shareOpen && (
        <div className="absolute right-4 bottom-16 z-40">
          <div className="w-64 rounded-2xl bg-[#02061a]/95 border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.6)] p-3 text-xs text-slate-100">
            <p className="text-[11px] text-slate-300 mb-2">
              Share this Sans fight
            </p>
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => openShareWindow("x")}
                className="flex-1 rounded-xl bg-black/80 hover:bg-black text-xs py-2 px-2 flex items-center justify-center gap-1"
              >
                <span className="text-sm">𝕏</span>
                <span>X</span>
              </button>
              <button
                onClick={() => openShareWindow("facebook")}
                className="flex-1 rounded-xl bg-[#1877f2] hover:bg-[#1b82ff] text-xs py-2 px-2 flex items-center justify-center gap-1"
              >
                <span className="text-sm">f</span>
                <span>Facebook</span>
              </button>
            </div>
            <div className="flex gap-2 mb-2">
              <button
                onClick={() => openShareWindow("reddit")}
                className="flex-1 rounded-xl bg-[#ff4500] hover:bg-[#ff5b1f] text-xs py-2 px-2 flex items-center justify-center gap-1"
              >
                <span className="text-sm">👽</span>
                <span>Reddit</span>
              </button>
              <button
                onClick={handleCopyLink}
                className="flex-1 rounded-xl bg-[#111827] hover:bg-[#1f2937] text-xs py-2 px-2 flex items-center justify-center gap-1"
              >
                <span className="text-sm">🔗</span>
                <span>Copy link</span>
              </button>
            </div>
            <button
              className="w-full mt-1 text-[11px] text-slate-400 hover:text-slate-200"
              onClick={() => setShareOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 游戏区域 / 背景 */}
      <div className={`relative w-full ${innerHeightClass}`}>
        {playing ? (
          <iframe
            ref={iframeRef}
            src={game.gameUrl}
            title={`Bad Time Simulator – ${game.name}`}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={game.heroBg}
              alt={`${game.name} background`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1f63]/70 via-[#071443]/82 to-[#02061a]/96" />

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

        {/* 底部评分条 + 右下角按钮 */}
        <div className="absolute left-0 right-0 bottom-0 z-30 h-12 md:h-14 bg-gradient-to-t from-[#010313]/98 via-[#010313]/85 to-transparent flex items-center">
          <div className="flex items-center gap-2 px-6">
            <InteractiveRating
              gameId={game.id}
              initialRating={game.rating}
              initialCount={game.ratingCount}
            />
          </div>

          <div className="ml-auto flex items-center gap-2 pr-4 md:pr-5">
            {/* 分享按钮 */}
            <button
              onClick={toggleSharePanel}
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

            {/* 全屏按钮：现在“随时可点”，未播放会自动播放 + 全屏 */}
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
