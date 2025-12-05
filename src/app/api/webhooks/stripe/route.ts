import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

// Disable body parsing for this route - we need raw body for webhook signature verification
export const runtime = 'nodejs';

// Disable body parsing - we need raw body for webhook signature verification
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    console.error('Missing stripe-signature header');
    return NextResponse.json(
      { error: 'Missing stripe-signature header' },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set');
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('Payment succeeded:', {
          id: paymentIntent.id,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          customerEmail: paymentIntent.metadata.customerEmail,
          customerName: paymentIntent.metadata.customerName,
          service: paymentIntent.metadata.service,
          allMetadata: paymentIntent.metadata,
        });
        
        // Send payment confirmation email
        if (paymentIntent.metadata.customerEmail && paymentIntent.metadata.customerName) {
          console.log('Attempting to send payment confirmation email...');
          try {
            const { sendPaymentConfirmationEmail } = await import('@/lib/email');
            console.log('Email function imported, calling sendPaymentConfirmationEmail...');
            await sendPaymentConfirmationEmail({
              customerName: paymentIntent.metadata.customerName,
              customerEmail: paymentIntent.metadata.customerEmail,
              service: paymentIntent.metadata.service,
              amount: paymentIntent.amount,
              paymentIntentId: paymentIntent.id,
            });
            console.log('✅ Payment confirmation email sent successfully');
          } catch (emailError) {
            // Log email errors but don't fail the webhook
            console.error('❌ Error sending payment confirmation email:', emailError);
            console.error('Error details:', {
              message: (emailError as Error).message,
              stack: (emailError as Error).stack,
            });
          }
        } else {
          console.warn('⚠️ Missing metadata for email:', {
            hasEmail: !!paymentIntent.metadata.customerEmail,
            hasName: !!paymentIntent.metadata.customerName,
            metadata: paymentIntent.metadata,
          });
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed:', {
          id: failedPayment.id,
          amount: failedPayment.amount,
          currency: failedPayment.currency,
          last_payment_error: failedPayment.last_payment_error,
        });
        
        // Send payment failure notification email
        if (failedPayment.metadata.customerEmail && failedPayment.metadata.customerName) {
          try {
            const { sendPaymentFailureEmail } = await import('@/lib/email');
            await sendPaymentFailureEmail({
              customerName: failedPayment.metadata.customerName,
              customerEmail: failedPayment.metadata.customerEmail,
              service: failedPayment.metadata.service,
              amount: failedPayment.amount,
              errorMessage: failedPayment.last_payment_error?.message,
            });
          } catch (emailError) {
            // Log email errors but don't fail the webhook
            console.error('Error sending payment failure email:', emailError);
          }
        }
        break;

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

