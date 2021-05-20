import { useState } from "react";

import store from "../redux/store";
import * as actions from "../redux/actions";

const AddTodo = () => {
  const [val, setVal] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    store.dispatch(actions.addTodo(val));
    setVal("");
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button>Add Todo</button>
    </form>
  );
};
export default AddTodo;
