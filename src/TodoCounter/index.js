import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { todosTotalLength, todosCompletedLength } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <h2 className="TodoCounter">
        Has completado {todosCompletedLength} de {todosTotalLength} TODOs
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
