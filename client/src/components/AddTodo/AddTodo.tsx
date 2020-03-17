import React from "react";
import styled, {css} from "styled-components";
import {useMutation} from "@apollo/react-hooks";
import {ADD_TODO} from "../../constants/queries";
import {updateTodos} from "../../../service/todos";
import Plus from "../../plus.svg";
import useOnEnter from "../../hooks/useOnEnter";
import useInput from "../../hooks/useInput";

const AddTodoContainer = styled.div`
  padding: 20px;
  padding-left: 40px;
  border: none;
  background: #4bc9d0;
  box-shadow: 0 9px 7px 2px rgba(0, 0, 0, 0.03);
  display: flex;
  justify-content: center;
  font-size: 16px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`;
const StyledPlus = styled(Plus)`
  display: inline-block;
  overflow: visible;
  vertical-align: top;
  height: 20px;
  margin-right: 20px;
  width: 20px;
  font-size: inherit;
`;

const InputContainer = styled.input`
  border: 0px;
  color: #fff;
  font-size: 1em;
  background: inherit;
  outline: none;
  font-weight: 400;
  height: 20px;
  ::placeholder {
    color: #fff;
  }
`;

function AddTodo() {
  const {bind: inputProps, value: body, setValue} = useInput();

  const {bind: checkboxProps, value: complete} = useInput({
    initialState: false,
    type: "checkbox",
  });
  const [addTodo, ...rest] = useMutation(ADD_TODO, {
    update: updateTodos,
  });

  const onAddTodo = useOnEnter(() => {
    if (body) {
      addTodo({variables: {body, complete: false}});
      setValue("");
    }
  }, [body]);
  return (
    <AddTodoContainer>
      <InputContainer
        onKeyPress={onAddTodo}
        placeholder="Enter an activity..."
        {...inputProps}
      />
      <StyledPlus />
    </AddTodoContainer>
  );
}

export default AddTodo;
