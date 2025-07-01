import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { service, reason, firstName, lastName, email, phone } = await req.json();
    if (!service || !reason) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const booking = await prisma.consultBooking.create({
      data: { service, reason },
    });

    // Send booking email
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
    console.log("Reached SendGrid send step");
    await sgMail.send(msg);

    return NextResponse.json({ success: true, booking });
  } catch {
    return NextResponse.json({ error: 'Failed to create booking.' }, { status: 500 });
  }
} 