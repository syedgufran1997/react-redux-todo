import React, { useState } from "react";
import "./index.css";
import { addTodo } from "./TodoAction/TodoAction";

import { connect } from "react-redux";

const TodoComponent = (props) => {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const addThisTodo = (e) => {
    e.preventDefault();
    props.addTodo({
      todo: todo,
    });
  };

  return (
    <div className="App">
      {console.log("my todos :- ", todo)}
      <h1>Add New Todo To Your List</h1>
      <div className="wrapper">
        <input
          type="Text"
          placeholder="Enter Text"
          value={todo}
          onChange={onChange}
        />
        <br />
        <br />
        <button onClick={addThisTodo}> Add Todo</button>
      </div>
      <div className="todoListView">
        {/* {props.todoReducer.map((item) => (
          <h2>{item.todo}</h2>
        ))} */}
        <h2>{props.todoStore}</h2>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
