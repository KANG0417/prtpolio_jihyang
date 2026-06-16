"use client";

import { LETTER_EMERGE, LETTER_PAGE, getLetterHeights } from "@/lib/constants/letter";

/** 봉투 입구에서 살짝 삐져나온 편지 끝 (대기 상태) */
export function LetterPeek() {
  const { slotTopPercent } = LETTER_EMERGE;
  const { visible, peekY } = getLetterHeights();

  return (
    <div
      className="pointer-events-none absolute left-1/2 z-[15] -translate-x-1/2 overflow-hidden"
      style={{
        top: `calc(${slotTopPercent}% - ${visible}px)`,
        width: LETTER_PAGE.width,
        maxWidth: LETTER_PAGE.maxWidth,
        height: visible,
      }}
    >
      <div
        className="letter-paper w-full rounded-t-[2px] border border-b-0 border-[#d8d2c8]/80"
        style={{
          height: LETTER_PAGE.fullHeightPx,
          transform: `translateY(${peekY}px)`,
        }}
      >
      </div>
    </div>
  );
}
