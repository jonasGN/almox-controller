import { useState } from "react";

import "./styles/globals.scss";

export function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(55);
  }

  return (
    <>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment +1
      </button>
    </>
  );
}
