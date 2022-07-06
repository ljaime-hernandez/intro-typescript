import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

  // this custom hook is modularized in different files so the code looks cleaner.
  // the hook is originally located in the hooks folder
  const { counter, elementToAnimate, handleClick } = useCounter({
    maxCount: 15
  });
    
  return (
    <>
        <h1>CounterHook (counter can not be greater than 15): </h1>
        <h2 ref={elementToAnimate}>{counter}</h2>
        
        <button onClick={handleClick}>+1</button>
    </>
  )
}
