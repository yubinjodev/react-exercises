import { useState } from "react";

export const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>descrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </>
  );
};
