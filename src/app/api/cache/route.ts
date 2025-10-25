import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (request: NextRequest) => {
  const { tag, path } = await request.json();
  if (tag) {
    revalidateTag(tag);
  }
  if (path) {
    revalidatePath(path);
  }
  if (!tag && !path) {
    return NextResponse.json(
      {
        message: "error",
      },
      {
        status: 400,
      }
    );
  }
  return NextResponse.json({
    message: "success",
  });
};
