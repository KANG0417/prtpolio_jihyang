interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[10px] font-medium tracking-[0.2em] text-[#a1a1aa] uppercase ${className}`}
    >
      {children}
    </p>
  );
}
