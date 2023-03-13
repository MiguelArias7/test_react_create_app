import React from "react";
import "./CreateTodoButton.css";
//TODO: Cambiar implementación por context
function CreateTodoButton({ setOpenModal }) {
  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        onClick={() => setOpenModal((prevSate) => !prevSate)}
      >
        +
      </button>
    </React.Fragment>
  );
}

export { CreateTodoButton };
