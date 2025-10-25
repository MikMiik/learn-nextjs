import React from "react";

type Props = {
  params: Promise<{ id: number }>;
};

export type Todo = {
  id: number;
  title: string;
};

const getTodo = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/todos/${id}`,
    {
      cache: "force-cache",
      next: {
        tags: [`todo-${id}`],
      },
    }
  );
  return response.json();
};
export default async function DetailTodo({ params }: Props) {
  const { id } = await params;
  const todo: Todo = await getTodo(id);
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
