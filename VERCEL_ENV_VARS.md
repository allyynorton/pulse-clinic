# Vercel Environment Variables

Here are all the environment variables you need to configure in your Vercel project.

## Required Environment Variables

### Database
```bash
DATABASE_URL=postgresql://user:password@host:port/database
```
- **Required:** Yes
- **Description:** PostgreSQL database connection string for Prisma
- **Where to get it:** Your database provider (Vercel Postgres, Supabase, etc.)

## Optional Environment Variables

### SMTP (for on-site contact form emails)
```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-password
```
- **Required:** Only if using the on-site contact/booking form
- **Description:** SMTP credentials for sending email notifications

### Email Configuration
```bash
SMTP_FROM_EMAIL=noreply@pulsewholehealth.com
```
- **Required:** No (defaults to `noreply@pulsewholehealth.com`)
- **Description:** Email address to send from

```bash
ADMIN_EMAIL=contact@pulsewholehealth.com
```
- **Required:** No (defaults to `contact@pulsewholehealth.com`)
- **Description:** Email address to receive admin notifications

### Site Configuration
```bash
NEXT_PUBLIC_SITE_URL=https://pulsewholehealth.com
```
- **Required:** No
- **Description:** Base URL of your site (used for metadata)

## Payments & Scheduling

**Payments and scheduling are handled entirely by Practice Better.** No Stripe or Calendly environment variables are needed on the website. Practice Better uses its own Stripe integration — configure that within Practice Better's settings, not in Vercel.

## How to Add in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with name, value, and environment scope
4. Click **Save**

## Quick Checklist

- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `SMTP_HOST` - (Optional) SMTP server host
- [ ] `SMTP_PORT` - (Optional) SMTP server port
- [ ] `SMTP_USER` - (Optional) SMTP username
- [ ] `SMTP_PASS` - (Optional) SMTP password
- [ ] `ADMIN_EMAIL` - (Optional) Admin notification email
- [ ] `NEXT_PUBLIC_SITE_URL` - (Optional) Site URL

## Security Notes

- Never commit environment variables to git
- Use different values for production vs. development
- Rotate keys if they're ever exposed
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser

## Testing Your Setup

After adding all variables:

1. Redeploy your application in Vercel
2. Test the booking flow (Book Now → Practice Better → select time)
3. Check that Practice Better confirmation emails arrive
4. If using the contact form, verify SMTP emails are sent
