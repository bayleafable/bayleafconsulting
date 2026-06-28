import { Link } from "@tanstack/react-router";

const services = [
  { to: "/strategic-planning", label: "Strategic Planning" },
  { to: "/program-development", label: "Program Development" },
  { to: "/executive-coaching", label: "Executive Coaching" },
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto max-w-7xl px-6 pt-10 md:px-12">
      <div className="flex items-center justify-between pb-6">
        <Link
          to="/"
          className="font-serif font-bold text-[1.75rem] leading-none tracking-tight text-brand-green"
        >
          Bayleaf<span className="text-brand-gold">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm uppercase tracking-widest text-foreground/80 md:flex">
          <Link to="/" hash="about" className="hover:text-brand-green">
            About
          </Link>
          <div className="group relative">
            <button
              type="button"
              className="cursor-pointer uppercase tracking-widest hover:text-brand-green"
            >
              Services
            </button>
            <div className="invisible absolute left-1/2 top-full z-20 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="min-w-[15rem] border border-foreground/10 bg-background py-2 shadow-lg">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-5 py-2 text-sm normal-case tracking-normal text-foreground hover:bg-brand-sage/40 hover:text-brand-green"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/" hash="leadership" className="hover:text-brand-green">
            Leadership
          </Link>
          <Link to="/" hash="contact" className="hover:text-brand-green">
            Contact
          </Link>
        </nav>
      </div>
      <div className="h-px w-full bg-foreground" />
    </header>
  );
}
