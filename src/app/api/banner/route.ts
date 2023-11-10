import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(`<h1>oi</h1>`, {
    "status": 200,
    "headers": {
      "Content-Type": "image/svg+xml"
    }
  });
}