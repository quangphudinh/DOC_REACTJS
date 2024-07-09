import { useMemo ,useState } from 'react';
import { pow } from '../../helpers/pow';

function Counter(){
    const [count, setCount] = useState(0);

    const handleCounter =() => { 
        setCount(count => count + 1);
    }

    // const resultPow  = pow();

    const resultPow = useMemo(() => {pow()} , []) //kết quả so với trước k có gì thay đổi nên k cần chạy lại vào đây

    // console.log(count);
    return(
        <>
            <div>Ket qua : {count}</div>
            <button onClick={handleCounter}>Counter</button>
            <div>{resultPow}</div>

        </>
    )
}

export default Counter;