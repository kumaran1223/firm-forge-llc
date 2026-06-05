import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex flex-col leading-none">
      <span
        className={`font-serif text-2xl md:text-[1.6rem] font-black tracking-[0.18em] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        THOMAS
      </span>
      <span
        className={`mt-1 font-serif italic text-[0.7rem] md:text-xs tracking-[0.32em] ${
          light ? "text-gold" : "text-gold"
        }`}
      >
        LAW FIRM PLLC
      </span>
    </Link>
  );
}
