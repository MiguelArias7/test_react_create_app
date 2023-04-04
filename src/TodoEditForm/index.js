import React from "react";
import "./TodoEditForm.css";

function TodoEditForm({ editTodo, modalEditTodo, setModalEditTodo }) {
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
      <div className="TodoEditForm-buttonContainer">
        <button
          onClick={onCancel}
          type="button"
          className="TodoEditForm-button TodoEditForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoEditForm-button TodoEditForm-button--cancel"
        >
          Editar ToDo
        </button>
      </div>
    </form>
  );
}

export { TodoEditForm };
