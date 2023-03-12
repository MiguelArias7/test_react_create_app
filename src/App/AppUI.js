import React from "react";
import { TodoContext } from "./TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoListItem } from "../TodoListItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI() {
  const { loading, error, searchedTodos, toggleTodo, deleteTodo } =
    React.useContext(TodoContext);
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

      <CreateTodoButton></CreateTodoButton>
    </React.Fragment>
  );
}

export { AppUI };
