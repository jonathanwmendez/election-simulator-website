'use client'
 
import { useState } from 'react';

const ClickCounter = () => {
    const [count, setCount] = useState(() => {
      const initialValue = localStorage.getItem('clickCount');
      return initialValue ? parseInt(initialValue) : 0;
    });

    const incrementCount = () => {
        setCount(count + 1);
        localStorage.setItem('clickCount', (count + 1).toString());
    };

    const resetCount = () => {
        setCount(0);  // Resets the count state to zero
        localStorage.setItem('clickCount', '0');  // Updates the localStorage with the new count
    };

    return (
        <div>
            <h1>Votes: {count}</h1>
            <button className="pr-4" onClick={incrementCount}>Vote</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default ClickCounter;

