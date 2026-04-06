# Testing Emails - Pulse Whole Health

## Overview

Email notifications come from two sources:

1. **Practice Better** — Sends booking confirmations, reminders, and payment receipts to patients automatically. No configuration needed on the website.
2. **Website SMTP** — Sends notifications from the on-site contact/booking form (if configured).

## Testing Practice Better Emails

1. Go to your booking page at `pulsewholehealth.com/consult-booking`
2. Click "Book Now" on any service
3. Complete a test booking with a real email address
4. Check your inbox for the Practice Better confirmation email
5. Check Ally's Practice Better dashboard for the new booking

To configure what emails Practice Better sends:
- Log in to Practice Better
- Go to **Settings > Notification Preferences**
- Review and enable the notifications you want

## Testing Website SMTP Emails (Optional)

If SMTP is configured for the contact form:

### Test Endpoint

```bash
curl -X POST https://your-domain.com/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'
```

### Checking Vercel Logs

1. Go to Vercel Dashboard → Your Project → Logs
2. Look for:
   - `✅ Booking confirmation email sent to...` (success)
   - `❌ Error sending booking confirmation email:` (error)
   - `SMTP not configured, skipping email` (missing config)

## Debugging Checklist

- [ ] Practice Better Payments (Stripe) setup completed
- [ ] Practice Better notification preferences enabled
- [ ] Test booking made and confirmation email received
- [ ] SMTP credentials set in Vercel (if using contact form)
- [ ] `ADMIN_EMAIL` set to receive admin notifications
