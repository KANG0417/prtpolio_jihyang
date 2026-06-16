"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

interface EnvelopeSealProps {
  isHidden: boolean;
}

export function EnvelopeSeal({ isHidden }: EnvelopeSealProps) {
  return (
    <motion.div
      animate={{ scale: isHidden ? 0 : 1, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.32 }}
      className="envelope-wax-seal pointer-events-none absolute top-[15%] left-1/2 z-[30] h-9 w-9 -translate-x-1/2"
    >
      <span className="relative z-10 flex h-full w-full items-center justify-center text-[10px] font-semibold text-[#5c3d28]">
        {personalInfo.name.charAt(0)}
      </span>
    </motion.div>
  );
}
