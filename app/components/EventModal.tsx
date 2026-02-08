"use client";

import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { EventCategory } from "../data/events";

export default function EventModal({
  item,
  onClose,
}: {
  item: EventCategory | null;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!item) return;
    setIndex(0);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((v) => Math.max(0, v - 1));
      if (e.key === "ArrowRight")
        setIndex((v) => Math.min((item.gallery?.length ?? 1) - 1, v + 1));
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  const gallery = useMemo(() => item?.gallery ?? [], [item]);
  const canPrev = index > 0;
  const canNext = item ? index < gallery.length - 1 : false;

  if (!item) return null;

  return (
    <div className="pn-modal" role="dialog" aria-modal="true">
      <button className="pn-modal__backdrop" onClick={onClose} aria-label="Chiudi" />

      <div className="pn-modal__panel">
        <button className="pn-modal__close" onClick={onClose} aria-label="Chiudi">
          <X size={18} />
        </button>

        {/* Gallery */}
        <div className="pn-modal__gallery">
          <div
            className="pn-modal__hero"
            style={{ backgroundImage: `url(${gallery[index] || item.cover})` }}
            aria-label={`Immagine ${index + 1} di ${gallery.length}`}
          />

          <div className="pn-modal__nav">
            <button
              className="pn-iconbtn"
              onClick={() => setIndex((v) => Math.max(0, v - 1))}
              disabled={!canPrev}
              aria-label="Foto precedente"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="pn-dots" aria-hidden="true">
              {gallery.slice(0, 8).map((src, i) => (
                <button
                  key={src + i}
                  className={"pn-dot" + (i === index ? " is-active" : "")}
                  onClick={() => setIndex(i)}
                  aria-label={`Vai alla foto ${i + 1}`}
                  type="button"
                />
              ))}
            </div>

            <button
              className="pn-iconbtn"
              onClick={() => setIndex((v) => Math.min(gallery.length - 1, v + 1))}
              disabled={!canNext}
              aria-label="Foto successiva"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pn-modal__info">
          <div className="pn-modal__kicker">Categoria</div>
          <h3 className="pn-modal__title">{item.title}</h3>
          <p className="pn-modal__desc">{item.description}</p>

          <div className="pn-pills">
            {item.highlights.map((h) => (
              <span key={h} className="pn-pill">
                {h}
              </span>
            ))}
          </div>

          <div className="pn-modal__cta">
            <a className="pn-btn pn-btn--primary" href="#contatti">
              Richiedi info
            </a>
            <a className="pn-btn pn-btn--ghost" href="#portfolio">
              Vedi esempi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
