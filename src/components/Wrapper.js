import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Wrapper = () => {
  return (
    <main className="wrapper">
      <TodoList />
      <AddTodo />
    </main>
  );
};

export default Wrapper;
