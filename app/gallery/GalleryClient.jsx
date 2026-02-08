"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryClient({ data }) {
  const [active, setActive] = useState(data?.[0]?.key ?? "");
  const [lightbox, setLightbox] = useState(null);

  const current = useMemo(() => data.find((c) => c.key === active), [data, active]);
  const imgs = current?.images ?? [];

  // ESC + frecce
  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v ? { ...v, idx: Math.max(0, v.idx - 1) } : v));
      if (e.key === "ArrowRight")
        setLightbox((v) =>
          v ? { ...v, idx: Math.min(v.imgs.length - 1, v.idx + 1) } : v
        );
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      {/* Tabs sticky */}
      <div className="pn-gallery-tabsWrap">
        <div className="pn-container">
          <div className="pn-gallery-tabs" role="tablist" aria-label="Categorie gallery">
            {data.map((c) => (
              <button
                key={c.key}
                className={"pn-gallery-tab" + (c.key === active ? " is-active" : "")}
                onClick={() => setActive(c.key)}
                role="tab"
                aria-selected={c.key === active}
                type="button"
              >
                {c.label}
                <span className="pn-gallery-count">{c.images.length}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="pn-container pn-gallery-body" aria-label="Immagini gallery">
        {imgs.length === 0 ? (
          <div className="pn-gallery-empty">
            Nessuna immagine in questa categoria. Controlla:
            <code> public/gallery/{active}</code>
          </div>
        ) : (
          <div className="pn-gallery-masonry">
            {imgs.map((src, i) => (
              <button
                key={src + i}
                className="pn-gallery-item"
                onClick={() => setLightbox({ imgs, idx: i })}
                type="button"
                aria-label={`Apri immagine ${i + 1}`}
              >
                <Image
                  src={src}
                  alt=""
                  width={900}
                  height={900}
                  className="pn-gallery-img"
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <div className="pn-gallery-itemShade" aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="pn-lightbox" role="dialog" aria-modal="true">
          <button
            className="pn-lightbox-backdrop"
            onClick={() => setLightbox(null)}
            aria-label="Chiudi"
          />

          <div className="pn-lightbox-panel">
            <button className="pn-lightbox-close" onClick={() => setLightbox(null)} aria-label="Chiudi">
              <X size={18} />
            </button>

            <button
              className="pn-lightbox-nav pn-lightbox-nav--left"
              onClick={() => setLightbox((v) => ({ ...v, idx: Math.max(0, v.idx - 1) }))}
              disabled={lightbox.idx === 0}
              aria-label="Precedente"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="pn-lightbox-imgWrap">
              <Image
                src={lightbox.imgs[lightbox.idx]}
                alt=""
                fill
                className="pn-lightbox-img"
                sizes="100vw"
                priority
              />
            </div>

            <button
              className="pn-lightbox-nav pn-lightbox-nav--right"
              onClick={() =>
                setLightbox((v) => ({ ...v, idx: Math.min(v.imgs.length - 1, v.idx + 1) }))
              }
              disabled={lightbox.idx === lightbox.imgs.length - 1}
              aria-label="Successiva"
            >
              <ChevronRight size={20} />
            </button>

            <div className="pn-lightbox-footer">
              {lightbox.idx + 1} / {lightbox.imgs.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
