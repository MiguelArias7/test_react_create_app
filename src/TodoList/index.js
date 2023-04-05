import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedTodos.length && props.onEmpty()}

      <ul className={`${!props.loading && "ul--visible"}`}>
        {props.searchedTodos.map(props.render || props.children)}
      </ul>
    </section>
  );
}

export { TodoList };
