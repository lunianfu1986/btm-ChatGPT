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
