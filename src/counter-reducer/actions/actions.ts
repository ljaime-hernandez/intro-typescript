export type CounterAction =
    |   { type: 'increaseBy', payload: { value: number; } }  
    |   { type: 'reset' };

// Declared the type similar to an enum class in C++, they are object with specific
// properties which will adjust to our redux to provide a type and a payload (if necessary)
// to the store, the string will define the specific process occurring in the reducer
export const doReset = ():CounterAction => ({
        type: 'reset'
})

export const doIncreaseBy = (value:number):CounterAction => ({
    type: 'increaseBy',
    payload: { value }
})