import { NextResponse } from "next/server";

// In-memory rate limiting: max 5 requests per 60 seconds per IP
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Periodic cleanup if map grows
  if (rateLimitMap.size > 1000) {
    rateLimitMap.forEach((list, key) => {
      if (list.every((t) => now - t >= windowMs)) {
        rateLimitMap.delete(key);
      }
    });
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website_url, hp_field } = body;

    // 1. Anti-spam honeypot detection: silently drop bot submissions
    if (website_url || hp_field) {
      return NextResponse.json(
        {
          success: true,
          message: "Message received successfully. I will get back to you shortly.",
        },
        { status: 200 }
      );
    }

    // 2. Rate limiting check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    // 3. Robust input validation & bounds checking
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Name is required (between 2 and 100 characters)" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    if (!trimmedEmail || trimmedEmail.length > 254 || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required (maximum 254 characters)" },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length < 5 ||
      message.trim().length > 5000
    ) {
      return NextResponse.json(
        { success: false, error: "Message content is required (between 5 and 5000 characters)" },
        { status: 400 }
      );
    }

    const safeSubject =
      typeof subject === "string" && subject.trim()
        ? subject.trim().slice(0, 200)
        : "(No subject provided)";

    // Server audit log of valid submission
    console.log("[Contact Submission Received]:", {
      name: name.trim(),
      email: trimmedEmail,
      subject: safeSubject,
      length: message.trim().length,
      ip,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully. I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
