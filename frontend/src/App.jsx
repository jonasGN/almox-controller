import { useState } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(++counter);
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
