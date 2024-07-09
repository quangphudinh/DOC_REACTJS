import { useCallback, useState } from 'react';
import Box from '../Box_memo';
function Counter(){
    const [count, setCount] = useState(0);

    // const handleCounter = () => {
    //     setCount(count + 1);
    // }

    const handleCounter = useCallback(() => { // sau khi render thi khong thay doi gia tri roi update len
        setCount(count => count + 1);
    }, [])

    // const handleReset = () => { //bi render
    //     setCount(0);
    // }

    const handleReset = useCallback(() => {
        setCount(0);
    }, [])

    // console.log(count);
    return(
        <>
          
            <div>Ket qua : {count}</div>
              <Box onCounter={handleCounter} onReset={handleReset}/>
        </>
    )
}

export default Counter;