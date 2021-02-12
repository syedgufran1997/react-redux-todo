const INITIAL_STATE = {
  todoReducer: [],
};

export const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todoReducer: [...state.todoReducer, action.payload] };
    case "REMOVE_TODO":
      const removedItems = state.todoReducer.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, todoReducer: removedItems };
    default:
      return state;
  }
};
