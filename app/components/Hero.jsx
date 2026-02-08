import "./hero.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-inner">
        <img
          src="/assets/logo/logo-hero.png"
          className="hero-logo"
          alt="Partyners"
          draggable={false}
        />

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-copy">
            <div className="hero-badge">
              <img
                src="/assets/hero/vuoi-festeggiare.png"
                alt="Vuoi festeggiare?"
                draggable={false}
              />
            </div>

            {/* ✅ copy nuovo + una parola in evidenza */}
            <h1 className="hero-title">
              Eventi che <span>restano</span>.
            </h1>

            <p className="hero-subtitle">
              Trasformiamo la tua idea in un’esperienza da vivere, non da organizzare.
              Tu lo immagini. Noi lo realizziamo.
            </p>

            {/* ✅ bottoni che navigano davvero */}
            <div className="hero-cta">
              <Link className="btn-primary" href="/eventi">
                Scopri gli eventi
              </Link>

              <Link className="btn-soft" href="/contatti">
                Parliamone
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img
            src="/assets/logo/logo-icon.png"
            className="hero-mascot"
            alt=""
            aria-hidden="true"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
