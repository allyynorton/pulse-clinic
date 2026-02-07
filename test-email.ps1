# PowerShell script to test SendGrid email endpoint
# Replace YOUR_DOMAIN with your actual production domain

# Example domains:
# - pulse-clinic.vercel.app
# - pulsewholehealth.com
# - www.pulsewholehealth.com

$body = @{
    email = "your-email@example.com"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://YOUR_DOMAIN/api/test-email" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body






