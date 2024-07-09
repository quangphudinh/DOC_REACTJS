import { useEffect, useState } from "react";
import './Products.scss'
function UserEffect2() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setData(data.products)
      })
  }, []) // truyen vao de tranh truong hop lặp vô hạn của useEffect

  console.log(data)
  return (
    <>
      <div className="product-list">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <div className="product-image">
              <img src={item.thumbnail} alt={item.title}></img>
            </div>
            <h3 className="product-title">{item.title}</h3>
            <div className="product-price">{item.price}$</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default UserEffect2;