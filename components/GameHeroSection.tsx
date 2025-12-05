// components/GameHeroSection.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { games } from "@/lib/games";
import { GameHeroCard } from "./GameHeroCard";

export function GameHeroSection() {
  const [selectedId, setSelectedId] = useState<string>(games[0]?.id);
  const selectedGame =
    games.find((g) => g.id === selectedId) ?? games[0];

  return (
    <div className="flex flex-col gap-4">
      {/* 上面：大卡片 + 游戏 */}
      <GameHeroCard game={selectedGame} />

      {/* 下面：多游戏列表 */}
      <div className="bg-bts-card-soft rounded-3xl p-4 border border-bts-border/80">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold">More Sans Fights</h2>
          <span className="text-[11px] text-slate-400">
            Click a card to switch the game above
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {games.map((game) => (
            <button
              key={game.id}
              type="button"
              onClick={() => setSelectedId(game.id)}
              className={`group flex items-center gap-3 rounded-2xl border px-3 py-2 text-left bg-[#020b27]/80 hover:border-bts-accent/80 hover:bg-[#071234] transition ${
                game.id === selectedGame.id
                  ? "border-bts-accent ring-1 ring-bts-accent/40"
                  : "border-bts-border/80"
              }`}
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-black/70 flex items-center justify-center">
                <Image
                  src={game.avatar}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold">{game.name}</p>
                {game.shortTag && (
                  <p className="text-[11px] text-slate-400 truncate">
                    {game.shortTag}
                  </p>
                )}
              </div>
              <div className="text-[11px] text-slate-300 whitespace-nowrap">
                ★ {game.rating.toFixed(1)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
