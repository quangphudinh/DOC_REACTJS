import {useRef,useState} from 'react'
function UseRef2()
{
    const [inputValue , setInputValue] = useState('');
    // const [counter, setCounter] = useState(0); 
    const counterRef = useRef(0)

    const headleChange = (e) => {
        setInputValue(e.target.value)
        counterRef.current += 1; // còn cái này thì không (thường sử dụng trong việc điếm render của trang :))
        // setCounter(counter + 1);// bản chất của nó cx sẽ làm component render lại
    }
    console.log(inputValue);
    // console.log(counter);
    console.log(counterRef.current); // dem duoc số lần render lại component
    return(
        <>
            <input value={inputValue} onChange={headleChange}></input>
        </>
    )
}

export  default UseRef2;