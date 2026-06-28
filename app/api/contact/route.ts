import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Alle Felder sind erforderlich." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Bühlmann Precision <onboarding@resend.dev>",
      to: "suppajeator@gmail.com",
      replyTo: email,
      subject: `Neue Anfrage: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:24px;">
          <h2>Neue Anfrage über die Website</h2>

          <p><strong>Name:</strong><br>${name}</p>

          <p><strong>E-Mail:</strong><br>${email}</p>

          <p><strong>Betreff:</strong><br>${subject}</p>

          <p><strong>Nachricht:</strong></p>

          <p style="white-space:pre-line;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Fehler beim Senden." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { error: "Serverfehler." },
      { status: 500 }
    );
  }
}