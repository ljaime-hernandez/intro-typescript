import { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(0);
    // the "HTMLHeadingElement" type will only allow this reference to refer to
    // HTML elements from h1 through h6, it must be initialized but its reference
    // will be defined after the component is rendered on the page
    const counterElement = useRef<HTMLHeadingElement>(null);

    // simple Math methid used to increase a number from 1 through 10 easily
    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1 ,MAXIMUM_COUNT));
    }

    useEffect(() => { 
        if (counter < MAXIMUM_COUNT) return;
        
        console.log('Number limit reached');

        // gsap is required to work with a timeline to compose sequences, the sequence is defined
        // below which will move the axis of the element up during a second slowly, finally for
        // it to come back to the initial point during another second, this time having a bounce effect
        const timeline = gsap.timeline();

        timeline.to( counterElement.current, { y: -10, duration: 1, ease: 'ease.out'})
                .to( counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})

      // the bounce use the counter as reference to trigger this effect, stating some conditions before
      // the gsa animation is launched
    }, [counter])
    
  return (
    <>
        <h1>CounterEffect (counter can not be greater than 10): </h1>
        <h2 ref={counterElement}>{counter}</h2>
        
        <button onClick={handleClick}>+1</button>
    </>
  )
}
