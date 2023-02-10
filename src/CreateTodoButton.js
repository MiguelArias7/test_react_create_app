import React from "react";
import "./CreateTodoButton.css";
function CreateTodoButton() {
  const onClickFunction = (message) => alert(message);
  return (
    <React.Fragment>
      <button
        className="CreateTodoButton"
        onClick={() => onClickFunction("Message for Create Button")}
      >
        +
      </button>
    </React.Fragment>
  );
}

export { CreateTodoButton };
