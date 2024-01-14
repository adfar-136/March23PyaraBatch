import { useState, useCallback } from 'react';
import CounterButton from '../components/CounterButton';

export default function Home() {
    const [count, setCount] = useState(0);
    const [dummyState, setDummyState] = useState(0); // New state for testing

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <CounterButton increment={incrementCount} /><br></br>
            <button onClick={() => setDummyState(prev => prev + 1)}>Change Dummy State</button>
        </div>
    );
}
