import { useState } from "react";

// interrogation sign makes the property optional, if the property is not
// passed as argument from the previous component then it will take the value
// placed by default ( 10 in the example below)
interface Props {
    initialValue?: number
}

// the CounterState interface will be used by the state as a data structure for whatever
// counterState created to have both counter and click values with a number primitive type
interface CounterState {
    counter: number,
    clicks: number
}

export const CounterBy = ({ initialValue = 10 }: Props) => {

    // "casted" as a CounterState, the useState requires the initialization of the
    // counterBy value to have the counter and click values initialized
    const [counterBy, setCounter] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });

    // values destructured for them to be easily manipulated in the component
    const {counter, clicks} = counterBy;

    const handleClick = (value: number) => {
        // prev pointing to parentheses is use to return an object without using the "return" syntax
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
