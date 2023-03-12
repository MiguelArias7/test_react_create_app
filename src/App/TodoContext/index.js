import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const defaultSearchValue = "";
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
    <TodoContext.Provider
      value={{
        todosTotalLength,
        todosCompletedLength,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleTodo,
        deleteTodo,
        loading,
        error,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
