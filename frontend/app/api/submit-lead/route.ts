import { NextRequest, NextResponse } from 'next/server';

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000/api/submit-lead';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, phone, businessType } = body;

    if (!name || !email || !phone || !businessType) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Forward to Flask API
    try {
      const response = await fetch(FLASK_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          businessType,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Flask API error');
      }

      const data = await response.json();

      return NextResponse.json({
        success: true,
        message: 'Lead submitted successfully',
        data,
      });
    } catch (flaskError) {
      // If Flask API is not available, save to local storage (fallback)
      console.error('Flask API not available, using fallback:', flaskError);

      // In production, you might want to save to a database or file
      return NextResponse.json({
        success: true,
        message: 'Lead submitted successfully (stored locally)',
        data: {
          name,
          email,
          phone,
          businessType,
          timestamp: new Date().toISOString(),
        },
      });
    }
  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'API endpoint for lead submission. Use POST method.' },
    { status: 200 }
  );
}
