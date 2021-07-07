import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countSquare, setCountSquare] = useState(0);

  useEffect(() => {
    console.log("hi");
    setCountSquare(count * count);
  }, [count]);

  const incCounter = () => setCount((prev) => prev + 1);
  const decCounter = () => setCount((prev) => prev - 1);
  return (
    <div>
      <h3>
        {count} | {countSquare}
      </h3>
      <button onClick={incCounter}>Inc</button>
      <button onClick={decCounter}>Dec</button>
      <br />
    </div>
  );
}

export default Counter;
