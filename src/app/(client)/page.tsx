import React from "react";
import "../globals.css";
import Title from "../_components/Title";
import { cookies } from "next/headers";

export const metadata = {
  title: "trang chu",
};

export default async function Home() {
  // const cookieStore = await cookies();
  // const token = cookieStore.get("token")?.value;
  // console.log(token);

  return (
    <div>
      <h1 className="">Home</h1>
      <Title />
    </div>
  );
}
