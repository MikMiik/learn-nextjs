"use client";

import { clearCache } from "@/utils/utils";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Form() {
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  const handleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER}/todos`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
        }),
      }
    );
    if (response.ok) {
      await clearCache("todo-list");
      router.refresh();
    }
  };
  return (
    <form onSubmit={handleAdd} className="flex gap-3">
      <input
        type="text"
        className="border w-1/2 border-[gray] py-2 px-3"
        placeholder="Todo"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
      <button className="bg-amber-300 p-4 cursor-pointer">Add</button>
    </form>
  );
}
