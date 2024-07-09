import {useState} from 'react';
function CounterState() {
    const [counter , setCounter] = useState(0);
    return (
        <>
            <h1>CounterState</h1>
            <div>Ket Qua :  {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Up</button>
            <button onClick={() => setCounter(counter - 1)}>Down</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </>
    );
}

export default CounterState;