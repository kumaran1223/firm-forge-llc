export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-8 bg-gold" />
      <span className="text-xs tracking-[0.32em] uppercase text-gold font-medium">{children}</span>
      <span className="h-px w-8 bg-gold" />
    </div>
  );
}
