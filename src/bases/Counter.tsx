import { useState } from "react";

// the interface will require for this data to be received as an argument, the 
// interrogation sign will allow for the value to be received or not, but, in case
// it is received then it must be a number
interface Props {
    initialValue?: number
}

// the initialValue will be zero by default if no number is sent from the parent
// component
export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter(prev => prev + 1);
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
