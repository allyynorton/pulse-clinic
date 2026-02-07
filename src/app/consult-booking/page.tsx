"use client";
import { useState } from "react";
import PaymentForm from "@/components/PaymentForm";

export default function ConsultBooking() {
  const [step, setStep] = useState(1);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
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
    { id: "intro", name: "Get To Know Each Other Call", duration: "15 min", price: "$10", amount: 10, requiresPayment: true },
    { id: "functional", name: "Integrative Care Consultation", duration: "60 min", price: "$300", amount: 300, requiresPayment: true },
    { id: "preventative", name: "Preventative Care Session", duration: "45 min", price: "$250", amount: 250, requiresPayment: true },
    { id: "followup", name: "Follow-up Consult", duration: "30-45 min", price: "$175", amount: 175, requiresPayment: true }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setBookingData(prev => ({ ...prev, service: serviceId }));
    
    const selectedService = services.find(s => s.id === serviceId);
    
    // For free service, go directly to Calendly
    if (selectedService && !selectedService.requiresPayment) {
      window.open('https://calendly.com/contact-pulsewholehealth/pulse-clinic-consultation', '_blank');
      setStep(5); // Show confirmation
      return;
    }
    
    // For paid services, go directly to payment
    if (selectedService && selectedService.requiresPayment) {
      setStep(4.5); // Go directly to payment step
      return;
    }
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePaymentSuccess = (paymentIntentId: string) => {
    console.log('Payment successful:', paymentIntentId);
    setPaymentCompleted(true);
    // Redirect to Calendly for paid services
    const selectedService = services.find(s => s.id === bookingData.service);
    if (selectedService?.requiresPayment) {
      // For paid services, redirect to Calendly after payment
      window.open('https://calendly.com/contact-pulsewholehealth/pulse-clinic-consultation', '_blank');
    }
    setStep(5); // Show confirmation
  };

  const handlePaymentError = (error: string) => {
    alert(`Payment failed: ${error}`);
  };

  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    
    const selectedService = services.find(s => s.id === bookingData.service);
    
    // For free service, go directly to Calendly
    if (selectedService && !selectedService.requiresPayment) {
      window.open('https://calendly.com/contact-pulsewholehealth/pulse-clinic-consultation', '_blank');
      setStep(5); // Show confirmation
      return;
    }
    
    // For paid services, show payment form
    if (selectedService?.requiresPayment && !paymentCompleted) {
      setStep(4.5); // Show payment step
      return;
    }
    
    // If payment completed, proceed to Calendly
    if (paymentCompleted) {
      window.open('https://calendly.com/contact-pulsewholehealth/pulse-clinic-consultation', '_blank');
      setStep(5); // Show confirmation
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Select Your Service</h2>
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
                <h3 className="text-lg font-semibold text-orange" style={{ color: '#b8752f' }}>{service.name}</h3>
                <p className="text-green mt-1" style={{ color: '#5d6b57' }}>Duration: {service.duration}</p>
                {service.id === "intro" && (
                  <p className="text-sm text-green mt-2" style={{ color: '#5d6b57' }}>
                    The proceeds from this booking are donated 100% to local charities in need at the end of the calendar year.
                  </p>
                )}
              </div>
              <span className="text-xl font-bold text-orange" style={{ color: '#b8752f' }}>{service.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Reason for Your Consult</h2>
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
      <h2 className="text-2xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Intake Form</h2>
      <div className="bg-cream p-6 rounded-lg">
        <p className="text-green text-lg mb-4" style={{ color: '#5d6b57' }}>A comprehensive health and lifestyle history form will be available here soon. Please continue to the next step.</p>
        {/* TODO: Add fillable health and lifestyle history form fields here */}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Your Information</h2>
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

  const renderStep4_5 = () => {
    const selectedService = services.find(s => s.id === bookingData.service);
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-orange mb-6" style={{ color: '#b8752f' }}>Payment Information</h2>
        <div className="bg-cream p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold text-orange mb-2" style={{ color: '#b8752f' }}>{selectedService?.name}</h3>
          <p className="text-green" style={{ color: '#5d6b57' }}>Amount: ${selectedService?.amount}</p>
        </div>
        
        {/* Customer Information Form */}
        <div className="space-y-4 mb-6">
          <h3 className="text-lg font-semibold text-orange" style={{ color: '#b8752f' }}>Your Information</h3>
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
        </div>
        
        {/* Payment Form */}
        {bookingData.firstName && bookingData.lastName && bookingData.email ? (
          <PaymentForm
            service={bookingData.service}
            amount={selectedService?.amount || 0}
            customerEmail={bookingData.email}
            customerName={`${bookingData.firstName} ${bookingData.lastName}`}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={handlePaymentError}
          />
        ) : (
          <div className="text-center text-green" style={{ color: '#5d6b57' }}>
            Please fill in your information above to proceed with payment.
          </div>
        )}
      </div>
    );
  };

  const renderStepContent = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      case 4.5: return renderStep4_5();
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
      <h2 className="text-3xl font-bold text-orange" style={{ color: '#b8752f' }}>Request Received</h2>
      <p className="text-green text-lg" style={{ color: '#5d6b57' }}>
        We have received your request and someone will reach out to you within 48 hours.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f2eb]" style={{ backgroundColor: '#f5f2eb' }}>
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl text-orange mb-4" style={{ color: '#b8752f' }}>Book Your Consult</h1>
            <p className="text-xl text-green max-w-2xl mx-auto" style={{ color: '#5d6b57' }}>
              Ready to take the first step towards feeling better, moving better, and living better? Schedule your consult with Ally below!
            </p>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            {step < 5 ? (
              <>
                {renderStepContent()}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-brown text-brown rounded-lg hover:bg-brown hover:text-white hover:border-brown transition-colors"
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
                      className="ml-auto px-6 py-3 border border-brown text-brown rounded-lg hover:bg-brown hover:text-white hover:border-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  ) : step === 4.5 ? (
                    <div className="ml-auto text-sm text-green" style={{ color: '#5d6b57' }}>
                      Complete payment to continue
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="ml-auto px-6 py-3 bg-brown text-white rounded-lg hover:bg-green transition-colors"
                    >
                      {paymentCompleted ? 'Continue to Calendly' : 'Confirm Consult'}
                    </button>
                  )}
                </div>
              </>
            ) : (
              renderStepContent()
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 