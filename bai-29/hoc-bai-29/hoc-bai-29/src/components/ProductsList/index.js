import { productList } from "../../data/products";
import ProductItem from "./ProductItem";
function ProductList() {
    console.log(productList);
    return (
        <>
            <div className="product-list">
                {productList.map((item, index) => (
                    <ProductItem item={item} key={index} />
                ))

                }
            </div>
        </>
    )
}
export default ProductList;