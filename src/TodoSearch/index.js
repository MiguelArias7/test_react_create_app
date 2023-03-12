import React from "react";
import { TodoContext } from "../App/TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="This is a placeholder"
        onChange={onSearchValueChange}
        value={searchValue}
      ></input>
    </React.Fragment>
  );
}

export { TodoSearch };
