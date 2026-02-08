import EventsHero from "../components/EventsHero";
import EventShowcase from "../components/EventShowcase";

export default function EventiPage() {
  return (
    <main>
      <EventsHero />

      {/* anchor per CTA "Scopri le categorie" */}
      <div id="eventi">
        <EventShowcase />
      </div>
    </main>
  );
}
