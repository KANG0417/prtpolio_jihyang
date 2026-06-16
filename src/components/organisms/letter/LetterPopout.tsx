"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LetterPageContent } from "@/components/organisms/letter/LetterPageContent";
import {
  LETTER_EMERGE,
  LETTER_PAGE,
  getLetterHeights,
} from "@/lib/constants/letter";
import type { LetterPageId } from "@/data/portfolio";

interface LetterPopoutProps {
  activePage: LetterPageId | null;
  onClose: () => void;
}

export function LetterPopout({ activePage, onClose }: LetterPopoutProps) {
  const { slotTopPercent, openDelay, duration, times, ease, exit } =
    LETTER_EMERGE;
  const { full, visible, hiddenY, openY } = getLetterHeights();

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
      <AnimatePresence mode="wait">
        {activePage && (
          <motion.div
            key={activePage}
            className="pointer-events-auto relative w-full paper-edge"
            style={{ height: full }}
            initial={{ y: hiddenY, opacity: 0.35 }}
            animate={{ y: [hiddenY, openY - 12, openY], opacity: 1 }}
            exit={{
              y: hiddenY,
              opacity: 0,
              transition: { duration: exit.duration, ease: exit.ease },
            }}
            transition={{
              delay: openDelay,
              duration,
              times,
              ease,
            }}
          >
            <div className="h-full overflow-hidden rounded-t-sm">
              <LetterPageContent pageId={activePage} onClose={onClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
