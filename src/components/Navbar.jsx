import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
            N
          </div>

          <span className="text-xl font-bold tracking-tight">
            Nova<span className="text-blue-500">Tech</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-500 hover:text-white"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="text-slate-300 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenu(false)}
              className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}