import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <>
      <h1>Todo List</h1>
      <ul className="todo__list">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
