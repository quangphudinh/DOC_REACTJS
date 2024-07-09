import "./Cart.scss"
import { useState } from 'react';
function Cart() {
    const unitPrice = 120000;
    // let quantity = 1;
    const [quantity , setQuantity] = useState(1);

    const handleChange = (event) => {
        // console.log(event.target.value); // lay ra so luong dang string
        const updateQuantity = parseInt(event.target.value);
        setQuantity(updateQuantity);
    }

    return (
        <>
            <table className = "cart">
                <thead>
                    <tr>
                        <th>Ten San Pham</th>
                        <th>So Luong</th>
                        <th>Don Gia</th>
                        <th>Thanh Tien</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Giay The Thao Nam Cao Cap</td>
                        <td>
                            <input defaultValue={quantity} type = "number" min ={1} onChange = {handleChange}></input>
                        </td>
                        <td>{unitPrice}đ</td>
                        <td>{unitPrice*quantity}đ</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Cart;