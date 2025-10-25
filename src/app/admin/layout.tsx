import React from "react";
import Nav from "./_components/Nav";

export const metadata = {
  title: "app moi",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
