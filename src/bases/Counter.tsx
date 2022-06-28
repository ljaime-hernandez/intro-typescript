import { useState } from "react";

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

  return (
    <>
        <h1>Counter: {counter}</h1>

        <button onClick={handleClick}>
            +1
        </button>
    </>
  )
}
