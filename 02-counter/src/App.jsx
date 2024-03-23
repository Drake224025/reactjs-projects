import { useState } from "react";
import "./App.css";

function App() {
  // react hook
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    // accepts a callback which has the prevState value parameter
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };

  const subValue = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
      setCounter((counter) => counter - 1);
      setCounter((counter) => counter - 1);
    }
  };

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add </button>{" "}
      <button onClick={subValue}>Reduce</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
