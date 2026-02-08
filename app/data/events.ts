// app/data/events.ts
export type EventCategory = {
  id: string;
  title: string;
  tagline: string;
  cover: string;
  gallery: string[];
  subcategories: string[];
  highlights: string[];
  description: string;
};

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: "eventi-privati",
    title: "Eventi Privati",
    tagline: "Momenti di vita, curati in ogni dettaglio.",
    cover: "/assets/events/eventi-privati/cover.jpg",
    gallery: [
      "/assets/events/eventi-privati/1.jpg",
      "/assets/events/eventi-privati/2.jpg",
      "/assets/events/eventi-privati/3.jpg",
      "/assets/events/eventi-privati/4.jpg",
    ],
    subcategories: [
      "Matrimonio",
      "Nascita",
      "Gender Reveal",
      "Baby Shower",
      "Battesimo",
      "Comunione",
      "Cresima",
      "Laurea",
      "Anniversari",
    ],
    highlights: ["Concept", "Location", "Allestimenti", "Regia evento"],
    description:
      "Eventi personali e familiari progettati su misura: stile, organizzazione e coordinamento completo, dal concept al giorno dell’evento.",
  },
  {
    id: "compleanni-party",
    title: "Compleanni & Party",
    tagline: "Dai baby ai 50+: qui si festeggia sul serio.",
    cover: "/assets/events/compleanni-party/cover.jpg",
    gallery: [
      "/assets/events/compleanni-party/1.jpg",
      "/assets/events/compleanni-party/2.jpg",
      "/assets/events/compleanni-party/3.jpg",
      "/assets/events/compleanni-party/4.jpg",
    ],
    subcategories: [
      "Compleanni Baby (1–10)",
      "Compleanni Teen (11–17)",
      "18° Compleanno",
      "30° Compleanno",
      "40° Compleanno",
      "50° Compleanno",
      "Party Adulti",
    ],
    highlights: ["Musica", "Drink & food", "Allestimento", "Timing perfetto"],
    description:
      "Feste di compleanno e party per ogni età: mood, musica, setup e gestione completa. Tu scegli lo stile, noi realizziamo l’esperienza.",
  },
  {
    id: "aziendali-promozionali",
    title: "Eventi Aziendali & Promozionali",
    tagline: "Business, brand e intrattenimento, senza noia.",
    cover: "/assets/events/aziendali-promozionali/cover.jpg",
    gallery: [
      "/assets/events/aziendali-promozionali/1.jpg",
      "/assets/events/aziendali-promozionali/2.jpg",
      "/assets/events/aziendali-promozionali/3.jpg",
      "/assets/events/aziendali-promozionali/4.jpg",
    ],
    subcategories: [
      "Eventi Aziendali",
      "Eventi Corporate",
      "Team Building",
      "Inaugurazioni",
      "Eventi Promozionali",
      "Lancio prodotto",
      "Feste aziendali",
    ],
    highlights: ["Branding", "Regia", "Audio/Luci", "Experience"],
    description:
      "Eventi corporate e promozionali con impatto: organizzazione, regia e atmosfera giusta per coinvolgere clienti, team e ospiti.",
  },
  {
    id: "eventi-bambini",
    title: "Eventi per Bambini",
    tagline: "Non solo compleanni: eventi kids-friendly ovunque.",
    cover: "/assets/events/eventi-bambini/cover.jpg",
    gallery: [
      "/assets/events/eventi-bambini/1.jpg",
      "/assets/events/eventi-bambini/2.jpg",
      "/assets/events/eventi-bambini/3.jpg",
      "/assets/events/eventi-bambini/4.jpg",
    ],
    subcategories: [
      "Feste per Bambini",
      "Eventi Scolastici",
      "Eventi per Famiglie",
      "Eventi a Tema Bambini",
    ],
    highlights: ["Format", "Sicurezza", "Coinvolgimento", "Tema"],
    description:
      "Eventi dedicati ai più piccoli per scuole, comuni, famiglie e spazi commerciali: format, tema e gestione attività in modo ordinato e divertente.",
  },
  {
    id: "animazione",
    title: "Animazione",
    tagline: "Il pezzo che accende davvero la festa.",
    cover: "/assets/events/animazione/cover.jpg",
    gallery: [
      "/assets/events/animazione/1.jpg",
      "/assets/events/animazione/2.jpg",
      "/assets/events/animazione/3.jpg",
      "/assets/events/animazione/4.jpg",
    ],
    subcategories: [
      "Mascotte",
      "Spettacoli",
      "Gonfiabili",
      "Laboratori Creativi",
      "Truccabimbi",
      "Animazione Bambini",
      "Animazione Adulti",
    ],
    highlights: ["Show", "Staff", "Interazione", "Setup rapido"],
    description:
      "Scegli l’intrattenimento giusto per il tuo evento: mascotte, spettacoli, gonfiabili, laboratori e animazione calibrata su pubblico e contesto.",
  },
  {
    id: "allestimenti-servizi",
    title: "Allestimenti & Servizi",
    tagline: "Estetica, scenografie e service: l’effetto WOW.",
    cover: "/assets/events/allestimenti-servizi/cover.jpg",
    gallery: [
      "/assets/events/allestimenti-servizi/1.jpg",
      "/assets/events/allestimenti-servizi/2.jpg",
      "/assets/events/allestimenti-servizi/3.jpg",
      "/assets/events/allestimenti-servizi/4.jpg",
    ],
    subcategories: [
      "Allestimenti Tematici",
      "Balloon Art",
      "Scenografie",
      "Noleggio Attrezzature",
      "Service Audio & Luci",
      "Decorazioni",
    ],
    highlights: ["Design", "Materiali", "Montaggio", "Dettagli premium"],
    description:
      "Allestimenti e servizi anche singoli: balloon art, scenografie, decorazioni e noleggi. Perfetto se vuoi elevare un evento già esistente.",
  },
];
