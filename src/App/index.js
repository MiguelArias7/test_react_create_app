import React from "react";
import { useTodos } from "./useTodos";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoListItem } from "../TodoListItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoEditForm } from "../TodoEditForm";
import { SortTodosButton } from "../SortTodosButton";
import { TodoHeader } from "../TodoHeader";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModalAdd,
    todosTotalLength,
    todosCompletedLength,
    searchValue,
    setSearchValue,
    addTodo,
    setOpenModalAdd,
    editTodo,
    modalEditTodo,
    setModalEditTodo,
    sortTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter
          todosTotalLength={todosTotalLength}
          todosCompletedLength={todosCompletedLength}
        ></TodoCounter>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></TodoSearch>
      </TodoHeader>

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
          <TodoForm
            addTodo={addTodo}
            setOpenModalAdd={setOpenModalAdd}
          ></TodoForm>
        </Modal>
      )}

      {modalEditTodo.open && (
        <Modal>
          <TodoEditForm
            editTodo={editTodo}
            modalEditTodo={modalEditTodo}
            setModalEditTodo={setModalEditTodo}
          ></TodoEditForm>
        </Modal>
      )}
      <CreateTodoButton setOpenModalAdd={setOpenModalAdd}></CreateTodoButton>
      {!loading && <SortTodosButton sortTodos={sortTodos}></SortTodosButton>}
    </React.Fragment>
  );
}

export default App;
