import React from "react";
import styled from "styled-components";
import {useQuery, useMutation} from "@apollo/react-hooks";
import {ALL_TODOS, ADD_TODO, TOGGLE_TODO} from "../../constants/queries";
import {updateTodos} from "../../../service/todos";

const TodoListWrapper = styled.div`
  margin: 0 auto;
`;
const TodoListContainer = styled.div`
  padding: 1rem;
`;
const TodoBodyWrapper = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;
const TodoWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #dedede;
  border-radius: 3px;
  margin: 5px;
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

  return data.todos.map(todo => <Todo key={todo.id} {...todo} />);
}

export default TodoList;
