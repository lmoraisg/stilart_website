import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Ungültige E-Mail-Adresse" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID ?? "2");

  if (!apiKey) {
    console.error("BREVO_API_KEY ist nicht gesetzt");
    return NextResponse.json({ error: "Server-Konfigurationsfehler" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  const data = await res.json().catch(() => ({}));

  console.log("Brevo Status:", res.status);
  console.log("Brevo Response:", JSON.stringify(data, null, 2));

  if (res.status === 201 || res.status === 204) {
    return NextResponse.json({ success: true });
  }

  // Kontakt existiert bereits – trotzdem OK
  if (data?.code === "duplicate_parameter") {
    return NextResponse.json({ success: true });
  }

  console.error("Brevo Fehler:", res.status, data);
  return NextResponse.json({ error: "Anmeldung fehlgeschlagen. Bitte versuche es erneut." }, { status: 500 });
}
