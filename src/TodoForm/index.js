import React from "react";
import "./TodoForm.css";

function TodoForm({ addTodo, setOpenModalAdd }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  function onCancel() {
    setOpenModalAdd(false);
    setNewTodoValue("");
  }

  function onSubmit(event) {
    event.preventDefault();
    if (newTodoValue.length === 0) setError(true);
    else {
      addTodo(newTodoValue.trim());
      onCancel();
    }
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
    if (event.target.value.toUpperCase() === "TE AMO") {
      setPlay(true);
    } else {
      setPlay(false);
    }
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
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir ToDo
        </button>
      </div>
      {play && <p>Te amo mucho más, mí amor</p>}
    </form>
  );
}
export { TodoForm };
