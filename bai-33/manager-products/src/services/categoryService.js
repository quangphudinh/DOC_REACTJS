import { get } from "../utils/request";
export const getListCategories = async () => {
    const result = await get("category")
    // const respone = await fetch('http://localhost:3000/category');
    // const result = await respone.json();
    return result;
}