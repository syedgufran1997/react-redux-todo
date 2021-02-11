const INITIAL_STATE = {
  todoReducer: [],
};

export const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todoReducer: [...state.todoReducer, action.payload] };

    default:
      return {
        state,
      };
  }
};
