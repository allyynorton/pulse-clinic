"use client";
import { useState } from "react";

export default function ConsultBooking() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    isNewPatient: false
  });

  const services = [
    { id: "functional", name: "Integrative Care Consultation", duration: "60 min", price: "$150" },
    { id: "preventative", name: "Preventative Care Session", duration: "45 min", price: "$120" },
    { id: "followup", name: "Follow-up Consult", duration: "30 min", price: "$80" }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setBookingData(prev => ({ ...prev, service: serviceId }));
    setStep(2);
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/consult-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      if (response.ok) {
        setStep(5); // Show confirmation
      } else {
        alert('There was a problem submitting your booking. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('There was a problem submitting your booking. Please try again.');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brown mb-6">Select Your Service</h2>
      <div className="grid gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
              bookingData.service === service.id
                ? "border-brown bg-cream"
                : "border-cream hover:border-brown"
            }`}
            onClick={() => handleServiceSelect(service.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-brown">{service.name}</h3>
                <p className="text-green mt-1">Duration: {service.duration}</p>
              </div>
              <span className="text-xl font-bold text-orange">{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brown mb-6">Reason for Your Consult</h2>
      <div>
        <label className="block text-brown font-semibold mb-2">Please describe your health concerns or what you&apos;d like to address *</label>
        <textarea
          value={bookingData.reason}
          onChange={(e) => handleInputChange("reason", e.target.value)}
          rows={5}
          className="w-full p-3 border border-cream rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent"
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brown mb-6">Intake Form</h2>
      <div className="bg-cream p-6 rounded-lg">
        <p className="text-green text-lg mb-4">A comprehensive health and lifestyle history form will be available here soon. Please continue to the next step.</p>
        {/* TODO: Add fillable health and lifestyle history form fields here */}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brown mb-6">Your Information</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-brown font-semibold mb-2">First Name *</label>
          <input
            type="text"
            value={bookingData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full p-3 border border-cream rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-brown font-semibold mb-2">Last Name *</label>
          <input
            type="text"
            value={bookingData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full p-3 border border-cream rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent"
            required
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-brown font-semibold mb-2">Email *</label>
          <input
            type="email"
            value={bookingData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full p-3 border border-cream rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-brown font-semibold mb-2">Phone Number</label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full p-3 border border-cream rounded-lg focus:ring-2 focus:ring-brown focus:border-transparent"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="newPatient"
          checked={bookingData.isNewPatient}
          onChange={(e) => handleInputChange("isNewPatient", e.target.checked)}
          className="w-4 h-4 text-brown focus:ring-brown border-cream rounded"
        />
        <label htmlFor="newPatient" className="text-brown">I am a new patient</label>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 5: return renderConfirmation();
      default: return renderStep1();
    }
  };

  const renderConfirmation = () => (
    <div className="text-center space-y-6">
      <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto">
        <svg className="w-8 h-8 text-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-brown">Request Received</h2>
      <p className="text-green text-lg">
        We have received your request and someone will reach out to you within 48 hours.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-pacifico text-brown mb-4">Book Your Consult</h1>
            <p className="text-xl text-green max-w-2xl mx-auto">
              Ready to take the first step towards feeling better, moving better, and living better? Schedule your consult with Ally below!
            </p>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            {step < 5 ? (
              <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-brown text-brown rounded-lg hover:bg-brown hover:text-white transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (step === 1 && !bookingData.service) ||
                        (step === 2 && !bookingData.reason)
                      }
                      className="ml-auto px-6 py-3 bg-green text-white rounded-lg hover:bg-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-3 bg-brown text-white rounded-lg hover:bg-green transition-colors"
                    >
                      Confirm Consult
                    </button>
                  )}
                </div>
              </form>
            ) : (
              renderStepContent()
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 