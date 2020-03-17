import React from "react";
type Callback = (e: React.KeyboardEventHandler<HTMLElement>) => void;

export default function useOnEnter(callback: Callback, inputs: any[]) {
  return React.useCallback(event => {
    if (event.key === "Enter") {
      event.preventDefault();
      callback(event);
    }
  }, inputs);
}
