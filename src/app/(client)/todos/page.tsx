import Button from "./Button";
import Form from "./Form";

const getTodoList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
    },
  });
  const todoList = await response.json();
  return todoList;
};
type Todo = {
  id: number;
  title: string;
};
const TodoList = async () => {
  const todoList = await getTodoList();

  return (
    <div>
      <h1 className="text-3xl text-center">Todo List</h1>
      {todoList.map((todo: Todo) => (
        <div className="mb-3" key={todo.id}>
          <h2>{todo.title}</h2>
          <Button id={todo.id}></Button>
        </div>
      ))}
      <Form />
    </div>
  );
};

export default TodoList;
