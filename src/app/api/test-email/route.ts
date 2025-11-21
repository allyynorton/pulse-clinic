import { NextRequest, NextResponse } from 'next/server';
import { sendBookingConfirmationEmail } from '@/lib/email';

/**
 * Test endpoint to verify SendGrid email configuration
 * Usage: POST /api/test-email with { email: "test@example.com" }
 */
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Check if SendGrid API key is configured
    const hasApiKey = !!process.env.SENDGRID_API_KEY;
    const apiKeyLength = process.env.SENDGRID_API_KEY?.length || 0;
    const apiKeyPrefix = process.env.SENDGRID_API_KEY?.substring(0, 3) || '';

    console.log('SendGrid Configuration Check:');
    console.log('- API Key Present:', hasApiKey);
    console.log('- API Key Length:', apiKeyLength);
    console.log('- API Key Prefix:', apiKeyPrefix);
    console.log('- From Email:', process.env.SENDGRID_FROM_EMAIL || 'noreply@pulsewholehealth.com');
    console.log('- Admin Email:', process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com');

    if (!hasApiKey) {
      return NextResponse.json(
        {
          error: 'SENDGRID_API_KEY is not configured',
          config: {
            hasApiKey: false,
            fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@pulsewholehealth.com',
            adminEmail: process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com',
          },
        },
        { status: 500 }
      );
    }

    // Send test email
    try {
      await sendBookingConfirmationEmail({
        customerName: 'Test User',
        customerEmail: email,
        service: 'test',
        reason: 'This is a test email to verify SendGrid configuration',
      });

      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully',
        config: {
          hasApiKey: true,
          apiKeyLength,
          apiKeyPrefix: apiKeyPrefix + '...',
          fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@pulsewholehealth.com',
          adminEmail: process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com',
        },
      });
    } catch (emailError: any) {
      console.error('SendGrid Error Details:', {
        message: emailError.message,
        code: emailError.code,
        response: emailError.response?.body,
        statusCode: emailError.response?.statusCode,
        headers: emailError.response?.headers,
      });

      return NextResponse.json(
        {
          error: 'Failed to send test email',
          details: {
            message: emailError.message,
            code: emailError.code,
            statusCode: emailError.response?.statusCode,
            responseBody: emailError.response?.body,
          },
          config: {
            hasApiKey: true,
            apiKeyLength,
            apiKeyPrefix: apiKeyPrefix + '...',
            fromEmail: process.env.SENDGRID_FROM_EMAIL || 'noreply@pulsewholehealth.com',
          },
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Test email endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error.message,
      },
      { status: 500 }
    );
  }
}

