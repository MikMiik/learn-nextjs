import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  //   const apiKey = request.headers.get("x-api-key");

  const searchParmas = request.nextUrl.searchParams.get("status");
  console.log(searchParmas);

  return NextResponse.json(
    [
      {
        id: 1,
        name: "User1",
      },
      {
        id: 2,
        name: "User2",
      },
      {
        id: 3,
        name: "User3",
      },
    ],
    {
      status: 404,
      headers: {
        "x-api-key": "123",
      },
    }
  );
};
export const POST = async (request: NextRequest) => {
  const body = await request.json();
  return NextResponse.json({ message: "create", body });
};
export const PUT = () => {};
export const PATCH = () => {};
export const DELETE = () => {};
