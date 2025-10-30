"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ScheduleForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    documentType: "",
    otherDocument: "",
    urgency: "",
    notes: "",
    disclaimer: false,
    preferredDate: "",
    preferredTime: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.disclaimer) {
      setStatus("Please agree to the legal disclaimer before submitting.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendAppointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus(
          "Your appointment request has been sent! We'll contact you soon. Redirecting home..."
        );

        setTimeout(() => {
          router.push("/");
        }, 1500);

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          serviceType: "",
          documentType: "",
          otherDocument: "",
          urgency: "",
          notes: "",
          disclaimer: false,
          preferredDate: "",
          preferredTime: "",
        });
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md mt-12">
      <h2 className="text-3xl font-semibold text-center mb-2">
        Schedule Your Appointment
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Fill out the form below and we'll get back to you promptly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 1. Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">1. Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3 mt-4"
          />
        </div>

        {/* 2. Service Type */}
        <div>
          <h3 className="text-lg font-semibold mb-4">2. Service Type</h3>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select service type</option>
            <option value="Remote Online Notarization (RON)">
              Remote Online Notarization (RON)
            </option>
            <option value="In-Person (Mobile)">In-Person (Mobile)</option>
          </select>
        </div>

        {/* 3. Document Type */}
        <div>
          <h3 className="text-lg font-semibold mb-4">3. Document Type</h3>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select document type</option>
            <option value="Real Estate / Loan Signing">
              Real Estate / Loan Signing
            </option>
            <option value="Power of Attorney">Power of Attorney</option>
            <option value="Apostille-Related Documents">
              Apostille-Related Documents
            </option>
            <option value="Affidavit">Affidavit</option>
            <option value="Business Documents">Business Documents</option>
            <option value="Other">Other (please describe below)</option>
          </select>

          {formData.documentType === "Other" && (
            <textarea
              name="otherDocument"
              placeholder="Tell us about your specific needs..."
              value={formData.otherDocument}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-3"
            />
          )}
        </div>

        {/* 4. Urgency */}
        <div>
          <h3 className="text-lg font-semibold mb-4">4. Urgency</h3>
          <select
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select urgency</option>
            <option value="Today / Within 24 hours">
              Today / Within 24 hours
            </option>
            <option value="Within 3 days">Within 3 days</option>
            <option value="Within a week">Within a week</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        {/* 5. Additional Details */}
        <div>
          <h3 className="text-lg font-semibold mb-4">5. Additional Details</h3>
          <textarea
            name="notes"
            placeholder="Notes or special instructions (optional)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* 6. Legal Disclaimer */}
        <div>
          <h3 className="text-lg font-semibold mb-2">6. Legal Disclaimer</h3>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="disclaimer"
              checked={formData.disclaimer}
              onChange={handleChange}
              required
              className="mt-1"
            />
            <span className="text-gray-700">
              I understand that NTX Sign & Stamp cannot provide legal advice and
              can only perform notarizations as allowed by Texas law.
            </span>
          </label>
        </div>

        {/* 7. Preferred Date & Time */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            7. Preferred Appointment Date & Time
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full !bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
        >
          Request Appointment
        </motion.button>

        {status && (
          <p className="text-center text-sm text-gray-700 mt-2">{status}</p>
        )}
      </form>
    </section>
  );
}
