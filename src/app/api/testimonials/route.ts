import { NextResponse } from "next/server";

export const runtime = "edge";

export interface StoredTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatar?: string;
  createdAt?: string;
}

// In-memory store for edge runtime
let inMemoryTestimonials: StoredTestimonial[] = [];

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, testimonials: inMemoryTestimonials },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
        },
      }
    );
  } catch (err) {
    console.error("Error fetching testimonials:", err);
    return NextResponse.json(
      { success: false, error: "Failed to load testimonials", testimonials: [] },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, quote, rating } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid name (2 to 80 characters)" },
        { status: 400 }
      );
    }

    if (!role || typeof role !== "string" || role.trim().length < 2 || role.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "Please enter your role or title (e.g. Senior Data Scientist, Client)" },
        { status: 400 }
      );
    }

    if (!quote || typeof quote !== "string" || quote.trim().length < 5 || quote.trim().length > 1200) {
      return NextResponse.json(
        { success: false, error: "Please write your testimonial (between 5 and 1200 characters)" },
        { status: 400 }
      );
    }

    const numericRating = typeof rating === "number" && rating >= 1 && rating <= 5 ? rating : 5;

    const newTestimonial: StoredTestimonial = {
      id: `review-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      role: role.trim(),
      quote: quote.trim(),
      rating: numericRating,
      createdAt: new Date().toISOString(),
    };

    // Prepend new review so it appears first / prominently
    inMemoryTestimonials = [newTestimonial, ...inMemoryTestimonials];

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial submitted successfully!",
        testimonial: newTestimonial,
        testimonials: inMemoryTestimonials,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error saving testimonial:", err);
    return NextResponse.json(
      { success: false, error: "Failed to save testimonial. Please try again." },
      { status: 500 }
    );
  }
}
