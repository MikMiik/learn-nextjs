"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    const setCookie = async () => {
      const response = await fetch(`api/cookies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          key: "dung",
          value: "123",
        }),
      });
      const data = await response.json();
      console.log(data);
    };
    setCookie();
  }, []);
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
