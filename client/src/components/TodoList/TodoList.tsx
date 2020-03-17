import React from "react";
import styled from "styled-components";
import {useQuery, useMutation} from "@apollo/react-hooks";
import {ALL_TODOS, ADD_TODO, TOGGLE_TODO} from "../../constants/queries";
import {updateTodos} from "../../../service/todos";
import {levels} from "../../../styles/styleConfig";

const TodoBodyWrapper = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;
const TodoWrapper = styled.div`
  padding: 15px;
  margin: 5px;
  ${levels.two};
`;
const TodoCheckboxWrapper = styled.input`
  padding: 1rem;
`;

function Todo({id, body, complete}: Todo) {
  const [toggleTodo, {data}] = useMutation(TOGGLE_TODO);
  const handleToggle = () => {
    toggleTodo({variables: {id}});
  };
  return (
    <TodoWrapper>
      <TodoBodyWrapper>{body}</TodoBodyWrapper>
      <TodoCheckboxWrapper type="checkbox" checked={complete} onChange={handleToggle} />
    </TodoWrapper>
  );
}
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
