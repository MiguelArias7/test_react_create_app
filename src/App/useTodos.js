import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    synchronizeItems: synchronizeTodos,
  } = useLocalStorage("TODOS_V1", []);

  const defaultSearchValue = "";
  const [searchValue, setSearchValue] = React.useState(defaultSearchValue);

  const [openModalAdd, setOpenModalAdd] = React.useState(false);
  const [modalEditTodo, setModalEditTodo] = React.useState({
    open: false,
    TodoIdEdit: "",
    TodoValueEdit: "",
  });

  const todosCompletedLength = todos.filter((todo) => todo.completed).length;

  const todosTotalLength = todos.length;

  let searchedTodos = [];

  //If the search bar is empty, assign the default TODOs
  if (!(searchValue.length >= 1)) {
    searchedTodos = todos;
  } else {
    //If there's something written, compare each todo text to the value
    //written and include it to the searched TODOs array.
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    });
  }

  const toggleTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    //It's important to create a new variable and make the changes on it, React will not work properly if we change the variable directly
    //Thus, creating a new variable and using the "setter" from the useState is a good approach
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    // todosValues[todoIndex] = {
    //   text: todosValues[todoIndex].text,
    //   completed: true,
    // };
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];

    const randomId = function (length = 6) {
      return Math.random()
        .toString(36)
        .substring(2, length + 2);
    };

    let newId;
    do {
      newId = randomId();
    } while (newTodos.filter((todo) => todo.id === newId).length !== 0);

    newTodos.push({ id: newId, completed: false, text: text });
    saveTodos(newTodos);
  };

  const editTodo = (id, newValue) => {
    let todoIndex = todos.findIndex((todo) => todo.id === id);
    let newTodos = [...todos];
    newTodos[todoIndex].text = newValue;
    saveTodos(newTodos);
  };

  const sortTodos = (reverse) => {
    const newTodos = [...todos];
    newTodos.sort((a, b) =>
      a.text.toUpperCase().localeCompare(b.text.toUpperCase())
    );
    if (reverse) newTodos.reverse();
    saveTodos(newTodos);
  };

  return {
    todosTotalLength,
    todosCompletedLength,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    editTodo,
    addTodo,
    sortTodos,
    loading,
    error,
    openModalAdd,
    setOpenModalAdd,
    modalEditTodo,
    setModalEditTodo,
    synchronizeTodos,
  };
}

export { useTodos };
