import React from "react";
import styled from "styled-components";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";
import {RouteChildrenProps, Link} from "react-router-dom";
import {useApolloClient} from "@apollo/react-hooks";

const TodoListWrapper = styled.div`
  margin: 130px 0 40px 0;
  position: relative;
`;

interface FilterProps {
  to: Filters;
}
const FilterLink = ({to}: FilterProps) => {
  return <Link to={to}>{to}</Link>;
};
const TodoAppTitle = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: #4bc9d0;
  text-rendering: optimizeLegibility;
`;

function Todos(props: RouteChildrenProps<{filter?: string}>) {
  const client = useApolloClient();
  const filter = props.match.params.filter || "all";
  client.writeData({data: {visibilityFilter: filter}});
  return (
    <TodoListWrapper>
      <header>
        <TodoAppTitle>Todo App</TodoAppTitle>
        <AddTodo />
        <TodoList />
      </header>
      {["all", "active", "completed"].map((link, i) => (
        <FilterLink key={i} to={link} />
      ))}
    </TodoListWrapper>
  );
}

export default Todos;
