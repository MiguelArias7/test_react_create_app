// import logo from './logo.svg';
// import "./App.css";

import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { id: "1", text: "Terminar A", completed: false },
//   { id: "2", text: "Definir B", completed: true },
//   { id: "3", text: "Completar C", completed: false },
//   { id: "4", text: "Totima", completed: true },
// ];

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1500);
  });

  const saveItem = (newTodos) => {
    // const stringifiedTodos = JSON.stringify(newTodos);
    //Guardar en local storage
    try {
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      //setTodos
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}

const defaultSearchValue = "";
function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState(defaultSearchValue);

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

  return (
    <AppUI
      todosTotalLength={todosTotalLength}
      todosCompletedLength={todosCompletedLength}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    ></AppUI>
  );
}

export default App;
