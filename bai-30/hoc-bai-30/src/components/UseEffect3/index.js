import { useEffect, useState } from "react";
import './Products.scss'
function UserEffect3() {
  const limit = 10;
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [quanlityPage , setquanlityPage] = useState(0)

  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=' + page*limit + '&limit=' + limit)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setData(data.products);
        setquanlityPage(Math.ceil(data.total/limit)); // lam tron so trang len
      })
  }, [page]) // truyen vao de page duoc goi

  // console.log(data);
  // console.log(quanlityPage); //~20
  // console.log([...Array(quanlityPage)]); //20 phan tu Undefined

  const handleClickPagi = (e) => {
    setPage(e);
    //console.log(e);
  }

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
      <ul className="pagination">
        {/* Do react k su dung dc vong lap (chi su dung dc lap array nen tao 1 mang gom 20 phan tu undefined de lap qua 20 phan tu) */}
        {[...Array(quanlityPage)].map((item, index) => (
          <li onClick={() => handleClickPagi(index)} key={index}>{index+1}</li>
        ))}
      </ul>
    </>
  )
}

export default UserEffect3;