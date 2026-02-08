 // app/chi-siamo/page.tsx
import "./about.css";

export const metadata = {
  title: "Chi siamo | Partyners",
  description:
    "La storia e la visione Partyners: animazione, event planning e regia creativa per eventi su misura.",
};

export default function ChiSiamoPage() {
  return (
    <main className="pn-about">
      {/* HERO */}
      <section className="pn-about-hero" aria-label="Chi siamo - Hero">
        <div
          className="pn-about-hero__bg"
          aria-hidden="true"
          style={{ backgroundImage: `url(/assets/about/about-hero.jpg)` }}
        />
        <div className="pn-about-hero__overlay" aria-hidden="true" />

        <div className="pn-about-hero__inner pn-container">
          <p className="pn-about-hero__kicker">Chi siamo</p>

          <h1 className="pn-about-hero__title">
            Creiamo eventi che parlano.
            <br />
            Di <span>stile</span>. Di <span>persone</span>. Di <span>identità</span>.
          </h1>

          <p className="pn-about-hero__subtitle">
            Partyners è una regia creativa completa: dall’idea al momento in cui
            tutto funziona senza che tu debba pensarci.
          </p>

          <div className="pn-about-hero__ctas">
            <a className="pn-btn pn-btn--primary" href="#storia">
              La nostra storia
            </a>
            <a className="pn-btn pn-btn--ghost" href="#cosa-facciamo">
              Cosa facciamo
            </a>
          </div>
        </div>

        <div className="pn-about-hero__fade" aria-hidden="true" />
      </section>

      {/* STORIA */}
      <section id="storia" className="pn-about-section pn-container">
        <div className="pn-about-grid">
          <div className="pn-about-copy">
            <p className="pn-about-eyebrow">La nostra storia</p>
            <h2 className="pn-about-h2">Da animazione a identità evento.</h2>

            <div className="pn-about-prose">
              <p>
                <strong>Partyners</strong> è un brand di nuova generazione nel
                mondo degli eventi, nato dall’esperienza ventennale di{" "}
                <strong>Teresa Tramite</strong> nel settore dell’animazione e
                dell’intrattenimento, maturata tra villaggi turistici ed eventi
                sul territorio.
              </p>

              <p>
                Nel tempo, il percorso professionale si è evoluto fino ad
                abbracciare l’event planning, con una crescita costante in
                termini di qualità, struttura e visione.
              </p>

              <p>
                Accanto a Teresa, <strong>Antonio Catapano</strong>, partner di
                vita e di progetto, contribuisce allo sviluppo del brand
                attraverso competenze gestionali, organizzative e creative.
              </p>

              <p>
                <strong>Partyners rappresenta oggi una nuova identità</strong>,
                chiara e riconoscibile, che valorizza il passato senza
                rinnegarlo, traducendolo in uno stile contemporaneo ed elegante,
                capace di creare, pianificare e realizzare ogni tipo di evento.
              </p>
            </div>

            <div className="pn-about-badges" aria-label="Punti chiave">
              <span className="pn-about-badge">20+ anni di esperienza</span>
              <span className="pn-about-badge">Regia completa</span>
              <span className="pn-about-badge">Stile contemporaneo</span>
            </div>
          </div>

          <div className="pn-about-media">
            <div className="pn-about-media__stack">
              <div
                className="pn-about-media__img pn-about-media__img--a"
                style={{ backgroundImage: `url(/assets/about/about-1.jpg)` }}
                aria-label="Backstage evento"
              />
              <div
                className="pn-about-media__img pn-about-media__img--b"
                style={{ backgroundImage: `url(/assets/about/about-2.jpg)` }}
                aria-label="Dettagli allestimento"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COSA FACCIAMO */}
      <section id="cosa-facciamo" className="pn-about-band">
        <div className="pn-container pn-about-band__inner">
          <div className="pn-about-band__head">
            <p className="pn-about-eyebrow">Cosa facciamo</p>
            <h2 className="pn-about-h2">Eventi a 360°. Un’unica visione.</h2>
            <p className="pn-about-lead">
              In Partyners ideiamo e realizziamo eventi in ogni loro fase, dal
              concept all’esperienza finale.
            </p>
          </div>

          <div className="pn-about-cards" role="list">
            <div className="pn-about-card" role="listitem">
              <h3>Concept & Progettazione</h3>
              <p>
                Mood, palette, stile, timeline: partiamo dall’identità e
                costruiamo un progetto coerente.
              </p>
            </div>

            <div className="pn-about-card" role="listitem">
              <h3>Intrattenimento & Spettacoli</h3>
              <p>
                Animazione, show, contenuti e ritmo evento: ogni momento ha un
                perché, nulla è “riempitivo”.
              </p>
            </div>

            <div className="pn-about-card" role="listitem">
              <h3>Allestimenti & Scenografia</h3>
              <p>
                Balloon art, decorazioni, scenografie, noleggi: estetica e
                funzionalità lavorano insieme.
              </p>
            </div>

            <div className="pn-about-card" role="listitem">
              <h3>Coordinamento & Regia</h3>
              <p>
                Un unico interlocutore, una sola regia: tu vivi l’evento, noi lo
                facciamo girare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="pn-about-manifesto">
        <div className="pn-container pn-about-manifesto__inner">
          <p className="pn-about-manifesto__kicker">Manifesto</p>

          <h2 className="pn-about-manifesto__title">
            Non seguiamo format.
            <br />
            <span>Creiamo identità.</span>
          </h2>

          <p className="pn-about-manifesto__text">
            Ogni evento prende forma con equilibrio, stile e carattere.
            <br />
            Semplicemente, <strong>Partyners</strong>.
          </p>
        </div>

        <div className="pn-about-manifesto__glow" aria-hidden="true" />
      </section>

      {/* CTA FINALE */}
      <section className="pn-about-cta">
        <div className="pn-container pn-about-cta__inner">
          <div className="pn-about-cta__copy">
            <h2>Hai un’idea?</h2>
            <p>Noi sappiamo come trasformarla in esperienza.</p>
          </div>

          <div className="pn-about-cta__actions">
            <a className="pn-btn pn-btn--primary" href="/eventi">
              Scopri gli eventi
            </a>
            <a className="pn-btn pn-btn--ghost" href="/contatti">
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
