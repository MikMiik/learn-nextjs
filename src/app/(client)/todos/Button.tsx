"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: number;
};

const Button = ({ id }: Props) => {
  const router = useRouter();
  return (
    <button
      className="border inline-block px-3 py-1 cursor-pointer"
      onClick={() => router.push(`/todos/${id}`)}
    >
      Detail
    </button>
  );
};

export default Button;
