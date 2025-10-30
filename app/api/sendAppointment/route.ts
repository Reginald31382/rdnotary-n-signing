import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      email,
      serviceType,
      documentType,
      otherDocument,
      urgency,
      notes,
      preferredDate,
      preferredTime,
    } = body;

    // Send the email
    const { data, error } = await resend.emails.send({
      from: "R|D Notary & Signing <rdnotarysigning.com>",
      to: "rdnotaryandsigning@gmail.com",
      subject: `New Appointment Request from ${fullName}`,
      react: EmailTemplate({
        firstName: fullName,
        details: {
          phone,
          email,
          serviceType,
          documentType,
          otherDocument,
          urgency,
          notes,
          preferredDate,
          preferredTime,
        },
      }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
