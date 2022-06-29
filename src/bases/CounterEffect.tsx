import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(0);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1 ,MAXIMUM_COUNT));
    }

    useEffect(() => { 
        if (counter < MAXIMUM_COUNT) return;
        
        console.log('Number limit reached');

        const timeline = gsap.timeline();

        timeline.to( counterElement.current, { y: -10, duration: 1, ease: 'ease.out'})
                .to( counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

    }, [counter])
    
  return (
    <>
        <h1>CounterEffect (counter can not be greater than 10): </h1>
        <h2 ref={counterElement}>{counter}</h2>
        
        <button onClick={handleClick}>+1</button>
    </>
  )
}
