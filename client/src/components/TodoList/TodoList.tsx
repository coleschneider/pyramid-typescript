import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {ALL_TODOS, GET_FILTER} from "../../constants/queries";
import Todo from "../Todo/Todo";
const getVisibleTodos = (filter: Filters, todos: Todo[]) => {
  switch (filter) {
    case "all":
      return todos;

    case "active":
      return todos.filter(t => t.complete);
    case "completed":
      return todos.filter(t => !t.complete);
    default:
      break;
  }
};
function TodoList() {
  const {
    data: {visibilityFilter},
  } = useQuery(GET_FILTER);
  console.log(visibilityFilter);
  const {loading, error, data} = useQuery<TodoResponse>(ALL_TODOS);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred...</p>;
  }

  return (
    <div>
      {getVisibleTodos(visibilityFilter, data.todos).map(todo => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
