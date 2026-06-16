import { ENVELOPE_SVG } from "@/lib/constants/letter";

export function LetterEnvelope() {
  return (
    <svg
      className="envelope-svg"
      width={ENVELOPE_SVG.width}
      height={ENVELOPE_SVG.height}
      viewBox={ENVELOPE_SVG.viewBox}
      aria-label="편지 봉투"
    >
      {/* 봉투 본체 */}
      <rect
        x="10"
        y="10"
        width="280"
        height="180"
        fill="#f5f0e6"
        stroke="#333"
        strokeWidth="2"
      />

      {/* 봉투 뒷면 플랩 (위쪽 삼각형) */}
      <polygon
        points="10,10 150,110 290,10"
        fill="#ebe3d4"
        stroke="#333"
        strokeWidth="2"
      />

      {/* 좌측 대각선 */}
      <line
        x1="10"
        y1="190"
        x2="150"
        y2="110"
        stroke="#333"
        strokeWidth="1.5"
      />

      {/* 우측 대각선 */}
      <line
        x1="290"
        y1="190"
        x2="150"
        y2="110"
        stroke="#333"
        strokeWidth="1.5"
      />
    </svg>
  );
}
