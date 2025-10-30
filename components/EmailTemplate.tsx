import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  details: {
    phone: string;
    email: string;
    serviceType: string;
    documentType: string;
    otherDocument?: string;
    urgency: string;
    notes?: string;
    preferredDate?: string;
    preferredTime?: string;
  };
}

export function EmailTemplate({ firstName, details }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1>New Appointment Scheduled</h1>
      <p>
        You have a new appointment request from <strong>{firstName}</strong>.
      </p>
      <hr />
      <h3>Details:</h3>
      <ul>
        <li>
          <strong>Phone:</strong> {details.phone}
        </li>
        <li>
          <strong>Email:</strong> {details.email}
        </li>
        <li>
          <strong>Service Type:</strong> {details.serviceType}
        </li>
        <li>
          <strong>Document Type:</strong> {details.documentType}
        </li>
        {details.otherDocument && (
          <li>
            <strong>Other Document:</strong> {details.otherDocument}
          </li>
        )}
        <li>
          <strong>Urgency:</strong> {details.urgency}
        </li>
        {details.notes && (
          <li>
            <strong>Notes:</strong> {details.notes}
          </li>
        )}
        {details.preferredDate && (
          <li>
            <strong>Preferred Date:</strong> {details.preferredDate}
          </li>
        )}
        {details.preferredTime && (
          <li>
            <strong>Preferred Time:</strong> {details.preferredTime}
          </li>
        )}
      </ul>
    </div>
  );
}
