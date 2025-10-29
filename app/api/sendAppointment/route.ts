import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

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
    } = data;

    // ✅ Send the email
    const emailResponse = await resend.emails.send({
      from: "R|D Notary & Signing <https://rdnotarysigning.com/>", // Use your verified domain
      to: "rdnotaryandsigning@gmail.com", // Your business email
      subject: `New Appointment Request from ${fullName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Type:</strong> ${serviceType}</p>
        <p><strong>Document Type:</strong> ${documentType}</p>
        ${
          otherDocument
            ? `<p><strong>Other Document Details:</strong> ${otherDocument}</p>`
            : ""
        }
        <p><strong>Urgency:</strong> ${urgency}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime}</p>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
        <br/>
        <p>— This email was sent automatically from the NTX Sign & Stamp website.</p>
      `,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error("Error sending appointment email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
