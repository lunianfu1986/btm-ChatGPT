// components/InteractiveRating.tsx
"use client";

import { useEffect, useState } from "react";

type InteractiveRatingProps = {
  gameId: string;
  initialRating: number;
  initialCount: number;
};

export function InteractiveRating({
  gameId,
  initialRating,
  initialCount,
}: InteractiveRatingProps) {
  const [average, setAverage] = useState(initialRating);
  const [count, setCount] = useState(initialCount);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  // 读取本机是否已经评分
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(`bts-rating-${gameId}`);
    if (stored) {
      const num = Number(stored);
      if (!Number.isNaN(num) && num >= 1 && num <= 5) {
        setUserRating(num);
      }
    }
  }, [gameId]);

  const handleRate = (value: number) => {
    setUserRating((prev) => {
      let newAvg = average;
      let newCount = count;

      if (prev == null) {
        // 第一次评分：人数 +1
        newAvg = (average * count + value) / (count + 1);
        newCount = count + 1;
      } else {
        // 修改已评分：在原有基础上替换
        newAvg = (average * count - prev + value) / count;
      }

      newAvg = parseFloat(newAvg.toFixed(1));

      setAverage(newAvg);
      setCount(newCount);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(`bts-rating-${gameId}`, String(value));
      }

      return value;
    });
  };

  const activeValue = hover ?? userRating ?? Math.round(average);

  return (
    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-100">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const active = star <= activeValue;
          return (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              onClick={() => handleRate(star)}
              className="p-0.5"
            >
              <span
                className={active ? "text-[#ffcf44]" : "text-slate-600"}
              >
                ★
              </span>
            </button>
          );
        })}
      </div>
      <span className="font-semibold">{average.toFixed(1)}</span>
      <span className="text-slate-300 text-[11px] md:text-xs">
        ({count})
      </span>
    </div>
  );
}
