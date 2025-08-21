import { useRef, useState } from 'react'

export default function RefCounter() {
 let countRef = useRef(0); // one counter stored in a ref
 let count = 0; // one counter stored in a normal variable
 let [countStateVar, setCountStateVar] = useState(0);

 function handleClick() {
    // update countRef object when clicking, via current property
    countRef.current = countRef.current + 1; 
    count = count + 1; // update count variable when clicking 
    setCountStateVar(countStateVar + 1);
    // both counts should be the same value
    //alert(`You clicked ${countRef.current} (${count}) times!`);
 }

 return (
    <div className="RefCounter componentBox">
    <button onClick={handleClick}>
    REFCOUNTER: Click me!
    Count: {count} , Countref: {countRef.current}, countStateVar: {countStateVar}
    </button>
    </div>
 );

}