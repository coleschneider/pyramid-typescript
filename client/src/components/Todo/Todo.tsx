import React from "react";
import styled from "styled-components";
import Trash from "../../trash.svg";
import {useMutation} from "@apollo/react-hooks";
import {TOGGLE_TODO, DELETE_TODO} from "../../constants/queries";
import {levels, colors, animations} from "../../../styles/styleConfig";
import {updatedDeletedTodo} from "../../../service/todos";

interface StyleProps {
  complete: boolean;
}

const CheckboxLabel = styled.label`
  display: block;
  cursor: pointer;
  left: 20px;
  user-select: none;
  position: absolute;
`;

const TrashCanIcon = styled(Trash)`
  position: absolute;
  right: 20px;
  cursor: pointer;
  path {
    ${animations.ease("fill")}
  }
  :hover path {
    fill: ${colors.alert};
  }
`;
const CheckboxInput = styled.span<StyleProps>`
  position: absolute;
  height: 20px;
  width: 20px;
  display: block;
  border-radius: 20px;
  border: 2px solid ${colors.primary};
  background: ${props => (props.complete ? "#4bc9d0" : "none")};
  ::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: ${props => (props.complete ? `solid ${colors.white}` : "none")};
    border-width: 0 2px 2px 0;
    display: ${props => (props.complete ? "block" : "none")};
    transform: rotate(45deg);
    opacity: ${props => (props.complete ? 1 : 0)};
    ${animations.quadBezier(["opacity", "border"])};
  }
`;
const TodoWrapper = styled.div`
  background: #ffffff;
  ${levels.one};
`;

const TodoBody = styled.div`
  padding: 20px;
  margin: 5px;
  display: flex;
  background: ${colors.white};
`;
const TodoDescription = styled.div<StyleProps>`
  margin-left: 35px;
  position: relative;
  :after {
    position: absolute;
    ${animations.quadBezier("width")};
    content: "";
    height: 1px;
    bottom: 8px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: ${props => (props.complete ? "100%" : "0")};
    background: #4d4d4d;
  }
`;

function Todo({id, body, complete}: Todo) {
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  const [deleteTodo, {loading, called, error}] = useMutation(DELETE_TODO, {
    update: updatedDeletedTodo,
  });

  const handleToggle = () => {
    toggleTodo({variables: {id}});
  };
  const handleDelete = () => {
    deleteTodo({variables: {id}});
  };

  return (
    <TodoWrapper>
      <TodoBody>
        <CheckboxLabel>
          <CheckboxInput complete={complete} onClick={handleToggle} />
        </CheckboxLabel>
        <TodoDescription complete={complete}>{body}</TodoDescription>
        <TrashCanIcon onClick={handleDelete} />
      </TodoBody>
    </TodoWrapper>
  );
}

export default Todo;
