// import logo from './logo.svg';
// import "./App.css";

import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "./TodoContext";

// const defaultTodos = [
//   { id: "1", text: "Terminar A", completed: false },
//   { id: "2", text: "Definir B", completed: true },
//   { id: "3", text: "Completar C", completed: false },
//   { id: "4", text: "Totima", completed: true },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
