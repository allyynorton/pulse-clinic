# Email Setup Guide - Pulse Whole Health

## Overview

Pulse Whole Health uses two email systems:

1. **Practice Better** (primary) — Sends booking confirmations, appointment reminders, and payment receipts automatically when patients book through the Practice Better booking links on the website.

2. **SMTP / Nodemailer** (secondary) — Sends notifications from the website's contact/booking form (`/api/consult-booking`). Used for admin alerts and customer acknowledgments when someone fills out the on-site form.

## Practice Better Email Notifications

Practice Better handles all transactional emails for bookings made through the booking page:
- Booking confirmation to patient
- Appointment reminders
- Payment receipts (once Practice Better Payments / Stripe setup is complete)
- Cancellation notifications

These are configured inside Practice Better under **Settings > Notification Preferences**.

## SMTP Configuration (Secondary)

For the on-site contact form, add the following to `.env.local`:

```bash
# SMTP Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password

# Optional overrides
SMTP_FROM_EMAIL=noreply@pulsewholehealth.com
ADMIN_EMAIL=contact@pulsewholehealth.com
```

## Email Functions (`src/lib/email.ts`)

- `sendBookingConfirmationEmail()` — Sends acknowledgment to the customer
- `sendAdminBookingNotification()` — Sends alert to Ally/admin for new form submissions

## Production Checklist

- [ ] Practice Better Payments (Stripe) setup completed
- [ ] Practice Better notification preferences reviewed
- [ ] SMTP credentials configured in production environment (if using contact form)
- [ ] `ADMIN_EMAIL` set to receive booking notifications
- [ ] Test a booking through the website to confirm emails arrive
