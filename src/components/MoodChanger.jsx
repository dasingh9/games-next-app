import { useState } from "react";

export default function MoodChanger() {

    const [mood, setMood] = useState('happy');

    return (
        <>
            <button onClick={() => setMood('tired')}>
                Stay Up Late
            </button>

            <button onClick={() => setMood('hungry')}>
                Skip Lunch
            </button>

            <div className="MoodChanger componentBox">
                Current Mood: {mood}
            </div>
        </>
    )
}