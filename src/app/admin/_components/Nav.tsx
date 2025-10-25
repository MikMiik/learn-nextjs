import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <h1>Admin Nav</h1>
        <ul className="flex gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
