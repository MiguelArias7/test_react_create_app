// import logo from './logo.svg';
import "./App.css";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoListItem } from "./TodoListItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Tarea 1", completed: false },
  { text: "Tarea 2", completed: true },
  { text: "Tarea 3", completed: false },
  { text: "Tarea 4", completed: true },
];

const defaultSearchValue = "";
function App() {
  const [todosValues, setTodosValues] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(defaultSearchValue);

  const todosCompletedLength = todosValues.filter(
    (todo) => todo.completed
  ).length;

  const todosTotalLength = todosValues.length;

  return (
    <React.Fragment>
      <TodoCounter
        total={todosTotalLength}
        completed={todosCompletedLength}
      ></TodoCounter>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoListItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
    </React.Fragment>
  );
}

// function ListOfNumbers() {
//   var foo = [];

//   for (var i = 1; i <= 100; i++) {
//     foo.push(i);
//   }

//   return (
//     <>
//       <h1>Counter</h1>
//       <ul>
//         {foo.map((car) => (
//           <li> {car} </li>
//         ))}
//       </ul>
//     </>
//   );
// }

export default App;
