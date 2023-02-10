// import logo from './logo.svg';
import "./App.css";
import { TodoSearch } from "./TodoSearch";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoListItem } from "./TodoListItem";
import { CreateTodoButton } from "./CreateTodoButton";
import React from "react";

const defaultTodos = [
  { text: "Tarea 1", completed: true },
  { text: "Tarea 2", completed: true },
  { text: "Tarea 3", completed: true },
  { text: "Tarea 4", completed: true },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todosValues, setTodosValues] = React.useState(defaultTodos);

  const todosCompletedLength = todosValues.filter(
    (todo) => todo.completed
  ).length;
  const todosLength = todosValues.filter((todo) => todo.completed).length;

  return (
    <React.Fragment>
      <TodoCounter></TodoCounter>
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></TodoSearch>
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoListItem
            key={todo.text}
            text={todo.text}
            completed={todo.text}
          />
        ))}
      </TodoList>
      <CreateTodoButton></CreateTodoButton>
      {/* {ListOfNumbers()} */}
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
