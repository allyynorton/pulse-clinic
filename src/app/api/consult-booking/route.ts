import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sendBookingConfirmationEmail, sendAdminBookingNotification } from '@/lib/email';

const prisma = new PrismaClient();

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

    // Send confirmation emails if customer email is provided
    if (email && firstName && lastName) {
      const customerName = `${firstName} ${lastName}`;
      
      try {
        // Send confirmation email to customer
        await sendBookingConfirmationEmail({
          customerName,
          customerEmail: email,
          service,
          reason,
        });

        // Send notification to admin
        await sendAdminBookingNotification({
          customerName,
          customerEmail: email,
          service,
          reason,
        });
      } catch (emailError) {
        // Log email errors but don't fail the booking
        console.error('Error sending booking emails:', emailError);
      }
    }

    console.log("Booking created successfully");

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create booking.' }, { status: 500 });
  }
} 