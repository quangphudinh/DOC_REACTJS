import { get, post ,del,patch } from "../utils/request";
export const getProducts = async () => {
    // const respone = await fetch('http://localhost:3000/products');
    // const result = await respone.json();
    // return result;
    const result = await get("products")
    return result;
}

export const createProduct = async (data) => {
    const result = await post("products", data);
    return result;
    // const reponse = await fetch('http://localhost:3000/products', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data), //chuyển data sang chuỗi JSON và đẩy qua body ở postman
    // })
    // const result = await reponse.json();
    // return result;
}

export const deleteProduct = async (id) => {
    // const respone = await fetch('http://localhost:3000/products/' + id, {
    //     method: 'DELETE'
    // })
    // const result = await respone.json();
    // return result;

    const result = await del("products/" + id)
    return result;
}

export const updateProduct = async (id, data) => {
    // const reponse = await fetch('http://localhost:3000/products/' + id, {
    //         method: 'PATCH',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data), //chuyển data sang chuỗi JSON và đẩy qua body ở postman
    //     })
    //     const result = await reponse.json();
    //     return result;
    const result = await patch("products/" + id, data);
    return result;
}