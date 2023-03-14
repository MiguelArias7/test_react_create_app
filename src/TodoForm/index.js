import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModalAdd } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  function onCancel() {
    setOpenModalAdd(false);
    setNewTodoValue("");
  }

  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue);
    onCancel();
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label> Escribe tu nuevo ToDo </label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla"
      ></textarea>
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
