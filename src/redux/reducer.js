let lastId = 0;

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: ++lastId,
          text: action.payload.text,
          done: false,
        },
      ];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
