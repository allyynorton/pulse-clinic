import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Test endpoint to verify Gmail SMTP configuration
 * Usage: POST /api/test-smtp with { email: "test@example.com" }
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

    // Check SMTP configuration
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromEmail = process.env.SMTP_FROM_EMAIL || smtpUser || 'noreply@pulsewholehealth.com';

    console.log('SMTP Configuration Check:');
    console.log('- SMTP Host:', smtpHost);
    console.log('- SMTP Port:', smtpPort);
    console.log('- SMTP User:', smtpUser ? `${smtpUser.substring(0, 3)}...` : 'Not set');
    console.log('- SMTP Pass:', smtpPass ? 'Set' : 'Not set');
    console.log('- From Email:', fromEmail);

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error: 'SMTP configuration incomplete',
          config: {
            hasHost: !!smtpHost,
            hasPort: !!smtpPort,
            hasUser: !!smtpUser,
            hasPass: !!smtpPass,
            fromEmail,
          },
        },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === '465', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify connection
    try {
      await transporter.verify();
      console.log('✅ SMTP connection verified');
    } catch (verifyError: unknown) {
      const err = verifyError as { message?: string; code?: string };
      console.error('❌ SMTP verification failed:', err);
      return NextResponse.json(
        {
          error: 'SMTP connection verification failed',
          details: {
            message: err.message || 'Unknown error',
            code: err.code,
          },
          config: {
            host: smtpHost,
            port: smtpPort,
            user: smtpUser ? `${smtpUser.substring(0, 3)}...` : 'Not set',
            fromEmail,
          },
        },
        { status: 500 }
      );
    }

    // Send test email
    try {
      const mailOptions = {
        from: fromEmail,
        to: email,
        subject: 'SMTP Test Email - Pulse Clinic',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>SMTP Test</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #f5f2eb; padding: 30px; border-radius: 10px;">
                <h1 style="color: #b8752f; margin-top: 0;">✅ SMTP Test Successful!</h1>
                
                <p>This is a test email to verify that Gmail SMTP is working correctly with your Pulse Clinic application.</p>
                
                <div style="background-color: white; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  <h2 style="color: #5d6b57; margin-top: 0;">Configuration Details</h2>
                  <p><strong>SMTP Host:</strong> ${smtpHost}</p>
                  <p><strong>SMTP Port:</strong> ${smtpPort}</p>
                  <p><strong>From Email:</strong> ${fromEmail}</p>
                  <p><strong>Sent At:</strong> ${new Date().toLocaleString()}</p>
                </div>
                
                <p>If you received this email, your SMTP configuration is working correctly! 🎉</p>
                
                <p style="margin-top: 30px;">
                  Best regards,<br>
                  <strong>Pulse Clinic System</strong>
                </p>
              </div>
            </body>
          </html>
        `,
        text: `
          SMTP Test Successful!

          This is a test email to verify that Gmail SMTP is working correctly with your Pulse Clinic application.

          Configuration Details:
          SMTP Host: ${smtpHost}
          SMTP Port: ${smtpPort}
          From Email: ${fromEmail}
          Sent At: ${new Date().toLocaleString()}

          If you received this email, your SMTP configuration is working correctly!

          Best regards,
          Pulse Clinic System
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Test email sent successfully:', info.messageId);

      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully via SMTP',
        messageId: info.messageId,
        config: {
          host: smtpHost,
          port: smtpPort,
          user: smtpUser ? `${smtpUser.substring(0, 3)}...` : 'Not set',
          fromEmail,
        },
      });
    } catch (emailError: unknown) {
      const err = emailError as { message?: string; code?: string; responseCode?: string; command?: string };
      console.error('❌ Error sending test email:', {
        message: err.message,
        code: err.code,
        responseCode: err.responseCode,
        command: err.command,
      });

      return NextResponse.json(
        {
          error: 'Failed to send test email',
          details: {
            message: err.message || 'Unknown error',
            code: err.code,
            responseCode: err.responseCode,
            command: err.command,
          },
          config: {
            host: smtpHost,
            port: smtpPort,
            user: smtpUser ? `${smtpUser.substring(0, 3)}...` : 'Not set',
            fromEmail,
          },
        },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const err = error as { message?: string };
    console.error('Test SMTP endpoint error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: err.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}




