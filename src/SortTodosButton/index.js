import React from "react";
import "./SortTodosButton.css";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

function SortTodosButton({ sortTodos }) {
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
