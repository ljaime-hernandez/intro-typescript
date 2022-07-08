import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

// The state on the reducer will use a CounterState interface for its definition.
// The action types are predefined in the action folder, the reset type will reassign 
// a zero to all the state values, the increaseBy type will count the changes the user does in
// the webapp, the counter will add whatever number is clicked based on the button they use
// and the previous value will track the previous counter value state and display it on the
// webpage.
export const counterReducer = (state:CounterState, action:CounterAction):CounterState => {

    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0
            }
        
        case 'increaseBy':
            return {
                previous: state.counter,
                counter: state.counter + action.payload.value,
                changes: state.changes++
            }
    
        default:
            return state;
    }
}