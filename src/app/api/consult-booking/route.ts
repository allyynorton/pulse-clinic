import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  console.log("Consult booking API route invoked");
  try {
    const { service, reason } = await req.json();
    if (!service || !reason) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    console.log("About to create booking in database");
    const booking = await prisma.consultBooking.create({
      data: { service, reason },
    });

    // Email functionality temporarily disabled to fix build issues
    console.log("Booking created successfully - email notifications disabled for now");

    return NextResponse.json({ success: true, booking });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create booking.' }, { status: 500 });
  }
} 