import {useReducer} from 'react';

//ham reducer



function reducer(state, action) { //state = counter // action la hanh do co the say ra trong chuong trinh
    switch (action) {
        case 'up':
            return state + 1;
        case 'down':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state;
    }
    // console.log(state , action);
    // return state;
}

function CounterReducer() {
    const [counter , dispatch] = useReducer(reducer ,0); // ham va gia tri khoi tao
    return (
        <>
            <h1>CounterReducer</h1>
            <div>Ket Qua :  {counter}</div>
            <button onClick={() => dispatch('up')}>Up</button>
            <button onClick={() => dispatch('down')}>Down</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </>
    );
}

export default CounterReducer;