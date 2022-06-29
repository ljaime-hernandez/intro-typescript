import { useState } from "react";

interface Props {
    // interrogation sign makes the property optional, if the property is not
    // passed as argument from the previous component then it will take the value
    // placed by default ( 10 in the example below)
    initialValue?: number
}

interface CounterState {
    counter: number,
    clicks: number
}

export const CounterBy = ({ initialValue = 10 }: Props) => {

    const [counterBy, setCounter] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    const {counter, clicks} = counterBy;

    const handleClick = (value: number) => {
        // prev pointing to parentheses to return an object without using the return syntax
        setCounter( prev => ({
            counter: prev.counter + value,
            clicks: prev.clicks + 1
        }));
    };

  return (
    <>
        <h1>CounterBy: {counter}</h1>
        <h1>Click counter: {clicks}</h1>

        <button onClick={() => handleClick(1)}>+1</button>
        <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}
