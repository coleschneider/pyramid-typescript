import React from "react";
import styled from "styled-components";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";

const TodoListWrapper = styled.div`
  margin: 130px 0 40px 0;
  position: relative;
`;

const TodoListContainer = styled.div`
  padding: 1rem;
`;
const TodoAppTitle = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: #4bc9d0;
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;
function Todos() {
  return (
    <TodoListWrapper>
      <header>
        <TodoAppTitle>Todo App</TodoAppTitle>
        <AddTodo />
        <TodoList />
      </header>
    </TodoListWrapper>
  );
}

export default Todos;
