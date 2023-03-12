import React from "react";
import "./TodoListItem.css";

function TodoListItem(props) {
  return (
    <li className="TodoListItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        √
      </span>
      <p
        className={`TodoListItem-p ${
          props.completed && "TodoListItem-p--complete"
        }`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoListItem };
