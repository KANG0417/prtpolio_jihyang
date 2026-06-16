"use client";

import { motion } from "framer-motion";

interface TocLinkItemProps {
  index: number;
  label: string;
  isVisited: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export function TocLinkItem({
  index,
  label,
  isVisited,
  disabled,
  onClick,
}: TocLinkItemProps) {
  return (
    <motion.button
      type="button"
      disabled={disabled}
      onClick={onClick}
      data-revealed={isVisited}
      className="envelope-toc-on-paper group flex w-full origin-left items-baseline gap-2 py-1.5 text-left text-sm font-medium text-[#524f4a] disabled:cursor-default"
      whileHover={disabled ? {} : { scale: 1.1 }}
      whileTap={disabled ? {} : { scale: 1.04 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      <span className="font-mono text-[9px] tabular-nums text-[#9a958c]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span>{label}</span>
    </motion.button>
  );
}
