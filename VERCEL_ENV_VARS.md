# Vercel Environment Variables

Here are all the environment variables you need to configure in your Vercel project:

## Required Environment Variables

### Database
```bash
DATABASE_URL=postgresql://user:password@host:port/database
```
- **Required:** Yes
- **Description:** PostgreSQL database connection string for Prisma
- **Where to get it:** Your database provider (Vercel Postgres, Supabase, etc.)

### Stripe
```bash
STRIPE_SECRET_KEY=sk_live_... or sk_test_...
```
- **Required:** Yes
- **Description:** Stripe secret key for server-side payment operations
- **Where to get it:** Stripe Dashboard → Developers → API Keys

```bash
STRIPE_WEBHOOK_SECRET=whsec_...
```
- **Required:** Yes
- **Description:** Stripe webhook signing secret for verifying webhook requests
- **Where to get it:** Stripe Dashboard → Developers → Webhooks → Your webhook → Signing secret

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_... or pk_test_...
```
- **Required:** Yes
- **Description:** Stripe publishable key for client-side payment forms
- **Where to get it:** Stripe Dashboard → Developers → API Keys
- **Note:** `NEXT_PUBLIC_` prefix makes it available in the browser

### SendGrid (Email)
```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx
```
- **Required:** Yes (for email functionality)
- **Description:** SendGrid API key for sending transactional emails
- **Where to get it:** SendGrid Dashboard → Settings → API Keys → Create API Key

## Optional Environment Variables

### Email Configuration
```bash
SENDGRID_FROM_EMAIL=noreply@pulsewholehealth.com
```
- **Required:** No (defaults to `noreply@pulsewholehealth.com`)
- **Description:** Email address to send emails from
- **Note:** Must be verified in SendGrid

```bash
ADMIN_EMAIL=contact@pulsewholehealth.com
```
- **Required:** No (defaults to `contact@pulsewholehealth.com`)
- **Description:** Email address to receive admin notifications (new bookings)
- **Note:** Can be overridden if you want notifications sent elsewhere

### Site Configuration
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```
- **Required:** No (defaults to `https://pulseclinic.com`)
- **Description:** Base URL of your site (used for metadata)
- **Note:** Should match your actual domain

## How to Add in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - **Name:** The variable name (e.g., `STRIPE_SECRET_KEY`)
   - **Value:** The actual value
   - **Environment:** Select which environments (Production, Preview, Development)
4. Click **Save**

## Environment-Specific Values

You can set different values for different environments:

- **Production:** Use live/production keys
- **Preview:** Use test keys (for pull request previews)
- **Development:** Use test keys (for local development)

## Quick Checklist

- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `STRIPE_SECRET_KEY` - Stripe secret key
- [ ] `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- [ ] `SENDGRID_API_KEY` - SendGrid API key
- [ ] `SENDGRID_FROM_EMAIL` - (Optional) Sender email
- [ ] `ADMIN_EMAIL` - (Optional) Admin notification email
- [ ] `NEXT_PUBLIC_SITE_URL` - (Optional) Site URL

## Security Notes

- ⚠️ Never commit environment variables to git
- ⚠️ Use different keys for production vs. development
- ⚠️ Rotate keys if they're ever exposed
- ⚠️ Use Vercel's environment variable encryption
- ⚠️ Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser

## Testing Your Setup

After adding all variables:

1. Redeploy your application in Vercel
2. Test a booking flow
3. Test a payment flow
4. Check that emails are being sent
5. Verify webhooks are working in Stripe dashboard

