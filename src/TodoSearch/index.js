import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="Busca tus ToDos"
        onChange={onSearchValueChange}
        value={searchValue}
      ></input>
    </React.Fragment>
  );
}

export { TodoSearch };
