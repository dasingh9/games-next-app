import { useState, useEffect } from "react";
// Renders a digital time that updates every second
export default function Clock() {
    const [date, setDate] = useState(new Date());
    const [clockInterval, setClockInterval] = useState(null);

    useEffect(() => { // first arg is usually an arrow function
        let clockIntervalId = setInterval(() => tick(), 1000);
        setClockInterval(clockIntervalId);

        console.log('Clock component mounted');

        return () => {
            console.log('Clock component unmounted');
            clearInterval(clockInterval);
        }
        
    }, []); // second arg is an array of dependencies

    const tick = () => {
        setDate(new Date());
        console.log('tick'); // track the effect frequency
    };

    function stopClock() {
        clearInterval(clockInterval);
    }

    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
            <button onClick={stopClock}>Stop Clock</button>
        </div>
    );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?
