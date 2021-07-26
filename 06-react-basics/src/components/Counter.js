import React, { useReducer, useState } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + action.value;

    case "DEC":
      return state - 1;

    default:
      return state;
  }
};

function Counter() {
  // const [count, setCount] = useState(0);
  const [counter, dispatch] = useReducer(countReducer, 0);

  const incCounter = () => dispatch({ type: "INC", value: 2 });
  const decCounter = () => dispatch({ type: "DEC" });

  return (
    <div>
      <h3> {counter} </h3>
      <button onClick={incCounter}>Inc</button>
      <button onClick={decCounter}>Dec</button>
      <br />
    </div>
  );
}

export default Counter;
