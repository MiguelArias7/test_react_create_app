import React from "react";
import "./TodoCounter.css";

function TodoCounter({ todosTotalLength, todosCompletedLength, loading }) {
  return (
    <React.Fragment>
      <h2
        className={`TodoCounter ${loading && "TodoCounter--loading"} ${
          !loading && "TodoCounter--loaded"
        }`}
      >
        Has completado {todosCompletedLength} de {todosTotalLength} TODOs
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };
