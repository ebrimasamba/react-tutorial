import React from "react";
import { useState } from "react";
import Fruits from "./components/Fruits";
import Footballer from "./components/Footballer";
import Todos from "./components/Todos";

const App = () => {
  const fruits = [];
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    console.log("subtracting");
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>

      <Fruits />
      <Footballer />
      <Todos />
    </div>
  );
};

export default App;
