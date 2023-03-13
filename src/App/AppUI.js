import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoListItem } from "../TodoListItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
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
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal}></CreateTodoButton>
    </React.Fragment>
  );
}

export { AppUI };
