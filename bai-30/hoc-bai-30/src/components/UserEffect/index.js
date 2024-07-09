import { useEffect } from "react";

function UseEffect1() {
    //Do khởi tạo trước các mục được gọi nên sẽ k gọi ra được giá trị của nó
    let listItem = document.querySelectorAll('ul li');
    console.log(listItem);
    //Sử dụng useEffect để giải quyết vấn đề trên 
    useEffect(() => {
        let listItem = document.querySelectorAll('ul li');
        console.log(listItem);
    })

    return (
        <>
            <ul>
                <li>Muc 1</li>
                <li>Muc 2</li>
                <li>Muc 3</li>
            </ul>
        </>
    )
}

export default UseEffect1;