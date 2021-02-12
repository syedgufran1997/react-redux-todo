import React, { useState } from "react";
import "./index.css";
import { addTodo, removeTodo } from "./TodoAction/TodoAction";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
// import { connect } from "react-redux";

const TodoComponent = (props) => {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todoStore.todoReducer);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const addThisTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uuid(),
        todo: todo,
      })
    );
  };

  return (
    <div className="App">
      {/* {console.log("My state", todos)} */}
      <h1>Add New Todo To Your List</h1>
      <div className="wrapper">
        <input
          type="Text"
          placeholder="Enter Todo"
          value={todo}
          onChange={onChange}
        />
        <br />
        <br />
        <button onClick={addThisTodo}> Add Todo</button>
      </div>

      <div className="todoListView">
        {todos.length > 0 &&
          todos.map((item, index) => (
            <>
              <div className="todoWrapper" key={index}>
                <h3 key={item.id}>{item.todo}</h3>
                <button onClick={() => dispatch(removeTodo({ id: item.id }))}>
                  Delete
                </button>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log("My new state", state);
//   return {
//     todos: state.todoStore.todoReducer,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (payload) => dispatch(addTodo(payload)),
//     removeTodo: (payload) => dispatch(removeTodo(payload)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
export default TodoComponent;
