import nodemailer from "nodemailer";

// Sends contact-form submissions to the team inbox over SMTP.
// Configure with the SMTP_* and CONTACT_* variables described in .env.example.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 120, email: 200, message: 5000 };

// Basic per-IP throttle: 5 submissions per 10 minutes. Resets when the server restarts.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function error(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return error("Invalid request.", 400);
  }

  // Honeypot: real visitors never see or fill this field.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || name.length > LIMITS.name) return error("Please enter your name.", 400);
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) return error("Please enter a valid email address.", 400);
  if (message.length > LIMITS.message) return error("Your message is too long.", 400);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (rateLimited(ip)) return error("Too many messages. Please try again in a few minutes.", 429);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("Contact form: SMTP_HOST, SMTP_USER, SMTP_PASS and CONTACT_TO must be set.");
    return error("Email isn’t configured yet. Please book a call instead.", 500);
  }

  const port = Number(SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const text = `New enquiry from the ArthaLM website\n\nName: ${name}\nEmail: ${email}\n\n${message || "(no message)"}`;
  const html = `
    <p><strong>New enquiry from the ArthaLM website</strong></p>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br/><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p style="white-space:pre-wrap">${escapeHtml(message || "(no message)")}</p>`;

  try {
    await transporter.sendMail({
      from: CONTACT_FROM || `ArthaLM website <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `${name.replace(/[<>"]/g, "")} <${email}>`,
      subject: `Website enquiry from ${name.replace(/[\r\n]/g, " ")}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact form: failed to send", err);
    return error("We couldn’t send your message. Please try again or book a call.", 502);
  }

  return Response.json({ ok: true });
}
