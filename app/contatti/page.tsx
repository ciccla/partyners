"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import "./contatti.css";

import {
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

type FormData = {
  nome: string;
  email: string;
  telefono: string;

  tipoEvento: string;
  data: string;
  ospiti: string;
  location: string;
  budget: string;
  messaggio: string;
};

export default function ContattiPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<null | boolean>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefono: "",
    tipoEvento: "",
    data: "",
    ospiti: "",
    location: "",
    budget: "",
    messaggio: "",
  });

  const progressWidth = useMemo(() => (step === 1 ? "50%" : "100%"), [step]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const isStep1Valid =
    formData.nome.trim().length >= 2 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    /^[0-9]{8,12}$/.test(formData.telefono);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Errore invio email");

      setSuccess(true);
      setShowOverlay(true);

      setStep(1);
      setFormData({
        nome: "",
        email: "",
        telefono: "",
        tipoEvento: "",
        data: "",
        ospiti: "",
        location: "",
        budget: "",
        messaggio: "",
      });
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!showOverlay) return;
    const t = setTimeout(() => setShowOverlay(false), 2500);
    return () => clearTimeout(t);
  }, [showOverlay]);

  return (
    <main className="pn-contact">
      {/* HERO */}
<section className="pn-contact__hero">
  <Image
    src="/assets/hero/hero-bg.png"
    alt="Partyners - Contatti"
    fill
    priority
    className="pn-contact__heroImg"
  />

  {/* overlay + glow */}
  <div className="pn-contact__heroOverlay" aria-hidden="true" />
  <div className="pn-contact__glow pn-contact__glow--a" aria-hidden="true" />
  <div className="pn-contact__glow pn-contact__glow--b" aria-hidden="true" />

  <div className="pn-contact__heroInner pn-container">
    <div className="pn-contact__heroGrid">
      {/* LEFT */}
      <div className="pn-contact__heroLeft">
        <div className="pn-contact__kicker">
          <span className="pn-contact__dot" aria-hidden="true" />
          Risposta rapida • Preventivo su misura
        </div>

        <h1 className="pn-contact__title">
          Trasformiamo la tua idea in un{" "}
          <span className="pn-contact__titleAccent">evento memorabile</span>.
        </h1>

        <p className="pn-contact__subtitle">
          Dicci tipo evento, data, ospiti e budget: ti ricontattiamo con una proposta concreta
          (location, allestimenti, musica, animazione).
        </p>

        <div className="pn-contact__ctaRow">
          <a className="pn-cta pn-cta--primary" href="#contatti">
            Compila il form
            <span className="pn-cta__arrow" aria-hidden="true">→</span>
          </a>

          <a
            className="pn-cta pn-cta--ghost"
            href="https://wa.me/393455253543?text=Ciao%20Partyners!%20Vorrei%20info%20per%20un%20evento."
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

      
      
      </div>

      {/* RIGHT - Card “glass” */}
     <div className="pn-contact__heroRight" aria-hidden="true">
  <div className="pn-processCard">
    <div className="pn-processCard__header">
      <span className="pn-processTag">Il nostro metodo</span>
      <div className="pn-processTitle">In 3 step, senza stress</div>
    </div>

    <div className="pn-processList">
      <div className="pn-processItem">
        <div className="pn-processIndex">1</div>
        <div className="pn-processBody">
          <div className="pn-processH">Ascolto</div>
          <div className="pn-processP">Raccogliamo esigenze, data, ospiti e budget.</div>
        </div>
      </div>

      <div className="pn-processItem">
        <div className="pn-processIndex">2</div>
        <div className="pn-processBody">
          <div className="pn-processH">Proposta</div>
          <div className="pn-processP">Concept + preventivo chiaro, con alternative.</div>
        </div>
      </div>

      <div className="pn-processItem">
        <div className="pn-processIndex">3</div>
        <div className="pn-processBody">
          <div className="pn-processH">Evento</div>
          <div className="pn-processP">Organizzazione completa: allestimenti, musica, timing.</div>
        </div>
      </div>
    </div>

    <div className="pn-processCard__footer">
      <div className="pn-processFootLeft">
        <span className="pn-liveDot" />
        Risposta rapida
      </div>
      <div className="pn-processFootRight">Preventivo su misura</div>
    </div>
  </div>
  </div>
    </div>
  </div>

  <div className="pn-contact__heroFade" aria-hidden="true" />
</section>


      {/* QUICK CONTACTS */}
      <section className="pn-container pn-contact__quick">
        <div className="pn-contact__quickGrid">
          <article className="pn-qcard">
  <h3><FaMapMarkerAlt /> Dove siamo</h3>
  <p>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Via%20Miccarielli%2043%2FA%2C%20San%20Gennaro%20Vesuviano%20NA"
      target="_blank"
      rel="noopener noreferrer"
    >
      San Gennaro Vesuviano (NA) — Via Miccarielli n.43/A
    </a>
    <br />
    <span>Italia</span>
  </p>
</article>


          <article className="pn-qcard pn-qcard--wa">
  <h3><FaWhatsapp /> WhatsApp</h3>
  <p>
    <a
      href="https://wa.me/393455253543?text=Ciao%20Partyners!%20Vorrei%20info%20per%20un%20evento."
      target="_blank"
      rel="noopener noreferrer"
    >
      Scrivici su WhatsApp
    </a>
    <br />
    <span>+39 345 525 3543</span>
  </p>
</article>


          <article className="pn-qcard">
            <h3><FaEnvelope /> Email</h3>
            <p>
              <a href="mailto:info@partyners.it">info@partyners.it</a>
              <br />
              <span>Risposta in giornata</span>
            </p>
          </article>

          <article className="pn-qcard">
  <h3><FaClock /> Disponibilità</h3>
  <p>
    Su appuntamento <br />
    Risposta rapida su WhatsApp
  </p>
</article>

        </div>
      </section>

      {/* FORM */}
      <section className="pn-container pn-contact__formWrap" id="contatti">
        <header className="pn-contact__formHead">
          <h2>Richiedi informazioni</h2>
          <p>Due step rapidi. Zero frizioni. Noi facciamo il resto.</p>
        </header>

        <div className="pn-progress">
          <div className="pn-progress__bar" style={{ width: progressWidth }} />
        </div>

        <form className="pn-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="pn-step">
            <div className="pn-grid2">
    <div className="pn-field">
        <label>Nome e Cognome</label>
        <input
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Es. Mario Rossi"
        required
        pattern="^[A-Za-zÀ-ÿ\\s]{2,}$"
        title="Inserisci solo lettere (min 2 caratteri)"
        />
    </div>

    {/* Telefono a destra (NON full) */}
    <div className="pn-field">
        <label>Telefono</label>
        <div className="pn-phone">
        <span>+39</span>
        <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={(e) => {
            const digits = e.target.value.replace(/[^0-9]/g, "");
            setFormData((p) => ({ ...p, telefono: digits }));
            }}
            placeholder="8–12 cifre"
            required
            pattern="^[0-9]{8,12}$"
            title="Inserisci un numero valido (8-12 cifre)"
        />
        </div>
    </div>

    {/* Email full width (sotto) */}
    <div className="pn-field pn-field--full">
        <label>Email</label>
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="nome@email.com"
        required
        />
    </div>


                
              </div>

              <button
                type="button"
                className={`pn-btnWide ${isStep1Valid ? "is-primary" : "is-disabled"}`}
                onClick={() => setStep(2)}
                disabled={!isStep1Valid}
              >
                Avanti <FaArrowRight />
              </button>

              <p className="pn-note">
                Inviando il form accetti di essere ricontattato per finalità organizzative dell’evento.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="pn-step">
              <div className="pn-grid2">
                <div className="pn-field">
                  <label>Tipo evento</label>
                  <select
                    name="tipoEvento"
                    value={formData.tipoEvento}
                    onChange={handleChange}
                    required
                  >
                    <option value="">— Seleziona —</option>
                    <option value="compleanno">Compleanno</option>
                    <option value="18anni">18 anni</option>
                    <option value="laurea">Laurea</option>
                    <option value="anniversario">Anniversario</option>
                    <option value="azienda">Evento aziendale</option>
                    <option value="babyshower">Baby shower</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                <div className="pn-field">
                  <label>Data</label>
                  <input
                    type="date"
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="pn-field">
                  <label>Numero ospiti</label>
                  <input
                    name="ospiti"
                    value={formData.ospiti}
                    onChange={handleChange}
                    placeholder="Es. 40"
                    required
                  />
                </div>

                <div className="pn-field">
                  <label>Location / Città</label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Es. Napoli / Salerno / ..."
                    required
                  />
                </div>

                <div className="pn-field pn-field--full">
                  <label>Budget indicativo</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="">— Seleziona —</option>
                    <option value="500-1000">€ 500 – 1.000</option>
                    <option value="1000-2500">€ 1.000 – 2.500</option>
                    <option value="2500-5000">€ 2.500 – 5.000</option>
                    <option value="5000+">€ 5.000+</option>
                  </select>
                </div>

                <div className="pn-field pn-field--full">
                  <label>Dettagli / richieste</label>
                  <textarea
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tema, musica, animazione, allestimenti, esigenze particolari…"
                  />
                </div>
              </div>

              <div className="pn-actionsRow">
                <button type="button" className="pn-btnGhost" onClick={() => setStep(1)}>
                  Indietro
                </button>

                <button type="submit" className="pn-btnPrimary" disabled={loading}>
                  {loading ? (
                    <>
                      <FaSpinner className="pn-spin" /> Invio...
                    </>
                  ) : (
                    "Invia richiesta"
                  )}
                </button>
              </div>

              {success === false && (
                <p className="pn-error">❌ Errore durante l’invio. Riprova tra qualche minuto.</p>
              )}
            </div>
          )}
        </form>
      </section>

      {/* MAP (facoltativo: incolla un embed vero) */}
      <section className="pn-contact__map">
        <iframe
          title="Partyners - Mappa"
          src="https://www.google.com/maps?q=Via%20Miccarielli%2043%2FA%2C%20San%20Gennaro%20Vesuviano%20NA&output=embed"
          loading="lazy"
          className="pn-contact__mapFrame"
        />
      </section>

      {/* SUCCESS OVERLAY */}
      {showOverlay && (
        <div className="pn-successOverlay" role="status" aria-live="polite">
          <div className="pn-successCard">
            <div className="pn-ping" aria-hidden="true" />
            <FaCheckCircle className="pn-successIcon" size={64} />
            <p>Richiesta inviata con successo!</p>
          </div>
        </div>
      )}
    </main>
  );
}
