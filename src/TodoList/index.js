import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmpty()}

      <ul>{props.searchedTodos.map(props.render || props.children)}</ul>
    </section>
  );
}

export { TodoList };
