import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

// Only initialize SendGrid if API key is available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(req: NextRequest) {
  console.log("Consult booking API route invoked");
  try {
    const { service, reason, firstName, lastName, email, phone } = await req.json();
    if (!service || !reason) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    console.log("About to create booking in database");
    const booking = await prisma.consultBooking.create({
      data: { service, reason },
    });

    // Send booking email if SendGrid is configured
    if (process.env.SENDGRID_API_KEY) {
      console.log("About to send email with SendGrid");
      const msg = {
        to: 'contact@pulsewholehealth.com',
        from: 'contact@pulsewholehealth.com', // use verified sender
        subject: 'New Consult Booking',
        text: `New booking for ${service}\nReason: ${reason}\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}`,
        html: `<p><strong>Service:</strong> ${service}</p>
               <p><strong>Reason:</strong> ${reason}</p>
               <p><strong>Name:</strong> ${firstName} ${lastName}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>`
      };
      await sgMail.send(msg);
    } else {
      console.log("SendGrid not configured - skipping email");
    }

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create booking.' }, { status: 500 });
  }
} 