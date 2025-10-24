import { NextResponse } from 'next/server';

// Temporarily disabled to fix build issues
export async function POST() {
  return NextResponse.json(
    { error: 'Payment confirmation temporarily disabled' },
    { status: 503 }
  );
}


