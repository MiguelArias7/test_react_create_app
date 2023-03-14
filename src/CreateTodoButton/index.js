import React from "react";
import "./CreateTodoButton.css";
//TODO: Cambiar implementación por context
function CreateTodoButton({ setOpenModalAdd }) {
  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        onClick={() => setOpenModalAdd((prevSate) => !prevSate)}
      >
        +
      </button>
    </React.Fragment>
  );
}

export { CreateTodoButton };
