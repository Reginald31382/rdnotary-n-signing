import * as React from "react";

interface AppointmentEmailProps {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  documentType: string;
  otherDocument?: string;
  urgency: string;
  notes?: string;
  preferredDate: string;
  preferredTime: string;
}

export function AppointmentEmail({
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
}: AppointmentEmailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.5,
        padding: "20px",
      }}
    >
      <h2>New Appointment Request</h2>
      <p>
        <strong>Name:</strong> {fullName}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Service Type:</strong> {serviceType}
      </p>
      <p>
        <strong>Document Type:</strong> {documentType}
      </p>
      {otherDocument && (
        <p>
          <strong>Other Document Details:</strong> {otherDocument}
        </p>
      )}
      <p>
        <strong>Urgency:</strong> {urgency}
      </p>
      <p>
        <strong>Preferred Date:</strong> {preferredDate}
      </p>
      <p>
        <strong>Preferred Time:</strong> {preferredTime}
      </p>
      {notes && (
        <p>
          <strong>Notes:</strong> {notes}
        </p>
      )}
    </div>
  );
}
