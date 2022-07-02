import { useReducer } from "react";
import { doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

export const CounterReducerComponent = () => {

    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch(doReset())
    }

    const increaseBy = ( value:number ) => {
        dispatch(doIncreaseBy( value ))
    }

  return (
    <>
        <h1>CounterReducer: {counter}</h1>
        <h1>Changes count: {changes}</h1>
        <h1>Previous value: {previous}</h1>

        <button onClick={handleReset}>
            Reset
        </button>
        <button onClick={() => increaseBy(1)}>
            +1
        </button>
        <button onClick={() => increaseBy(5)}>
            +5
        </button>
        <button onClick={() => increaseBy(10)}>
            +10
        </button>
    </>
  )
}
