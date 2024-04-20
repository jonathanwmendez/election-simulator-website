'use client'
 
import { useEffect, useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(0); // Initialize count to 0 by default

    // Effect to run once on mount
    useEffect(() => {
        const initialValue = localStorage.getItem('clickCount');
        setCount(initialValue ? parseInt(initialValue) : 0);
    }, []);

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        if (typeof window !== 'undefined') {
            localStorage.setItem('clickCount', newCount.toString());
        }
    };

    const resetCount = () => {
        setCount(0);
        if (typeof window !== 'undefined') {
            localStorage.setItem('clickCount', '0');
        }
    };

    return (
        <div>
            <h1>Votes: {count}</h1>
            <button onClick={incrementCount}>Vote</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default ClickCounter;
