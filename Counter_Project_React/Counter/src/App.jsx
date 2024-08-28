import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const increaseFunc = () => {
    setCount(++count);
  };
  const decreaseFunc = () => {
    setCount(--count);
  };
  const resetFunc = () => {
    setCount((count = 0));
  };
  return (
    <>
      <h1 className="underline bg-sky-700 rounded-xl">
        Counter App With React
      </h1>
      <h2>Value:{count}</h2>
      <button onClick={increaseFunc}>Increment</button>
      <button onClick={decreaseFunc}>Decrement</button>
      <button onClick={resetFunc}>Reset</button>
    </>
  );
}

export default App;
