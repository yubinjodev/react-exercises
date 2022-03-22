import { useState } from "react";

export const ImageSlider = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>back</button>
      <img src={`https://picsum.photos/200/200?random=${count}`} alt="slider" />
      <button onClick={() => setCount(count + 1)}>next</button>
    </>
  );
};
