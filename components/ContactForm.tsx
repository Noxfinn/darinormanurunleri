"use client";

import { useState } from "react";

type Props = {
  locale: "tr" | "en" | "de";
};

export default function ContactForm({ locale }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }

    setLoading(false);
  }

  return (
    <div className="bg-white border-2 border-[#d7eadf] rounded-3xl p-7 md:p-10 shadow-sm">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        {locale === "tr"
          ? "Teklif Formu"
          : locale === "de"
            ? "Anfrageformular"
            : "Quote Form"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder={
            locale === "tr"
              ? "Ad Soyad"
              : locale === "de"
                ? "Vor- und Nachname"
                : "Full Name"
          }
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full bg-[#f7f8f5] border-2 border-[#d7eadf] rounded-2xl px-6 py-5 text-[#111111] outline-none focus:border-[#0f7a3b] duration-300"
        />

        <input
          type="email"
          placeholder={
            locale === "de"
              ? "E-Mail-Adresse"
              : "E-Mail"
          }
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full bg-[#f7f8f5] border-2 border-[#d7eadf] rounded-2xl px-6 py-5 text-[#111111] outline-none focus:border-[#0f7a3b] duration-300"
        />

        <input
          type="text"
          placeholder={
            locale === "tr"
              ? "Telefon"
              : locale === "de"
                ? "Telefonnummer"
                : "Phone"
          }
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full bg-[#f7f8f5] border-2 border-[#d7eadf] rounded-2xl px-6 py-5 text-[#111111] outline-none focus:border-[#0f7a3b] duration-300"
        />

        <textarea
          placeholder={
            locale === "tr"
              ? "Mesajınız"
              : locale === "de"
                ? "Ihre Nachricht"
                : "Your Message"
          }
          required
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full bg-[#f7f8f5] border-2 border-[#d7eadf] rounded-2xl px-6 py-5 text-[#111111] outline-none focus:border-[#0f7a3b] duration-300 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0f7a3b] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#095c2b] duration-300 disabled:opacity-60"
        >
          {loading
            ? locale === "tr"
              ? "Gönderiliyor..."
              : locale === "de"
                ? "Wird gesendet..."
                : "Sending..."
            : locale === "tr"
              ? "Teklif Gönder"
              : locale === "de"
                ? "Anfrage senden"
                : "Send Quote"}
        </button>

        {success && (
          <p className="text-[#0f7a3b]">
            {locale === "tr"
              ? "Mesajınız başarıyla gönderildi."
              : locale === "de"
                ? "Ihre Nachricht wurde erfolgreich gesendet."
                : "Your message has been sent successfully."}
          </p>
        )}
      </form>
    </div>
  );
}