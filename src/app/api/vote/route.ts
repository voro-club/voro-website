import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = "hello@voro.club";

// Validate: non-empty, only English letters and spaces
function isValidCity(value: unknown): value is string {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[a-zA-Z ]+$/.test(trimmed);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const city = body?.city;

    if (!isValidCity(city)) {
      return NextResponse.json(
        { error: "Invalid city" },
        { status: 400 }
      );
    }

    const trimmedCity = city.trim();

    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !port || !user || !pass) {
      console.error("Missing SMTP env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      secure: port === "465",
      auth: { user, pass },
    });

    const now = new Date();
    const dateStr = now.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const text = [
      "Sent via form submission from Voro",
      "",
      `Other: ${trimmedCity}`,
      "",
      dateStr,
      "",
      "-- Voro Team",
      TO_EMAIL,
    ].join("\n");

    await transporter.sendMail({
      from: `"Voro" <${user}>`,
      to: TO_EMAIL,
      subject: "Form Submission - Vote For Your City Form",
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Vote API error:", err);
    return NextResponse.json(
      { error: "Failed to send" },
      { status: 500 }
    );
  }
}
