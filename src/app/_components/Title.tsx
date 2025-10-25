"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Title() {
  const [title, setTitle] = useState<string>("hf");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const handleClick = () => {
    setTitle("fdfdfsfsdfsdf");
  };

  const handleRedirect = () => {
    router.push("/products");
  };
  return (
    <div>
      <h2>
        {title}: {id}
      </h2>
      <button onClick={handleClick}>Click me</button>
      <br />
      <button onClick={handleRedirect}>Go to Products</button>
    </div>
  );
}
