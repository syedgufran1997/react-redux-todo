const INITIAL_STATE = {
  adminReducer: [],
};
export const AdminReducer = ({ state = INITIAL_STATE, action }) => {
  switch (action.type) {
    case "ADD_ADMIN_TODO":
      return {
        ...state,
        adminReducer: [...state.adminReducer, action.payload],
      };
    case "REMOVE_ADMIN_TODO":
      const removeAdminTodo = state.adminReducer.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, adminReducer: removeAdminTodo };
    default:
      return state;
  }
};
