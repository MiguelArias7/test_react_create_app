import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModalAdd } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function onCancel() {
    setOpenModalAdd(false);
    setNewTodoValue("");
  }

  function onSubmit(event) {
    event.preventDefault();
    if (newTodoValue.length === 0) setError(true);
    else {
      addTodo(newTodoValue);
      onCancel();
    }
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
  }

  function onTeclaEscape(event) {
    if (event.key === "Escape") {
      onCancel();
    }
  }

  return (
    <form onSubmit={onSubmit} onKeyDown={onTeclaEscape}>
      <label> Escribe tu nuevo ToDo </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla"
      ></textarea>
      {error && <p className="Error-message">Tienes un error en el mensaje</p>}
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button odoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button odoForm-button-add">
          Añadir ToDo
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
