import {useEffect ,useRef,useState} from 'react'
function UseRef4()
{
    const [inputValue , setInputValue] = useState('');
    const counterRef = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    } , [])

    const headleChange = (e) => {
        setInputValue(e.target.value)
        counterRef.current += 1; 
        console.log(inputRef.current.value);
    }
    
    console.log(counterRef.current); // dem duoc số lần render lại component
    return(
        <>
            <input ref={inputRef} value={inputValue} onChange={headleChange}></input>
        </>
    )
}

export  default UseRef4;