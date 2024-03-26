/** @format */

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestBody = await req.json();
  const data = {
    requestBody: requestBody,
  };

  return NextResponse.json(data);
}
