'use client'
 
import { useEffect, useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0); // Initializes the count to 0 by default

    // Checks to see if there is any data stored in localStorage and sets the value of the initial state; if there is no value it sets it to 0
    useEffect(() => {
        const initialValue = localStorage.getItem('clickCount');
        setCount(initialValue ? parseInt(initialValue) : 0);
    }, []);

    // Increments the count by one every time the button is clicked
    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        if (typeof window !== 'undefined') {
            localStorage.setItem('clickCount', newCount.toString());
        }
    };
    
    // Resets the count back to 0
    const resetCount = () => {
        setCount(0);
        if (typeof window !== 'undefined') {
            localStorage.setItem('clickCount', '0');
        }
    };

    return (
        <div>
            <h1 className="flex justify-center py-8">Votes: {count}</h1>
            <button className="rounded-full bg-white text-black p-2 hover:bg-blue-700 m-2 cursor-pointer" onClick={incrementCount}>Vote</button>
            <button className="rounded-full bg-white text-black p-2 hover:bg-red-700 m-2 cursor-pointer" onClick={resetCount}>Reset</button>
        </div>
    );
};

export default ClickCounter;
