import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoListItem } from "../TodoListItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEditForm } from "../TodoEditForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModalAdd,
    setOpenModalAdd,
    modalEditTodo,
    setModalEditTodo,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList>
        {loading && <p>Cargando, espera...</p>}
        {error && <p>Hubo un error </p>}
        {!loading && !searchedTodos.length && <p> Crea tu primer todo </p>}

        {searchedTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              toggleTodo(todo.id);
            }}
            onDelete={() => {
              deleteTodo(todo.id);
            }}
            onEdit={() => {
              setModalEditTodo({
                open: true,
                TodoIdEdit: todo.id,
                TodoValueEdit: todo.text,
              });
            }}
          />
        ))}
      </TodoList>
      {openModalAdd && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      {modalEditTodo.open && (
        <Modal>
          <TodoEditForm></TodoEditForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModalAdd={setOpenModalAdd}></CreateTodoButton>
    </React.Fragment>
  );
}

export { AppUI };
