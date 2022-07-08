
// Modularized the CounterState interface just as an example on how
// the interfaces should be distributed
export interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}