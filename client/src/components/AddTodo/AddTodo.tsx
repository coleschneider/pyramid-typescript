import React from "react";
import styled from "styled-components";
import {useMutation} from "@apollo/react-hooks";
import {ADD_TODO} from "../../constants/queries";
import {updateTodos} from "../../../service/todos";

const AddTodoWrapper = styled.div`
  /* display: flex; */
  /* flex: 1; */
  /* margin: 5px; */
  /* flex-direction: column; */
`;
const AddTodoContainer = styled.form`
  padding: 15px;
  box-shadow: 0 0 8px #ededed;
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
const InputContainer = styled.input`
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

function AddTodo() {
  const [input, setInput] = React.useState("");
  const [complete, setComplete] = React.useState(false);

  const [addTodo, {data: d}] = useMutation(ADD_TODO, {
    update: updateTodos,
  });

  const handleInputChange = e => {
    setInput(e.target.value);
  };
  const handleCheckboxToggle = () => {
    setComplete(!complete);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    addTodo({
      variables: {body: input, complete},
    });
  };
  return (
    <AddTodoContainer onSubmit={handleFormSubmit}>
      <FormGroup>
        <Label htmlFor="todo">Todo</Label>
        <InputContainer id="todo" value={input} onChange={handleInputChange} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="checkbox">Complete</Label>
        <InputContainer
          checked={complete}
          onChange={handleCheckboxToggle}
          type="checkbox"
          id="checkbox"
        />
      </FormGroup>
      <FormGroup>
        <SubmitBtn>Add Todo</SubmitBtn>
      </FormGroup>
    </AddTodoContainer>
  );
}

export default AddTodo;
