import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL: string; // Where form submissions are sent
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    if (url.pathname === "/api/newsletter" && request.method === "POST") {
      return handleNewsletter(request, env);
    }

    // Everything else: serve static assets
    return env.ASSETS.fetch(request);
  },
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  try {
    const body = await request.json() as {
      name?: string;
      phone?: string;
      email?: string;
      service?: string;
      message?: string;
    };

    const { name, phone, email, service, message } = body;

    if (!name || !email || !message) {
      return json({ error: "Navn, e-post og melding er påkrevd." }, 400);
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const contactEmail = env.CONTACT_EMAIL || "post@vaktmesterconsult.no";

    await resend.emails.send({
      from: "Nettside <noreply@vaktmesterconsult.no>",
      to: [contactEmail],
      replyTo: email,
      subject: `Ny henvendelse fra ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <h2>Ny henvendelse fra nettsiden</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Navn</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(name)}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">E-post</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(email)}</td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(phone)}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Tjeneste</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${esc(service)}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:24px;">Melding</h3>
        <p style="white-space:pre-wrap;background:#f8f8f8;padding:16px;border-radius:8px;">${esc(message)}</p>
      `,
    });

    return json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return json({ error: "Kunne ikke sende melding. Prøv igjen." }, 500);
  }
}

async function handleNewsletter(request: Request, env: Env): Promise<Response> {
  try {
    const body = await request.json() as { email?: string };
    const { email } = body;

    if (!email) {
      return json({ error: "E-post er påkrevd." }, 400);
    }

    const resend = new Resend(env.RESEND_API_KEY);
    const contactEmail = env.CONTACT_EMAIL || "post@vaktmesterconsult.no";

    await resend.emails.send({
      from: "Nettside <noreply@vaktmesterconsult.no>",
      to: [contactEmail],
      subject: `Ny nyhetsbrev-påmelding: ${email}`,
      html: `
        <h2>Ny nyhetsbrev-påmelding</h2>
        <p><strong>E-post:</strong> ${esc(email)}</p>
        <p style="color:#666;font-size:14px;">Denne personen ønsker å motta nyhetsbrev.</p>
      `,
    });

    return json({ ok: true });
  } catch (err) {
    console.error("Newsletter error:", err);
    return json({ error: "Kunne ikke registrere. Prøv igjen." }, 500);
  }
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
