"use client";

import { IconButton } from "@/components/molecules/IconButton";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="h-9 w-9 rounded-full border border-[#3f3f46] bg-[#18181b]/80 text-[#a1a1aa] backdrop-blur-sm hover:text-[#fafafa]"
    >
      {theme === "dark" ? "☀" : "☾"}
    </IconButton>
  );
}
