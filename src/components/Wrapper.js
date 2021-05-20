import { useState } from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Wrapper = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "First Item",
      done: false,
    },
  ]);

  return (
    <main className="wrapper">
      <TodoList todos={todos} />
      <AddTodo />
    </main>
  );
};

export default Wrapper;
