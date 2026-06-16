interface EnvelopeWrinklesProps {
  className?: string;
}

export function EnvelopeWrinkles({ className = "" }: EnvelopeWrinklesProps) {
  return <div className={`envelope-wrinkles ${className}`} aria-hidden />;
}
