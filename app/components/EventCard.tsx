"use client";

import type { EventCategory } from "../data/events";

export default function EventCard({
  item,
  onOpen,
}: {
  item: EventCategory;
  onOpen: () => void;
}) {
  return (
    <button type="button" className="pn-card" onClick={onOpen}>
      <div
        className="pn-card__media"
        // ✅ supporta il nuovo CSS "portrait safe" (blur bg + img contain)
        style={{ ["--pn-card-img" as any]: `url(${item.cover})` }}
        aria-hidden="true"
      >
        <img className="pn-card__img" src={item.cover} alt="" loading="lazy" />
      </div>

      <div className="pn-card__shade" aria-hidden="true" />

      <div className="pn-card__body">
        <h3 className="pn-card__title">{item.title}</h3>
        <p className="pn-card__tagline">{item.tagline}</p>
        <div className="pn-card__hint">Apri →</div>
      </div>
    </button>
  );
}
