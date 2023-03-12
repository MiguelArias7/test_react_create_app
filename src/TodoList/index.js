import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <React.Fragment>
      <ul>{props.children}</ul>
    </React.Fragment>
  );
}

export { TodoList };
