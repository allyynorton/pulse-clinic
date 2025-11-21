import sgMail from '@sendgrid/mail';

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface BookingConfirmationEmailData {
  customerName: string;
  customerEmail: string;
  service: string;
  reason?: string;
  bookingDate?: string;
}

export interface PaymentConfirmationEmailData {
  customerName: string;
  customerEmail: string;
  service: string;
  amount: number;
  paymentIntentId: string;
}

export interface PaymentFailureEmailData {
  customerName: string;
  customerEmail: string;
  service: string;
  amount: number;
  errorMessage?: string;
}

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'noreply@pulsewholehealth.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com';

/**
 * Send booking confirmation email to customer
 */
export async function sendBookingConfirmationEmail(data: BookingConfirmationEmailData): Promise<void> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured, skipping email');
    return;
  }

  const serviceNames: Record<string, string> = {
    intro: 'Get To Know Each Other Call',
    functional: 'Integrative Care Consultation',
    preventative: 'Preventative Care Session',
    followup: 'Follow-up Consult',
  };

  const serviceName = serviceNames[data.service] || data.service;

  const msg = {
    to: data.customerEmail,
    from: FROM_EMAIL,
    subject: `Booking Confirmation - ${serviceName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f5f2eb; padding: 30px; border-radius: 10px;">
            <h1 style="color: #b8752f; margin-top: 0;">Booking Confirmation</h1>
            
            <p>Dear ${data.customerName},</p>
            
            <p>Thank you for booking a consultation with Pulse Clinic! We've received your request and are excited to help you on your health journey.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #5d6b57; margin-top: 0;">Booking Details</h2>
              <p><strong>Service:</strong> ${serviceName}</p>
              ${data.bookingDate ? `<p><strong>Date:</strong> ${data.bookingDate}</p>` : ''}
              ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
            </div>
            
            <p>Our team will review your request and reach out to you within 48 hours to confirm your appointment details.</p>
            
            <p>If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Pulse Clinic Team</strong>
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Booking Confirmation

      Dear ${data.customerName},

      Thank you for booking a consultation with Pulse Clinic! We've received your request and are excited to help you on your health journey.

      Booking Details:
      Service: ${serviceName}
      ${data.bookingDate ? `Date: ${data.bookingDate}` : ''}
      ${data.reason ? `Reason: ${data.reason}` : ''}

      Our team will review your request and reach out to you within 48 hours to confirm your appointment details.

      If you have any questions or need to make changes to your booking, please don't hesitate to contact us.

      Best regards,
      The Pulse Clinic Team
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Booking confirmation email sent to ${data.customerEmail}`);
  } catch (error) {
    console.error('Error sending booking confirmation email:', error);
    throw error;
  }
}

/**
 * Send payment confirmation email to customer
 */
export async function sendPaymentConfirmationEmail(data: PaymentConfirmationEmailData): Promise<void> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured, skipping email');
    return;
  }

  const serviceNames: Record<string, string> = {
    intro: 'Get To Know Each Other Call',
    functional: 'Integrative Care Consultation',
    preventative: 'Preventative Care Session',
    followup: 'Follow-up Consult',
  };

  const serviceName = serviceNames[data.service] || data.service;
  const formattedAmount = (data.amount / 100).toFixed(2);

  const msg = {
    to: data.customerEmail,
    from: FROM_EMAIL,
    subject: `Payment Confirmation - ${serviceName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payment Confirmation</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f5f2eb; padding: 30px; border-radius: 10px;">
            <h1 style="color: #b8752f; margin-top: 0;">Payment Confirmed</h1>
            
            <p>Dear ${data.customerName},</p>
            
            <p>Thank you for your payment! Your transaction has been successfully processed.</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #5d6b57; margin-top: 0;">Payment Details</h2>
              <p><strong>Service:</strong> ${serviceName}</p>
              <p><strong>Amount:</strong> $${formattedAmount}</p>
              <p><strong>Transaction ID:</strong> ${data.paymentIntentId}</p>
            </div>
            
            <p>Your payment receipt has been sent to this email address. Please keep this email for your records.</p>
            
            <p>Next steps: Please schedule your appointment using the Calendly link provided, or our team will reach out to you shortly to confirm your appointment details.</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Pulse Clinic Team</strong>
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Payment Confirmed

      Dear ${data.customerName},

      Thank you for your payment! Your transaction has been successfully processed.

      Payment Details:
      Service: ${serviceName}
      Amount: $${formattedAmount}
      Transaction ID: ${data.paymentIntentId}

      Your payment receipt has been sent to this email address. Please keep this email for your records.

      Next steps: Please schedule your appointment using the Calendly link provided, or our team will reach out to you shortly to confirm your appointment details.

      Best regards,
      The Pulse Clinic Team
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Payment confirmation email sent to ${data.customerEmail}`);
  } catch (error) {
    console.error('Error sending payment confirmation email:', error);
    throw error;
  }
}

