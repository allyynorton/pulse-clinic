import { NextResponse } from 'next/server';

// Temporarily disabled to fix build issues
export async function POST() {
  return NextResponse.json(
    { error: 'Payment creation temporarily disabled' },
    { status: 503 }
  );
}


