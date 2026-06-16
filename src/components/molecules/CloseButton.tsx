import { IconButton } from "@/components/molecules/IconButton";
import { CloseIcon } from "@/components/atoms/icons/CloseIcon";

interface CloseButtonProps {
  onClick: () => void;
  label?: string;
  variant?: "floating" | "inline";
}

export function CloseButton({
  onClick,
  label = "닫고 봉투에 넣기",
  variant = "floating",
}: CloseButtonProps) {
  const className =
    variant === "inline"
      ? "h-8 w-8 shrink-0 rounded-full border border-[#d4cec4] bg-[#faf8f4]/92 text-[#524f4a] shadow-sm hover:scale-105 hover:border-[#6366f1]/40"
      : "absolute -top-3 -right-3 z-50 h-10 w-10 rounded-full border border-[#d4cec4] bg-[#faf8f4] text-[#524f4a] shadow-lg hover:scale-105 hover:border-[#6366f1]/40 md:-top-4 md:-right-4";

  return (
    <IconButton onClick={onClick} aria-label={label} className={className}>
      <CloseIcon />
    </IconButton>
  );
}
