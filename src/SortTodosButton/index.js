import React from "react";
import { TodoContext } from "../TodoContext";
import "./SortTodosButton.css";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

//TODO: Cambiar implementación por context
function SortTodosButton() {
  const { sortTodos } = React.useContext(TodoContext);

  const [sorted, setSorted] = React.useState(false);

  return (
    <button
      className="SortTodosButton"
      onClick={() => {
        sortTodos(sorted);
        setSorted(!sorted);
      }}
    >
      {!sorted && <AiOutlineSortAscending></AiOutlineSortAscending>}
      {sorted && <AiOutlineSortDescending></AiOutlineSortDescending>}
    </button>
  );
}

export { SortTodosButton };
