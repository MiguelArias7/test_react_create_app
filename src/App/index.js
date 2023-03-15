import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";
import "./App.css";
function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export default App;
