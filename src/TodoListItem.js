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
    <React.Fragment>
      <li className="TodoListItem">
        <span
          className={`Icon Icon-check ${
            props.completed && "Icon-check--active"
          }`}
          onClick={onComplete}
        >
          {" "}
          √{" "}
        </span>
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <span className="Icon Icon-delete" onClick={onDelete}>
          {" "}
          X{" "}
        </span>
      </li>
    </React.Fragment>
  );
}

export { TodoListItem };
