import { NextRequest, NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

interface SubmitRequest {
  name?: string;
  phone?: string;
  instagram?: string;
}

const submissions = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60_000;
const RATE_LIMIT_MAX = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = submissions.get(ip);

  if (!entry || now > entry.resetAt) {
    submissions.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

const MAX_NAME_LEN = 100;
const MAX_PHONE_LEN = 20;
const MAX_INSTA_LEN = 60;
const MAX_BODY_SIZE = 1024;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const bodyText = await request.text();
    if (bodyText.length > MAX_BODY_SIZE) {
      return NextResponse.json({ success: false, error: "Request too large." }, { status: 413 });
    }

    let body: SubmitRequest;
    try {
      body = JSON.parse(bodyText);
    } catch {
      return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
    }

    const name = sanitize(body.name ?? "");
    const phone = sanitize(body.phone ?? "");
    const instagram = sanitize(body.instagram ?? "");

    if (!name) {
      return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 });
    }
    if (name.length > MAX_NAME_LEN) {
      return NextResponse.json({ success: false, error: "Name is too long" }, { status: 400 });
    }
    if (!phone) {
      return NextResponse.json({ success: false, error: "Phone number is required" }, { status: 400 });
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      return NextResponse.json(
        { success: false, error: "Valid phone number is required" },
        { status: 400 }
      );
    }
    if (phone.length > MAX_PHONE_LEN) {
      return NextResponse.json({ success: false, error: "Phone number is too long" }, { status: 400 });
    }
    if (instagram.length > MAX_INSTA_LEN) {
      return NextResponse.json(
        { success: false, error: "Instagram handle is too long" },
        { status: 400 }
      );
    }

    console.log("New waitlist submission:", {
      timestamp: new Date().toISOString(),
      ip,
      name,
      phone,
      instagram: instagram || "N/A",
    });

    const sheetsResult = await appendRow({ name, phone, instagram });
    if (!sheetsResult.success) {
      console.warn(`[API] Sheets write failed: ${sheetsResult.error}`);
    }

    return NextResponse.json({ success: true, message: "You're on the list!" }, { status: 200 });
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
