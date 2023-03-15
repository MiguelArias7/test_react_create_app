import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoEditForm.css";

function TodoEditForm() {
  const { editTodo, modalEditTodo, setModalEditTodo } =
    React.useContext(TodoContext);
  const [toEditTodoValue, setToEditTodoValue] = React.useState("");

  function onCancel() {
    setModalEditTodo({
      open: false,
      TodoIdEdit: "",
      TodoValueEdit: "",
    });
    setToEditTodoValue("");
  }

  function onSubmit(event) {
    event.preventDefault();
    editTodo(modalEditTodo.TodoIdEdit, toEditTodoValue);
    onCancel();
  }

  function onChange(event) {
    setToEditTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label> Modifica el texto de tu ToDo </label>
      <textarea
        value={toEditTodoValue}
        onChange={onChange}
        placeholder={modalEditTodo.TodoValueEdit}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoForm-button odoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button odoForm-button--cancel"
        >
          Editar ToDo
        </button>
      </div>
    </form>
  );
}

export { TodoEditForm };
