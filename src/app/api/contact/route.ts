import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. Bot & Spam Prevention (Honeypot)
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message received.' }, { status: 200 });
    }

    // 2. Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || 'sunilparajuli2002@gmail.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const emailSubject = subject?.trim()
      ? `[Portfolio Inquiry] ${subject}`
      : `[Portfolio Inquiry] New message from ${name}`;

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not found in environment variables. Falling back to development log.');
      return NextResponse.json({
        success: true,
        message: 'Inquiry received. Please configure RESEND_API_KEY in Vercel to receive emails in your inbox.',
      });
    }

    // 3. Dispatch Email via Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [recipientEmail],
        reply_to: email,
        subject: emailSubject,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; color: #1e293b; }
                .card { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
                .header { background-color: #1c2b27; color: #faf8f5; padding: 24px; }
                .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
                .header p { margin: 6px 0 0 0; font-size: 12px; color: #e05a36; text-transform: uppercase; font-family: monospace; letter-spacing: 1px; }
                .content { padding: 24px; }
                .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; background-color: #f8fafc; border-radius: 6px; border: 1px solid #edf2f7; }
                .meta-table td { padding: 12px 16px; border-bottom: 1px solid #edf2f7; font-size: 14px; }
                .meta-table td.label { width: 100px; color: #64748b; font-weight: 600; font-family: monospace; font-size: 12px; text-transform: uppercase; }
                .meta-table td.value { color: #0f172a; font-weight: 500; }
                .message-box { background-color: #faf8f5; border-left: 4px solid #e05a36; padding: 16px 20px; border-radius: 0 6px 6px 0; margin-bottom: 24px; }
                .message-text { font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap; margin: 0; }
                .footer { padding: 16px 24px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
                .btn { display: inline-block; background-color: #e05a36; color: #ffffff !important; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px; margin-top: 12px; }
              </style>
            </head>
            <body>
              <div class="card">
                <div class="header">
                  <h1>New Architecture & Collaboration Inquiry</h1>
                  <p>Sunil Parajuli Portfolio · Verified Contact Submission</p>
                </div>
                <div class="content">
                  <table class="meta-table">
                    <tr>
                      <td class="label">Sender</td>
                      <td class="value">${name}</td>
                    </tr>
                    <tr>
                      <td class="label">Email</td>
                      <td class="value"><a href="mailto:${email}" style="color: #e05a36; text-decoration: none; font-weight: 600;">${email}</a></td>
                    </tr>
                    <tr>
                      <td class="label">Subject</td>
                      <td class="value">${subject || 'General Inquiry / Collaboration'}</td>
                    </tr>
                  </table>

                  <h3 style="font-size: 14px; text-transform: uppercase; color: #64748b; font-family: monospace; margin: 0 0 10px 0;">Message Content:</h3>
                  <div class="message-box">
                    <p class="message-text">${message}</p>
                  </div>

                  <div style="text-align: center;">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Your inquiry on sunilparajuli.com')}" class="btn">Reply to ${name} (${email}) &rarr;</a>
                  </div>
                </div>
                <div class="footer">
                  This message was dispatched securely from your personal website (sunilparajuli.com) via Resend.
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Resend API error response:', errorData);
      return NextResponse.json(
        { success: false, error: errorData.message || 'Failed to dispatch email via Resend service.' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      message: 'Your message has been dispatched directly to Sunil Parajuli.',
      emailId: data.id,
    });
  } catch (error: any) {
    console.error('Contact route handler error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
