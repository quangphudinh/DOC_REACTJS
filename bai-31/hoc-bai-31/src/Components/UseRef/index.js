import { useRef ,useState } from "react";
function UseRef() {
    const [counter , setCounter] = useState(0);
    const counterRef = useRef(0);
    const counterObj = {
        current : 0
    }
    
    const handleClick = () => {
        setCounter(counter + 1)
        counterRef.current +=1
        counterObj.current +=1
    }

    console.log("counter " , counter);
    console.log("counterRef " , counterRef.current);// useRef thi lam dc
    console.log("counterObj " , counterObj.current); //Object sau khi render k giu lai dc gia tri

    return (
        <>
            <button onClick={handleClick}>Click</button>
        </>
    );
}
export default UseRef