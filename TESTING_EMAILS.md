# Testing SendGrid Emails in Production

This guide explains how to test and debug SendGrid email functionality in production.

## Quick Test Endpoint

We've created a test endpoint to verify SendGrid configuration:

### Using cURL

```bash
curl -X POST https://your-domain.com/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'
```

### Using Browser/Postman

1. Make a POST request to: `https://your-domain.com/api/test-email`
2. Body (JSON):
```json
{
  "email": "your-email@example.com"
}
```

### Expected Response (Success)

```json
{
  "success": true,
  "message": "Test email sent successfully",
  "config": {
    "hasApiKey": true,
    "apiKeyLength": 69,
    "apiKeyPrefix": "SG.",
    "fromEmail": "noreply@pulsewholehealth.com",
    "adminEmail": "contact@pulsewholehealth.com"
  }
}
```

### Expected Response (Error)

```json
{
  "error": "Failed to send test email",
  "details": {
    "message": "The from address does not match a verified Sender Identity.",
    "code": "EINVALID",
    "statusCode": 403,
    "responseBody": {...}
  }
}
```

## Common Issues & Solutions

### 1. "SENDGRID_API_KEY is not configured"

**Problem:** The API key environment variable is not set in Vercel.

**Solution:**
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add `SENDGRID_API_KEY` with your SendGrid API key
3. Redeploy the application

### 2. "The from address does not match a verified Sender Identity"

**Problem:** The sender email (`noreply@pulsewholehealth.com`) is not verified in SendGrid.

**Solution:**
1. Go to SendGrid Dashboard → Settings → Sender Authentication
2. Click "Verify a Single Sender"
3. Enter `noreply@pulsewholehealth.com` and complete verification
4. Check your email and click the verification link

### 3. "Forbidden" (403 Error)

**Problem:** API key doesn't have proper permissions or sender is not verified.

**Solution:**
- Verify the sender email in SendGrid
- Check that the API key has "Mail Send" permissions
- Regenerate the API key if needed

### 4. Emails Not Appearing in Inbox

**Possible Causes:**
- Check spam/junk folder
- Verify sender email is authenticated
- Check SendGrid Activity Feed for delivery status
- Verify recipient email is valid

## Checking Vercel Logs

1. Go to Vercel Dashboard → Your Project → Logs
2. Look for email-related logs:
   - `✅ Booking confirmation email sent to...` (success)
   - `❌ Error sending booking confirmation email:` (error)
   - `SENDGRID_API_KEY not configured, skipping email` (missing config)

## Checking SendGrid Activity Feed

1. Go to SendGrid Dashboard → Activity
2. View all email activity:
   - Sent emails
   - Bounces
   - Blocks
   - Opens
   - Clicks

This shows exactly what SendGrid is doing with your emails.

## Testing Real Flows

### Test Booking Confirmation

1. Go to your booking page
2. Complete a booking with a real email address
3. Check Vercel logs for email sending status
4. Check SendGrid Activity Feed
5. Check the recipient's inbox (and spam folder)

### Test Payment Confirmation

1. Complete a test payment (use Stripe test mode)
2. Check Vercel logs for webhook processing
3. Check SendGrid Activity Feed
4. Check the recipient's inbox

## Debugging Checklist

- [ ] `SENDGRID_API_KEY` is set in Vercel environment variables
- [ ] Sender email (`noreply@pulsewholehealth.com`) is verified in SendGrid
- [ ] API key has "Mail Send" permissions
- [ ] Test endpoint returns success response
- [ ] Vercel logs show email sending attempts
- [ ] SendGrid Activity Feed shows email activity
- [ ] Check spam folder if emails not received

## Environment Variables to Verify

In Vercel Dashboard → Settings → Environment Variables, verify:

```
✅ SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
✅ SENDGRID_FROM_EMAIL=noreply@pulsewholehealth.com (optional)
✅ ADMIN_EMAIL=contact@pulsewholehealth.com (optional)
```

## Next Steps if Still Not Working

1. **Check SendGrid Account Status**
   - Ensure account is active
   - Check for any account restrictions
   - Verify billing/subscription status

2. **Test API Key Directly**
   - Use SendGrid's API testing tool
   - Or use their Node.js example code

3. **Check Domain Authentication**
   - For better deliverability, set up domain authentication
   - Go to Settings → Sender Authentication → Domain Authentication

4. **Review SendGrid Documentation**
   - [SendGrid Node.js Library](https://github.com/sendgrid/sendgrid-nodejs)
   - [SendGrid API Reference](https://docs.sendgrid.com/api-reference)



