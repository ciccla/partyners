import "./events-hero.css";

export default function EventsHero() {
  return (
    <section className="events-hero" aria-label="Hero pagina Eventi">
      <div className="events-hero__bg" aria-hidden="true" />
      <div className="events-hero__overlay" aria-hidden="true" />

      <div className="events-hero__inner pn-container">
        <p className="events-hero__kicker">Eventi • Party • Experience</p>

        <h1 className="events-hero__title">
          Scegli il tuo evento.
          <br />
          Noi lo rendiamo <span>memorabile</span>.
        </h1>

        <p className="events-hero__subtitle">
          Dall’idea all’ultimo brindisi: location, musica, allestimenti e gestione completa.
        </p>

      <div className="events-hero__ctas">
      <a className="pn-btn pn-btn--primary" href="/gallery">
      Guarda la galleria!
      </a>
      <a className="pn-btn pn-btn--ghost" href="/contatti">
      Richiedi un preventivo
      </a>
      </div>

      </div>
    </section>
  );
}
