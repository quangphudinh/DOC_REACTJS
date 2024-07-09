import { useEffect, useState } from "react";
import "./Tabs.scss";
function Tabs() {
  const [data , setData] = useState([]);
  const [tabActive , setTabActive] = useState("products");

  useEffect(() => {
    fetch('https://dummyjson.com/' + tabActive)
    .then(res => res.json())
    .then(data => {
      // console.log(data.products);
      setData(data[tabActive]);
    })
  } , [tabActive])

  const handleChangeTab = (tab) => {
    setTabActive(tab);
  }

  console.log(data);
  return (
    <>
      <div className="tabs">
        <div className="tabs-item" onClick={() => handleChangeTab("products")}>
          Products
        </div>
        <div className="tabs-item" onClick={() => handleChangeTab("users")}>
          Users
        </div>
        <div className="tabs-item" onClick={() => handleChangeTab("posts")}>
          Post
        </div>
      </div>

      <div className="tab-content">
         <ul>
          {data.map(item => (
            <li key={item.id}>
                {item.title || item.firstName + " " + item.lastName }
            </li>
          ))}
         </ul>
      </div>
    </>
  )
};

export default Tabs;