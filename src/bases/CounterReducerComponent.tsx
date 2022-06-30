import { useReducer } from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}

type CounterAction =
    |   { type: 'increaseBy', payload: { value: number; } }
    |   { type: 'reset' };


const counterReducer = (state:CounterState, action:CounterAction):CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        
        case 'increaseBy':

            state.previous = state.counter; 
            state.counter = state.counter + action.payload.value;
            state.changes = state.changes + 1;

            return {
                counter: state.counter,
                changes: state.changes,
                previous: state.previous
            }
    
        default:
            return state;
    }

}

export const CounterReducerComponent = () => {

    const [{ counter, changes, previous }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({type: 'reset'})
    }

    const increaseBy = (value:number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
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
