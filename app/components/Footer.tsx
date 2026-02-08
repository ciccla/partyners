"use client";

import "./footer.css";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRegClock,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pn-footer">
      <div className="pn-footer__inner">
        {/* COLONNA 1 */}
        <div>
          <h2 className="pn-footer__brand">
            Part<span>yners</span>
          </h2>

          <p className="pn-footer__desc">
            Progettiamo eventi e feste su misura, curando ogni dettaglio per
            trasformare ogni occasione in un’esperienza da ricordare.
          </p>

          <div className="pn-footer__social">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* COLONNA 2 */}
        <div>
          <h3>Contatti</h3>
          <ul className="pn-footer__list">
            <li className="pn-footer__li">
              <FaMapMarkerAlt className="pn-footer__icon" />
              <span>
                San Gennaro Vesuviano (NA) — Via Miccarielli n.43/A
              </span>
            </li>

            <li className="pn-footer__li">
              <FaPhoneAlt className="pn-footer__icon" />
              <a className="pn-footer__link" href="tel:+393455253543">
                +39 345 525 3543
              </a>
              <span style={{ opacity: 0.7 }}> (WhatsApp)</span>
            </li>

            <li className="pn-footer__li">
              <FaEnvelope className="pn-footer__icon" />
              <a className="pn-footer__link" href="mailto:info@partyners.it">
                info@partyners.it
              </a>
            </li>

            <li className="pn-footer__li">
              <FaRegClock className="pn-footer__icon" />
              <span>Disponibilità: su appuntamento</span>
            </li>
          </ul>
        </div>

        {/* COLONNA 3 */}
        <div>
          <h3>Informazioni legali</h3>
          <ul className="pn-footer__list">
            <li className="pn-footer__li">
              <FaBuilding className="pn-footer__icon" />
              <strong>Partyners di Teresa Tramite</strong>
            </li>

            <li className="pn-footer__li">
              <span>P. IVA: 08407841215</span>
            </li>

            <li className="pn-footer__li">
              <span>
                Sede legale: San Gennaro Vesuviano (NA), Via Miccarielli n.43/A
              </span>
            </li>

            <li className="pn-footer__legal-links">
              <a className="pn-footer__link" href="/privacy">
                Privacy Policy
              </a>
              <span className="pn-footer__sep">|</span>
              <a className="pn-footer__link" href="/cookie-policy">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pn-footer__bottom">
        © {new Date().getFullYear()} <strong>Partyners di Teresa Tramite</strong>{" "}
        — Tutti i diritti riservati
        <br />
        P. IVA 08407841215 — San Gennaro Vesuviano (NA), Via Miccarielli n.43/A
      </div>
    </footer>
  );
}
