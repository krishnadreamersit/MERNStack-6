import React, {useRef } from "react";

function Hook72() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Click Me!</button>
    </>
  );
}

export default Hook72;