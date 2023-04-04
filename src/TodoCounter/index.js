import React from "react";
import "./TodoCounter.css";

function TodoCounter({ todosTotalLength, todosCompletedLength }) {

  return (
    <React.Fragment>
      <h2 className="TodoCounter">
        Has completado {todosCompletedLength} de {todosTotalLength} TODOs
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
