import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
export const middleware = async (request: NextRequest) => {
  //   //   const token = request.cookies.get("token");
  //   //   console.log(token);
  //   const cookieStore = await cookies();
  //   const token = cookieStore.get("token");
  //   console.log(token);
  //   cookieStore.set("is_login", "true", {
  //     httpOnly: true,
  //   });
  //   const response = NextResponse.next();
  //   response.cookies.set("token", "gigihihihihihi", {
  //     httpOnly: true,
  //     path: "/",
  //     maxAge: 3600,
  //   });
  //   //   response.cookies.delete("token");
  //   return response;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
