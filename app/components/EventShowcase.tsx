"use client";

import { useMemo, useState } from "react";
import EventCard from "./EventCard";
import EventModal from "./EventModal";
import { EVENT_CATEGORIES, type EventCategory } from "../data/events";

export default function EventShowcase() {
  const items = useMemo(() => EVENT_CATEGORIES, []);
  const [active, setActive] = useState<EventCategory | null>(null);

  return (
    <section className="pn-showcase" aria-label="Vetrina eventi">
      <div className="pn-container">
        <div className="pn-showcase__head">
          <h2 className="pn-showcase__title">Scegli il tuo evento</h2>
          <p className="pn-showcase__subtitle">
            Ogni bolla è un mondo: clicca e scorri per vedere foto e dettagli.
          </p>
        </div>

        <div className="pn-grid">
          {items.map((item) => (
            <EventCard key={item.id} item={item} onOpen={() => setActive(item)} />
          ))}
        </div>
      </div>

      <EventModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}
