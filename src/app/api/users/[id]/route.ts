import { NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{ id: number }>;
};

export const GET = async (request: NextRequest, { params }: Props) => {
  const { id } = await params;
  console.log("id", id);

  return NextResponse.json([
    {
      id: 1,
      name: "User1",
    },
  ]);
};
