# Email Setup Guide - SendGrid Integration

This project uses SendGrid for transactional emails. This guide explains how to configure and use the email system.

## Environment Variables

Add the following environment variables to your `.env.local` file (or your deployment environment):

```bash
# SendGrid Configuration
SENDGRID_API_KEY=SG.your_api_key_here

# Email Configuration
SENDGRID_FROM_EMAIL=noreply@pulsewholehealth.com  # Optional: defaults to noreply@pulsewholehealth.com
ADMIN_EMAIL=contact@pulsewholehealth.com          # Optional: defaults to contact@pulsewholehealth.com
```

### Getting Your SendGrid API Key

1. Log in to your SendGrid account at https://app.sendgrid.com
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Give it a name (e.g., "Pulse Clinic Production")
5. Select **Full Access** or **Restricted Access** with Mail Send permissions
6. Copy the API key (you'll only see it once!)

### Verifying Your Sender Email

Before sending emails, you need to verify your sender email address in SendGrid:

1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in your email details
4. Check your email and click the verification link

**Important:** SendGrid requires sender verification. Until verified, emails will only work in test mode.

## Email Types

The system sends the following transactional emails:

### 1. Booking Confirmation
- **Triggered:** When a consultation booking is created
- **Recipient:** Customer
- **Includes:** Service details, booking information, next steps

### 2. Payment Confirmation
- **Triggered:** When a Stripe payment succeeds (via webhook)
- **Recipient:** Customer
- **Includes:** Payment amount, transaction ID, service details

### 3. Payment Failure Notification
- **Triggered:** When a Stripe payment fails (via webhook)
- **Recipient:** Customer
- **Includes:** Service details, error message, next steps

### 4. Admin Booking Notification
- **Triggered:** When a consultation booking is created
- **Recipient:** Admin email (configured via `ADMIN_EMAIL`)
- **Includes:** Customer details, service, reason for consult

## Implementation Details

### Email Service (`src/lib/email.ts`)

The email service provides the following functions:

- `sendBookingConfirmationEmail()` - Sends booking confirmation to customer
- `sendPaymentConfirmationEmail()` - Sends payment confirmation to customer
- `sendPaymentFailureEmail()` - Sends payment failure notification
- `sendAdminBookingNotification()` - Sends admin notification for new bookings

All functions gracefully handle missing API keys (logs warning, doesn't throw errors).

### Integration Points

1. **Booking API** (`src/app/api/consult-booking/route.ts`)
   - Sends booking confirmation email to customer
   - Sends admin notification email

2. **Stripe Webhook** (`src/app/api/webhooks/stripe/route.ts`)
   - Sends payment confirmation on `payment_intent.succeeded`
   - Sends payment failure notification on `payment_intent.payment_failed`

## Testing

### Local Testing

1. Set up your `.env.local` file with the SendGrid API key
2. Make a test booking or payment
3. Check your email inbox (and spam folder)
4. Check the server logs for email sending status

### SendGrid Activity Feed

Monitor email delivery in SendGrid:
1. Go to **Activity** in your SendGrid dashboard
2. View sent emails, bounces, opens, clicks, etc.

## Troubleshooting

### Emails Not Sending

1. **Check API Key:** Verify `SENDGRID_API_KEY` is set correctly
2. **Check Sender Verification:** Ensure your sender email is verified in SendGrid
3. **Check Logs:** Look for error messages in server console
4. **Check SendGrid Dashboard:** View activity feed for delivery status

### Common Issues

- **"Forbidden" Error:** API key doesn't have Mail Send permissions
- **"Unverified Sender" Error:** Sender email not verified in SendGrid
- **Emails in Spam:** Ensure proper SPF/DKIM records (SendGrid handles this for verified senders)

## Email Templates

Email templates are HTML-based and include:
- Responsive design
- Brand colors matching Pulse Clinic theme
- Plain text fallback
- Professional formatting

Templates can be customized in `src/lib/email.ts`.

## Production Checklist

- [ ] SendGrid API key configured in production environment
- [ ] Sender email verified in SendGrid
- [ ] `SENDGRID_FROM_EMAIL` set to verified email
- [ ] `ADMIN_EMAIL` set to receive booking notifications
- [ ] Test emails sent and received successfully
- [ ] Monitor SendGrid activity feed for first few days

## SendGrid Free Tier Limits

SendGrid's free tier includes:
- 100 emails per day
- Unlimited contacts
- Email API access

For production use, consider upgrading to a paid plan for higher limits and better deliverability.

