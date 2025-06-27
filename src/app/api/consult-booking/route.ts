import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { service, reason } = await req.json();
    if (!service || !reason) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    const booking = await prisma.consultBooking.create({
      data: { service, reason },
    });
    return NextResponse.json({ success: true, booking });
  } catch {
    return NextResponse.json({ error: 'Failed to create booking.' }, { status: 500 });
  }
} 