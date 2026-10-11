import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export interface StoredTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  avatar?: string;
  createdAt?: string;
}

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "testimonials-store.json");

async function loadTestimonials(): Promise<StoredTestimonial[]> {
  try {
    const raw = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      return data;
    }
  } catch {
    // File doesn't exist or error reading: create it with empty list
  }

  try {
    await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify([], null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write initial testimonials:", err);
  }

  return [];
}

export async function GET() {
  try {
    const testimonials = await loadTestimonials();
    return NextResponse.json({ success: true, testimonials }, { status: 200 });
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

    const currentList = await loadTestimonials();

    const newTestimonial: StoredTestimonial = {
      id: `review-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      role: role.trim(),
      quote: quote.trim(),
      rating: numericRating,
      createdAt: new Date().toISOString(),
    };

    // Prepend new review so it appears first / prominently
    const updatedList = [newTestimonial, ...currentList];

    await fs.mkdir(path.dirname(DATA_FILE_PATH), { recursive: true });
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(updatedList, null, 2), "utf-8");

    return NextResponse.json(
      {
        success: true,
        message: "Testimonial submitted successfully!",
        testimonial: newTestimonial,
        testimonials: updatedList,
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
