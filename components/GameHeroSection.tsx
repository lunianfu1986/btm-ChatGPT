// components/GameHeroSection.tsx
"use client";

import { useState } from "react";
import { games } from "../lib/games";
import { GameHeroCard } from "./GameHeroCard";

export function GameHeroSection() {
  // 仍然保留 activeGame 的逻辑，方便以后扩展；目前默认第一个游戏
  const [activeGameId] = useState(games[0]?.id ?? "");
  const activeGame =
    games.find((g) => g.id === activeGameId) ?? games[0] ?? null;

  if (!activeGame) {
    return null;
  }

  return (
    <div className="space-y-4">
      <GameHeroCard game={activeGame} />
      {/* 原来的 “More Sans Fights” 区域已移除 */}
    </div>
  );
}
