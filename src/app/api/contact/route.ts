import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. Bot prevention (Honeypot)
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    }

    // 2. Validate input fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'sunilparajuli2002@gmail.com';
    const emailSubject = subject?.trim() ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] New message from ${name}`;

    // 3. Option A: Resend API (Recommended for Vercel/Next.js)
    if (process.env.RESEND_API_KEY) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Portfolio Inquiry <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: email,
          subject: emailSubject,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #1c2b27; margin-top: 0;">New Message from Portfolio Website</h2>
              <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; margin: 16px 0;">
                <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 0;"><strong>Subject:</strong> ${subject || 'N/A'}</p>
              </div>
              <h3 style="color: #1c2b27; margin-bottom: 8px;">Message Content:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; color: #334155;">${message}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
              <p style="font-size: 12px; color: #94a3b8; margin: 0;">Sent via Sunil Parajuli Personal Portfolio (sunilparajuli.com)</p>
            </div>
          `,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        console.error('Resend API error:', errorData);
        throw new Error('Failed to send email via Resend API');
      }

      return NextResponse.json({ success: true, message: 'Message sent successfully via Resend!' });
    }

    // 4. Option B: Web3Forms API (Free, zero-config token)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject: emailSubject,
          message,
          from_name: `${name} (Portfolio Inquiry)`,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        throw new Error(data.message || 'Failed to send email via Web3Forms');
      }

      return NextResponse.json({ success: true, message: 'Message sent successfully via Web3Forms!' });
    }

    // 5. Fallback: Log inquiry for local development / testing
    console.log('--- NEW CONTACT INQUIRY RECEIVED ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${emailSubject}`);
    console.log(`Message: ${message}`);
    console.log('------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Configure RESEND_API_KEY in Vercel to receive real-time emails directly in your inbox.',
      isSimulated: true,
    });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An unexpected error occurred while processing your message.' },
      { status: 500 }
    );
  }
}
