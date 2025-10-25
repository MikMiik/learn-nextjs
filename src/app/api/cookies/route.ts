import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const { key, value } = await request.json();
  const cookieStore = await cookies();
  cookieStore.set(key, value, { path: "/", httpOnly: true });
  return NextResponse.json({
    success: true,
  });
};
