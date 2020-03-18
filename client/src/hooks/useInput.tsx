import React from "react";
interface UseInput {
  initialState: string;
  type: "text";
}

function useInput<T = string>(
  {initialState, type}: UseInput = {initialState: "", type: "text"}
) {
  const [value, setValue] = React.useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    bind: {
      value,
      type,
      id: type,
      onChange: handleChange,
    },
  };
}

export default useInput;
