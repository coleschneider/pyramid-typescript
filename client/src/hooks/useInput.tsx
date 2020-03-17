import React from "react";
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
