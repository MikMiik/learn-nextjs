import React from "react";
import Nav from "../_components/Nav";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="border-[#ddd] border-b">
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
}
