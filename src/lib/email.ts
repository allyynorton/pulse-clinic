import nodemailer from 'nodemailer';

// =============================================================================
// Email system for Pulse Whole Health
//
// NOTE: Booking confirmations and payment receipts are now primarily handled by
// Practice Better. These email functions are used by the legacy /api/consult-booking
// route (contact form submissions) and can also be used for custom notifications.
// =============================================================================

export interface BookingConfirmationEmailData {
  customerName: string;
  customerEmail: string;
  service: string;
  reason?: string;
  bookingDate?: string;
}

const FROM_EMAIL = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@pulsewholehealth.com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com';

// Create reusable transporter
function createTransporter() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: smtpPort === '465',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

/**
 * Send booking confirmation email to customer
 */
export async function sendBookingConfirmationEmail(data: BookingConfirmationEmailData): Promise<void> {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn('SMTP not configured, skipping email');
    return;
  }

  const serviceNames: Record<string, string> = {
    intro: 'Get To Know Each Other Call',
    integrative: 'Integrative Care Consultation',
    preventative: 'Initial Preventative Care Consultation',
    followup: 'Follow Up Consultation',
  };

  const serviceName = serviceNames[data.service] || data.service;

  const mailOptions = {
    from: FROM_EMAIL,
    to: data.customerEmail,
    subject: `Booking Confirmation - ${serviceName} | Pulse Whole Health`,
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

            <p>Thank you for reaching out to Pulse Whole Health! We've received your consultation request and are excited to help you on your health journey.</p>

            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #5d6b57; margin-top: 0;">Your Request</h2>
              <p><strong>Service:</strong> ${serviceName}</p>
              ${data.bookingDate ? `<p><strong>Date:</strong> ${data.bookingDate}</p>` : ''}
              ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
            </div>

            <p>You can schedule your appointment directly at <a href="https://pulsewholehealth.com/consult-booking" style="color: #b8752f;">pulsewholehealth.com/consult-booking</a>.</p>

            <p>If you have any questions, please don't hesitate to contact us.</p>

            <p style="margin-top: 30px;">
              Warmly,<br>
              <strong>Ally &amp; The Pulse Whole Health Team</strong>
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
Booking Confirmation

Dear ${data.customerName},

Thank you for reaching out to Pulse Whole Health! We've received your consultation request and are excited to help you on your health journey.

Your Request:
Service: ${serviceName}
${data.bookingDate ? `Date: ${data.bookingDate}` : ''}
${data.reason ? `Reason: ${data.reason}` : ''}

You can schedule your appointment directly at pulsewholehealth.com/consult-booking.

If you have any questions, please don't hesitate to contact us.

Warmly,
Ally & The Pulse Whole Health Team
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Booking confirmation email sent to ${data.customerEmail}`);
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string; responseCode?: string };
    console.error('❌ Error sending booking confirmation email:', {
      message: err.message,
      code: err.code,
      responseCode: err.responseCode,
      to: data.customerEmail,
      from: FROM_EMAIL,
    });
    throw error;
  }
}

/**
 * Send admin notification email for new booking request
 */
export async function sendAdminBookingNotification(data: BookingConfirmationEmailData): Promise<void> {
  const transporter = createTransporter();
  if (!transporter || !ADMIN_EMAIL) {
    console.warn('SMTP not configured or ADMIN_EMAIL not set, skipping admin notification');
    return;
  }

  const serviceNames: Record<string, string> = {
    intro: 'Get To Know Each Other Call',
    integrative: 'Integrative Care Consultation',
    preventative: 'Initial Preventative Care Consultation',
    followup: 'Follow Up Consultation',
  };

  const serviceName = serviceNames[data.service] || data.service;

  const mailOptions = {
    from: FROM_EMAIL,
    to: ADMIN_EMAIL,
    subject: `New Booking Request: ${serviceName} - ${data.customerName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Booking Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f5f2eb; padding: 30px; border-radius: 10px;">
            <h1 style="color: #b8752f; margin-top: 0;">New Booking Request</h1>

            <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h2 style="color: #5d6b57; margin-top: 0;">Details</h2>
              <p><strong>Name:</strong> ${data.customerName}</p>
              <p><strong>Email:</strong> ${data.customerEmail}</p>
              <p><strong>Service:</strong> ${serviceName}</p>
              ${data.bookingDate ? `<p><strong>Date:</strong> ${data.bookingDate}</p>` : ''}
              ${data.reason ? `<p><strong>Reason:</strong> ${data.reason}</p>` : ''}
            </div>

            <p>Please follow up with this patient within 48 hours.</p>
          </div>
        </body>
      </html>
    `,
    text: `
New Booking Request

Name: ${data.customerName}
Email: ${data.customerEmail}
Service: ${serviceName}
${data.bookingDate ? `Date: ${data.bookingDate}` : ''}
${data.reason ? `Reason: ${data.reason}` : ''}

Please follow up with this patient within 48 hours.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Admin booking notification sent to ${ADMIN_EMAIL}`);
  } catch (error: unknown) {
    const err = error as { message?: string; code?: string; responseCode?: string };
    console.error('❌ Error sending admin booking notification:', {
      message: err.message,
      code: err.code,
      responseCode: err.responseCode,
      to: ADMIN_EMAIL,
      from: FROM_EMAIL,
    });
    // Don't throw - admin notifications are not critical
  }
}
