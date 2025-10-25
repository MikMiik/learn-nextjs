import Button from "./Button";

const getTodoList = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
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
    </div>
  );
};

export default TodoList;
