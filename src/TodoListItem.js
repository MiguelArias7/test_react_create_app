import React from "react";
import "./TodoListItem.css";

function TodoListItem(props) {
  const onComplete = () => {
    alert(`Completaste la tarea: ${props.text}`);
  };

  const onDelete = () => {
    alert(`Borraste la tarea: ${props.text}`);
  };

  return (
    <li className="TodoListItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={onComplete}
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
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoListItem };
