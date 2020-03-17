import React from "react";
import styled from "styled-components";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";

const TodoListWrapper = styled.div`
  margin: 50px auto;
  width: 400px;
`;

const TodoListContainer = styled.div`
  padding: 1rem;
`;

function Todos() {
  return (
    <TodoListWrapper>
      <AddTodo />
      <TodoListContainer>
        <TodoList />
      </TodoListContainer>
    </TodoListWrapper>
  );
}

export default Todos;
