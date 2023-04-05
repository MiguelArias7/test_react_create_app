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
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { StoreChangeAlertWithStorageListener } from "../StorageChangeAlert";

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
      <TodoHeader loading={loading}>
        <TodoCounter
          todosTotalLength={todosTotalLength}
          todosCompletedLength={todosCompletedLength}
        ></TodoCounter>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></TodoSearch>
      </TodoHeader>
      <TodoList
        loading={loading}
        error={error}
        searchedTodos={searchedTodos}
        onLoading={() => <TodosLoading></TodosLoading>}
        onError={() => <TodosError></TodosError>}
        onEmpty={() => <TodosEmpty></TodosEmpty>}
        // render={(todo) => (
        //   <TodoListItem
        //     key={todo.id}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => {
        //       toggleTodo(todo.id);
        //     }}
        //     onDelete={() => {
        //       deleteTodo(todo.id);
        //     }}
        //     onEdit={() => {
        //       setModalEditTodo({
        //         open: true,
        //         TodoIdEdit: todo.id,
        //         TodoValueEdit: todo.text,
        //       });
        //     }}
        //   />
        // )}
      >
        {(todo) => (
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
        )}
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

      <StoreChangeAlertWithStorageListener></StoreChangeAlertWithStorageListener>
    </React.Fragment>
  );
}

export default App;
