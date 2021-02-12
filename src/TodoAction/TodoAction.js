export const addTodo = (payload) => ({
  type: "ADD_TODO",
  payload,
});

export const removeTodo = (payload) => ({
  type: "REMOVE_TODO",
  payload,
});
export const addUserTodo = (payload) => ({
  type: "ADD_USER_TODO",
  payload,
});
export const removeUserTodo = (payload) => ({
  type: "REMOVE_USER_TODO",
  payload,
});
export const addAdminTodo = (payload) => ({
  type: "ADD_ADMIN_TODO",
  payload,
});
export const removeAdminTodo = (payload) => ({
  type: "REMOVE_ADMIN_TODO",
  payload,
});
