import React from "react";
import styled, {css} from "styled-components";
import {useMutation} from "@apollo/react-hooks";
import {ADD_TODO} from "../../constants/queries";
import {updateTodos} from "../../../service/todos";
import {levels} from "../../../styles/styleConfig";

const AddTodoContainer = styled.form`
  padding: 15px;
  ${levels.one};
`;

const FormGroup = styled.div`
  display: flex;
`;
const Label = styled.label`
  border-bottom: 1px solid #ededed;
  color: #bdbdbd;
  cursor: pointer;
  font-size: 16px;
  line-height: 40px;
  flex-shrink: 1;
  white-space: nowrap;
`;

const InputContainer = styled.input<any>`
  border: 0;
  border-bottom: 1px solid #ededed;
  height: 40px;
  font-size: 16px;
  line-height: 1;
  color: #424242;
  outline: 0 none;
  padding-left: 15px;
  width: 100%;
`;
const SubmitBtn = styled.button`
  background: 0 none;
  border: 1px solid #ededed;
  color: #bdbdbd;
  margin-left: auto;
  padding: 5px 10px;
`;
interface UseInput {
  initialState: boolean | string;
  type: "text" | "checkbox";
}

function useInput({initialState, type}: UseInput = {initialState: "", type: "text"}) {
  const [value, setValue] = React.useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "checkbox") {
      setValue(!value);
    } else {
      setValue(e.target.value);
    }
  };
  return {
    value,
    bind: {
      value,
      type,
      id: type,
      onChange: handleChange,
    },
  };
}
function AddTodo() {
  const {bind: inputProps, value: body} = useInput();
  const {bind: checkboxProps, value: complete} = useInput({
    initialState: false,
    type: "checkbox",
  });
  const [addTodo, ...rest] = useMutation(ADD_TODO, {
    update: updateTodos,
  });

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({
      variables: {body, complete},
    });
  };
  return (
    <AddTodoContainer onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label htmlFor="todo">Todo</Label>
        <InputContainer {...inputProps} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="checkbox">Complete</Label>
        <InputContainer {...checkboxProps} />
      </FormGroup>
      <FormGroup>
        <SubmitBtn>Add Todo</SubmitBtn>
      </FormGroup>
    </AddTodoContainer>
  );
}

export default AddTodo;
