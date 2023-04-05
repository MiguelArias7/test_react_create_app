import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className={`TodoSearch
       ${!loading && "TodoSearch--loading"}`}
      placeholder="Busca tus ToDos"
      onChange={onSearchValueChange}
      value={searchValue}
      disabled={loading}
    ></input>
  );
}

export { TodoSearch };
