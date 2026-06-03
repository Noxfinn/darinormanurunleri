import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Darin Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: "Yeni Teklif Talebi",
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Email could not be sent" },
      { status: 500 }
    );
  }
}