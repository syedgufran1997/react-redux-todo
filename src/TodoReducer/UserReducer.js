const INITIAL_STATE = {
  userReducer: [],
};

export const UserReducer = ({ state = INITIAL_STATE, action }) => {
  switch (action.type) {
    case "ADD_USER_TODO":
      return { ...state, userReducer: [...state.userReducer, action.payload] };
    case "REMOVE_USER_TODO":
      const removeUserItems = state.userReducer.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, userReducer: removeUserItems };
    default:
      return state;
  }
};
