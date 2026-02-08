"use client";

import "./navbar.css";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 👉 scroll handler UNICO (navbar + hero logo)
  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY > 40;
      setIsScrolled(sc);

      // comunica allo HTML che la navbar è "attiva"
      document.documentElement.classList.toggle("pn-nav-scrolled", sc);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // blocca scroll quando menu mobile aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const isHome = pathname === "/";
  const solid = useMemo(() => !isHome || isScrolled, [isHome, isScrolled]);

  return (
    <>
      <header className={`pn-navbar ${solid ? "is-scrolled" : ""}`}>
        <div className="pn-navbar__inner">
          <div className="pn-brand">
            {/* logo navbar SOLO quando scrolled */}
            {solid && (
              <Link href="/" aria-label="Home">
                <img
                  src="/assets/logo/logo-nav.png"
                  className="pn-brand__logo"
                  alt="Partyners"
                />
              </Link>
            )}
          </div>

          <nav className="pn-links" aria-label="Navigazione">
            <Link href="/eventi">Eventi</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/chi-siamo">Chi siamo</Link>
            <Link href="/contatti">Contatti</Link>
          </nav>

          <div className="pn-actions">
            <Link className="pn-cta" href="/contatti">
              Contattaci
            </Link>

            <button
              className="pn-burger"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? "Chiudi menu" : "Apri menu"}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE */}
      <div className={`pn-mobile ${open ? "open" : ""}`}>
        <button
          className="pn-mobile__backdrop"
          onClick={() => setOpen(false)}
        />
        <div className="pn-mobile__panel">
          <Link href="/eventi" onClick={() => setOpen(false)}>Eventi</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/chi-siamo" onClick={() => setOpen(false)}>Chi siamo</Link>
          <Link href="/contatti" onClick={() => setOpen(false)}>Contatti</Link>
          <Link
            className="pn-mobile__cta"
            href="/contatti"
            onClick={() => setOpen(false)}
          >
            Contattaci
          </Link>
        </div>
      </div>
    </>
  );
}
