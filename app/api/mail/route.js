import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const BRAND = {
  name: "Partyners",
  phone: process.env.BRAND_PHONE || "",
  whatsapp: process.env.BRAND_WHATSAPP || "",
  address: process.env.BRAND_ADDRESS || "",
  colorPrimary: "#cf1d74",
  bgDark: "#07070b",
  cardDark: "#0f1118",
};

function esc(v) {
  if (v === undefined || v === null) return "";
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fieldRow(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:12px 16px;border-bottom:1px solid #232832;color:#cdd6e5;width:42%;font-weight:700;">${label}</td>
      <td style="padding:12px 16px;border-bottom:1px solid #232832;color:#e6edf7;">${esc(value)}</td>
    </tr>
  `;
}

function baseShell({ title, subtitle, content, footerNote }) {
  const gradient =
    "linear-gradient(135deg, rgba(207,29,116,0.22) 0%, rgba(2,6,23,0.82) 60%, rgba(7,7,11,1) 100%)";

  return `
  <!doctype html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>${esc(title)}</title>
  </head>
  <body style="margin:0;background:${BRAND.bgDark};font-family:ui-sans-serif,-apple-system,Segoe UI,Roboto,Helvetica,Arial;color:#e6edf7;">
    <div style="background:${gradient};padding:36px 0;">
      <div style="max-width:680px;margin:0 auto;padding:0 24px;">
        <div style="background:${BRAND.cardDark};border:1px solid #212631;border-radius:18px;padding:28px;box-shadow:0 10px 30px rgba(2,6,23,.5)">
          <h1 style="margin:0 0 8px 0;font-size:28px;line-height:1.25;color:#ffffff;">${esc(title)}</h1>
          <p style="margin:0 0 18px 0;color:#a9b4c4;font-size:15px;line-height:1.6">${esc(subtitle || "")}</p>
          ${content}
          <div style="margin-top:26px;border-top:1px dashed #2a3140;padding-top:18px;color:#93a1b6;font-size:12px;line-height:1.6">
            ${footerNote || ""}
          </div>
        </div>
        <div style="text-align:center;color:#7f8aa3;font-size:12px;margin:18px 0 6px 0">
          © ${new Date().getFullYear()} ${BRAND.name} • ${esc(BRAND.address)} ${
    BRAND.phone ? `• ${esc(BRAND.phone)}` : ""
  }
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
}

function emailToOffice(data) {
  const table = `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border:1px solid #232832;border-radius:14px;overflow:hidden">
      ${fieldRow("Nome", data.nome)}
      ${fieldRow("Cognome", data.cognome)}
      ${fieldRow("Email", data.email)}
      ${fieldRow("Telefono", data.telefono)}
      ${fieldRow("Tipo evento", data.tipo_evento)}
      ${fieldRow("Data evento", data.data_evento)}
      ${fieldRow("Location", data.location)}
      ${fieldRow("Budget", data.budget)}
      ${
        data.messaggio
          ? `<tr><td colspan="2" style="padding:16px;border-top:1px solid #232832;color:#cdd6e5;">
              <div style="font-weight:700;margin-bottom:6px;">Messaggio</div>
              <div style="white-space:pre-wrap;color:#e6edf7;line-height:1.7">${esc(data.messaggio)}</div>
            </td></tr>`
          : ""
      }
    </table>
  `;

  return baseShell({
    title: `Nuova richiesta da ${data.nome || ""} ${data.cognome || ""}`,
    subtitle: "Hai ricevuto una nuova richiesta dal sito Partyners.",
    content: table,
    footerNote:
      "Puoi rispondere direttamente usando l'email del cliente (reply-to impostato).",
  });
}

function emailToCustomer(data) {
  const content = `
    <p style="margin:0 0 14px 0;color:#ffd6ea;font-weight:800">Ciao ${esc(
      data.nome || "👋"
    )},</p>
    <p style="margin:0 0 18px 0;color:#b8c4d9">
      Grazie per aver contattato <strong style="color:#fff">${BRAND.name}</strong>!
      Abbiamo ricevuto la tua richiesta e ti ricontatteremo il prima possibile.
    </p>
  `;

  return baseShell({
    title: `Richiesta ricevuta ✅`,
    subtitle: "Conferma automatica",
    content,
    footerNote: BRAND.phone ? `Se hai urgenza, chiamaci: ${esc(BRAND.phone)}` : "",
  });
}

export async function POST(req) {
  try {
    const from = process.env.MAIL_FROM;
    const to = process.env.MAIL_TO;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing RESEND_API_KEY" }),
        { status: 500 }
      );
    }
    if (!from) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing MAIL_FROM" }),
        { status: 500 }
      );
    }
    if (!to) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing MAIL_TO" }),
        { status: 500 }
      );
    }

    const data = await req.json();

    // honeypot anti-spam
    if (data?.company) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // invio interno
    const adminPromise = resend.emails.send({
      from,
      to: [to],
      subject: `📩 Nuova richiesta — Partyners`,
      html: emailToOffice(data),
      reply_to: data.email ? [data.email] : undefined,
    });

    // conferma cliente
    const customerPromise = data.email
      ? resend.emails.send({
          from,
          to: [data.email],
          subject: `✅ ${data.nome || ""}, richiesta ricevuta — Partyners`,
          html: emailToCustomer(data),
        })
      : Promise.resolve();

    await Promise.all([adminPromise, customerPromise]);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Errore invio email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error?.message || "Mail error" }),
      { status: 500 }
    );
  }
}
