import React from "react";
import styled from "styled-components";
import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

const ALL_TODOS = gql`
  {
    todos {
      id
      complete
      body
    }
  }
`;

const TodoListWrapper = styled.div`
  margin: 0 auto;
`;
const TodoListContainer = styled.div`
  padding: 1rem;
`;
const TodoWrapper = styled.div`
  padding: 1rem;
  border: 1px solid #dedede;
  border-radius: 3px;
  margin: 5px;
`;

function Todo({body, complete}: Todo) {
  return <TodoWrapper>{body}</TodoWrapper>;
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
    <TodoListWrapper>
      <TodoListContainer>
        {data.todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </TodoListContainer>
    </TodoListWrapper>
  );
}

export default TodoList;
