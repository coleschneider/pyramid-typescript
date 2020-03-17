import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {ALL_TODOS} from "../../constants/queries";
import Todo from "../Todo/Todo";

function TodoList() {
  const {loading, error, data} = useQuery<TodoResponse>(ALL_TODOS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred...</p>;
  }

  return (
    <div>
      {data.todos.map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
