import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";
import "./gallery.css";

export const dynamic = "force-static";

const CATEGORIES = [
  { key: "eventi-privati", label: "Cerimonie" },
  { key: "eventi-bambini", label: "Eventi per Bambini" },
  { key: "compleanni", label: "Compleanni" },
  { key: "animazione", label: "Animazione e Spettacoli" },
  { key: "eventi-aziendali", label: "Eventi Aziendali e Promozionali" },
  { key: "allestimenti-servizi", label: "Allestimenti e Servizi" },
];

function getGalleryData() {
  const baseDir = path.join(process.cwd(), "public", "gallery");

  return CATEGORIES.map((cat) => {
    const dir = path.join(baseDir, cat.key);

    const files = fs.existsSync(dir)
      ? fs.readdirSync(dir).filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      : [];

    return {
      ...cat,
      images: files.map((f) => `/gallery/${cat.key}/${f}`),
    };
  });
}

export default function GalleryPage() {
  const categories = getGalleryData();

  return (
    <main className="pn-gallery">
      {/* HERO */}
      <section className="pn-gallery-hero" aria-label="Hero Gallery">
        <div className="pn-gallery-hero__overlay" aria-hidden="true" />
        <div className="pn-gallery-hero__inner pn-container">
          <p className="pn-gallery-hero__kicker">Gallery</p>
          <h1 className="pn-gallery-hero__title">
            I dettagli fanno la differenza.
            <br />
            <span>Qui</span> li vedi tutti.
          </h1>
          <p className="pn-gallery-hero__subtitle">
            Seleziona una categoria e scorri: ogni scatto è un’idea realizzata.
          </p>
        </div>
      </section>

      {/* CLIENT (tabs + masonry + lightbox) */}
      <GalleryClient data={categories} />
    </main>
  );
}
