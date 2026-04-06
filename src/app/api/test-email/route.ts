import { NextRequest, NextResponse } from 'next/server';
import { sendBookingConfirmationEmail } from '@/lib/email';

/**
 * Test endpoint to verify SMTP email configuration
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

    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER);

    console.log('SMTP Configuration Check:');
    console.log('- SMTP Host:', process.env.SMTP_HOST || 'not set');
    console.log('- SMTP Port:', process.env.SMTP_PORT || 'not set');
    console.log('- SMTP User:', process.env.SMTP_USER ? 'set' : 'not set');
    console.log('- From Email:', process.env.SMTP_FROM_EMAIL || 'noreply@pulsewholehealth.com');
    console.log('- Admin Email:', process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com');

    if (!hasSmtp) {
      return NextResponse.json(
        {
          error: 'SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.',
          config: {
            hasSmtp: false,
            fromEmail: process.env.SMTP_FROM_EMAIL || 'noreply@pulsewholehealth.com',
            adminEmail: process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com',
          },
        },
        { status: 500 }
      );
    }

    try {
      await sendBookingConfirmationEmail({
        customerName: 'Test User',
        customerEmail: email,
        service: 'intro',
        reason: 'This is a test email to verify SMTP configuration.',
      });

      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully',
        config: {
          hasSmtp: true,
          smtpHost: process.env.SMTP_HOST,
          fromEmail: process.env.SMTP_FROM_EMAIL || 'noreply@pulsewholehealth.com',
          adminEmail: process.env.ADMIN_EMAIL || 'contact@pulsewholehealth.com',
        },
      });
    } catch (emailError: unknown) {
      const error = emailError as { message?: string; code?: string; responseCode?: string };
      console.error('SMTP Error:', {
        message: error.message,
        code: error.code,
        responseCode: error.responseCode,
      });

      return NextResponse.json(
        {
          error: 'Failed to send test email',
          details: {
            message: error.message || 'Unknown error',
            code: error.code,
          },
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Test email endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: err.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
