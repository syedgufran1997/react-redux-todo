import React from "react";
import "./todoComponent.css";
import { removeTodo } from "../TodoAction/TodoAction";
import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";

function TodoComponent(props) {
  // const todos = useSelector((state) => state.todoStore.todoReducer);
  const dispatch = useDispatch();

  const removeTodoName = (e) => {
    e.preventDefault();
    dispatch(
      removeTodo({
        id: uuid(),
      })
    );
  };

  return (
    <div className="todowrapper">
      <h3>{props.todoname}</h3>
      <button onClick={removeTodoName} key={props.key}>
        Delete
      </button>
    </div>
  );
}

export default TodoComponent;
