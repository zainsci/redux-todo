import { connect } from "react-redux";

import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <>
      <h1>Todo List</h1>
      <ul className="todo__list">
        {todos.length > 0 ? (
          todos.map((todo) => <Todo todo={todo} key={todo.id} />)
        ) : (
          <div>No Todos. Yay!</div>
        )}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { todos: state };
};

export default connect(mapStateToProps)(TodoList);
