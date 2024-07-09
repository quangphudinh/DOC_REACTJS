import { memo } from 'react';
function Box(props){

    const {onCounter , onReset} = props;
    // console.log(onCounter);

    console.log("Box render"); //vẫn bị render trươc khi impport memo

    const handleClick = () => {
        onCounter();
    }
    const handleReset = () => {
        onReset();
    }

    return(
        <div>
            <button onClick={handleClick}>Counter</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default memo(Box); // chỉ thực hiện khi hàm box này cực kỳ phức tạp và k thay đôi khi render trang

