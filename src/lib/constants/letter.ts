/** SVG 봉투 (viewBox 300×200) */
export const ENVELOPE_SVG = {
  viewBox: "0 0 300 200",
  width: 450,
  height: 300,
} as const;

/** 편지 봉투·스테이지 레이아웃 */
export const LETTER_STAGE = {
  sizePx: 600,
  envelope: {
    widthPx: ENVELOPE_SVG.width,
    heightPx: ENVELOPE_SVG.height,
    flapTipPercent: 47,
  },
} as const;

export const LETTER_PAGE = {
  fullHeightPx: 520,
  visibleRatio: 0.5,
  width: "88%",
  maxWidth: "600px",
} as const;

export const LETTER_EMERGE = {
  flapHeightPercent: 42,
  slotTopPercent: 48,
  peekHeightPx: 30,
  openDelay: 0.14,
  duration: 0.5,
  times: [0, 0.55, 1] as [number, number, number],
  ease: [0.22, 1.08, 0.38, 1] as [number, number, number, number],
  exit: {
    duration: 0.38,
    ease: [0.45, 0, 0.75, 1] as [number, number, number, number],
  },
} as const;

export function getLetterHeights() {
  const full = LETTER_PAGE.fullHeightPx;
  const visible = Math.round(full * LETTER_PAGE.visibleRatio);
  const { peekHeightPx } = LETTER_EMERGE;
  return {
    full,
    visible,
    peek: peekHeightPx,
    hiddenY: visible,
    peekY: visible - peekHeightPx,
    openY: 0,
  };
}
