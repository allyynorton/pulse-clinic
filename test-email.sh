#!/bin/bash
# Test SendGrid email endpoint
# Replace YOUR_DOMAIN with your actual production domain

# Example domains:
# - pulse-clinic.vercel.app
# - pulsewholehealth.com
# - www.pulsewholehealth.com

curl -X POST https://YOUR_DOMAIN/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email": "your-email@example.com"}'






