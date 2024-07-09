//bai30 - useState
import { useState } from "react";
function Lamp(){
    // let status = false;
    const [status, setStatus] = useState(false);

    const handleClick = () => {
        setStatus (!status); // set lại giá trị của status
        console.log(status);
    }

    return(
        <>
            <button onClick = {handleClick}>Bat/Tat</button>
            <div>
                {status ? "den dang bat" : "den dang tat"}
            </div>
        </>
    )
}

export default Lamp;