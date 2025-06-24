import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <section className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl font-pacifico text-brown mb-6">Contact Pulse Clinic</h1>
        <p className="text-green text-lg mb-8">
          We'd love to hear from you! Please use the information below to get in touch.
        </p>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-brown mb-2">Phone</h2>
          <p className="text-green text-lg">(555) 123-4567</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-brown mb-2">Email</h2>
          <p className="text-green text-lg">pulseclinic@email.com</p>
          <p className="text-sm text-orange mt-2">(This email will be updated once your Gmail is set up.)</p>
        </div>
      </section>
    </div>
  );
} 