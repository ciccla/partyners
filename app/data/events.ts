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
    title: "Cerimonie",
    tagline: "Momenti di vita, curati in ogni dettaglio.",
    cover: "/assets/events/eventi-privati/cover.jpg",
gallery: [
  "/assets/events/eventi-privati/gallery/1.jpeg",
  "/assets/events/eventi-privati/gallery/2.jpeg",
  "/assets/events/eventi-privati/gallery/3.jpeg",
  "/assets/events/eventi-privati/gallery/4.jpeg",
  "/assets/events/eventi-privati/gallery/5.jpeg",
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
    highlights: ["Matrimonio", "Battesimo", "Comunione", "Cresima", "Laurea", "Anniversari"],
    description:
      "Eventi personali e familiari progettati su misura: stile, organizzazione e coordinamento completo, dal concept al giorno dell’evento.",
  },
  {
    id: "compleanni-party",
    title: "Compleanni & Party",
    tagline: "Dai baby ai 50+: qui si festeggia sul serio.",
    cover: "/assets/events/compleanni-party/cover.jpg",
gallery: [
  "/assets/events/compleanni-party/gallery/1.jpeg",
  "/assets/events/compleanni-party/gallery/2.jpeg",
  "/assets/events/compleanni-party/gallery/3.jpeg",
  "/assets/events/compleanni-party/gallery/4.jpeg",
  "/assets/events/compleanni-party/gallery/5.jpeg",
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
    highlights: ["Musica", "Drink & food", "Allestimento", "feste a tema", "18° Compleanno", "30°/40°/50° Compleanno", ],
    description:
      "Feste di compleanno e party per ogni età: mood, musica, setup e gestione completa. Tu scegli lo stile, noi realizziamo l’esperienza.",
  },
  {
    id: "aziendali-promozionali",
    title: "Eventi Aziendali & Promozionali",
    tagline: "Business, brand e intrattenimento, senza noia.",
    cover: "/assets/events/aziendali-promozionali/cover.jpg",
gallery: [
  "/assets/events/aziendali-promozionali/gallery/1.jpeg",
  "/assets/events/aziendali-promozionali/gallery/2.jpeg",
  "/assets/events/aziendali-promozionali/gallery/3.jpeg",

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
    highlights: ["Eventi Aziendali", "Inaugurazioni", "Audio/Luci", "Eventi Promozionali", "Gadget personalizzati"],
    description:
      "Eventi corporate e promozionali con impatto: organizzazione, regia e atmosfera giusta per coinvolgere clienti, team e ospiti.",
  },
  {
    id: "eventi-bambini",
    title: "Eventi per Bambini",
    tagline: "Non solo compleanni: eventi kids-friendly ovunque.",
    cover: "/assets/events/eventi-bambini/cover.jpg",
gallery: [
  "/assets/events/eventi-bambini/gallery/1.jpeg",
  "/assets/events/eventi-bambini/gallery/2.jpeg",
  "/assets/events/eventi-bambini/gallery/3.jpeg",
  "/assets/events/eventi-bambini/gallery/4.jpeg",
  "/assets/events/eventi-bambini/gallery/5.jpeg",
],

    subcategories: [
      "Feste per Bambini",
      "Eventi Scolastici",
      "Eventi per Famiglie",
      "Eventi a Tema Bambini",
    ],
    highlights: ["Format", "Sicurezza", "Coinvolgimento", "Eventi per Famiglie",],
    description:
      "Eventi dedicati ai più piccoli per scuole, comuni, famiglie e spazi commerciali: format, tema e gestione attività in modo ordinato e divertente.",
  },
  {
    id: "animazione",
    title: "Animazione e Spettacoli",
    tagline: "Performance che trasformano un evento in esperienza.",
    cover: "/assets/events/animazione/cover.jpg",
gallery: [
  "/assets/events/animazione/gallery/1.jpeg",
  "/assets/events/animazione/gallery/2.jpeg",
  "/assets/events/animazione/gallery/3.jpeg",
  "/assets/events/animazione/gallery/4.jpeg",
  "/assets/events/animazione/gallery/5.jpeg",
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
    highlights: ["Mascotte", "Spettacoli", "Interazione", "Animazione","Gonfiabili"],
    description:
      "Scegli l’intrattenimento giusto per il tuo evento: mascotte, spettacoli, gonfiabili, laboratori e animazione calibrata su pubblico e contesto.",
  },
  {
    id: "allestimenti-servizi",
    title: "Allestimenti & Servizi",
    tagline: "Estetica, scenografie e service: l’effetto WOW.",
    cover: "/assets/events/allestimenti-servizi/cover.jpg",
   gallery: [
  "/assets/events/allestimenti-servizi/gallery/1.jpeg",
  "/assets/events/allestimenti-servizi/gallery/2.jpeg",
  "/assets/events/allestimenti-servizi/gallery/3.jpeg",
  "/assets/events/allestimenti-servizi/gallery/4.jpeg",
  "/assets/events/allestimenti-servizi/gallery/5.jpeg",
],

    subcategories: [
      "Allestimenti Tematici",
      "Balloon Art",
      "Scenografie",
      "Noleggio Attrezzature",
      "Service Audio & Luci",
      "Decorazioni",
    ],
    highlights: ["Balloon Art", "Flower Design", "Materiali", "Noleggio Attrezzature", "Service Audio & Luci"],
    description:
      "Allestimenti e servizi anche singoli: balloon art, scenografie, decorazioni e noleggi. Perfetto se vuoi elevare un evento già esistente.",
  },
];