/**
 * Send payment failure notification email to customer
 */
export async function sendPaymentFailureEmail(data: PaymentFailureEmailData): Promise<void> {
  if (!process.env.SENDGRID_API_KEY) {
    console.warn('SENDGRID_API_KEY not configured, skipping email');
    return;
  }

  const serviceNames: Record<string, string> = {
    intro: 'Get To Know Each Other Call',
    functional: 'Integrative Care Consultation',
    preventative: 'Preventative Care Session',
    followup: 'Follow-up Consult',
  };

  const serviceName = serviceNames[data.service] || data.service;
  const formattedAmount = (data.amount / 100).toFixed(2);

  const msg = {
    to: data.customerEmail,
    from: FROM_EMAIL,
    subject: `Payment Issue - ${serviceName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payment Issue</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f5f2eb; padding: 30px; border-radius: 10px;">
            <h1 style="color: #b8752f; margin-top: 0;">Payment Issue</h1>
            
            <p>Dear ${data.customerName},</p>
            
            <p>We encountered an issue processing your payment for the following service:</p>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #5d6b57; margin-top: 0;">Booking Details</h2>
              <p><strong>Service:</strong> ${serviceName}</p>
              <p><strong>Amount:</strong> $${formattedAmount}</p>
              ${data.errorMessage ? `<p><strong>Issue:</strong> ${data.errorMessage}</p>` : ''}
            </div>
            
            <p>Please try again or contact us if you continue to experience issues. We're here to help!</p>
            
            <p>If you have any questions, please don't hesitate to reach out to our support team.</p>
            
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The Pulse Clinic Team</strong>
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Payment Issue

      Dear ${data.customerName},

      We encountered an issue processing your payment for the following service:

      Booking Details:
      Service: ${serviceName}
      Amount: $${formattedAmount}
      ${data.errorMessage ? `Issue: ${data.errorMessage}` : ''}

      Please try again or contact us if you continue to experience issues. We're here to help!

      If you have any questions, please don't hesitate to reach out to our support team.

      Best regards,
      The Pulse Clinic Team
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Payment failure email sent to ${data.customerEmail}`);
  } catch (error) {
    console.error('Error sending payment failure email:', error);
    throw error;
  }
}

/**
 * Send admin notification email for new booking
 */
export async function sendAdminBookingNotification(data: BookingConfirmationEmailData): Promise<void> {
  if (!process.env.SENDGRID_API_KEY || !ADMIN_EMAIL) {
    console.warn('SENDGRID_API_KEY or ADMIN_EMAIL not configured, skipping admin notification');
    return;
  }

  const serviceNames: Record<string, string> = {
    intro: 'Get To Know Each Other Call',
    functional: 'Integrative Care Consultation',
    preventative: 'Preventative Care Session',
    followup: 'Follow-up Consult',
  };

  const serviceName = serviceNames[data.service] || data.service;

  const msg = {
    to: ADMIN_EMAIL,
    from: FROM_EMAIL,
    subject: `New Booking: ${serviceName} - ${data.customerName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Booking</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f5f2eb; padding: 30px; border-radius: 10px;">
            <h1 style="color: #b8752f; margin-top: 0;">New Booking Received</h1>
            
            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #5d6b57; margin-top: 0;">Booking Details</h2>
              <p><strong>Customer Name:</strong> ${data.customerName}</p>
              <p><strong>Customer Email:</strong> ${data.customerEmail}</p>
              <p><strong>Service:</strong> ${serviceName}</p>
              ${data.bookingDate ? `<p><strong>Date:</strong> ${data.bookingDate}</p>` : ''}
              ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
            </div>
            
            <p>Please review and follow up with the customer within 48 hours.</p>
          </div>
        </body>
      </html>
    `,
    text: `
      New Booking Received

      Booking Details:
      Customer Name: ${data.customerName}
      Customer Email: ${data.customerEmail}
      Service: ${serviceName}
      ${data.bookingDate ? `Date: ${data.bookingDate}` : ''}
      ${data.reason ? `Reason: ${data.reason}` : ''}

      Please review and follow up with the customer within 48 hours.
    `,
  };

  try {
    await sgMail.send(msg);
    console.log(`Admin booking notification sent to ${ADMIN_EMAIL}`);
  } catch (error) {
    console.error('Error sending admin booking notification:', error);
    // Don't throw - admin notifications are not critical
  }
}

