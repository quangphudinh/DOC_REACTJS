import { useEffect, useReducer } from 'react';

const init = {
    products: [],
    loading: true
}

const reducer = (state, action) => {
   console.log(action.type); // console.log(action , state);

   if (action.type === "Success") {
       return {
            products: action.products,
            loading: false
       };
   }
   return state;
}

function ProductReducer() {

    const [data , dispatch] = useReducer(reducer ,init); //init la gia tri khoi tao

    useEffect(() => {
        const fetchApi = () => {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type : "Success",
                        products: data.products,
                        // loading: false
                    })
                })
        }

        setTimeout(() => {
            fetchApi();
        }, 3000);
    }, [])

    console.log(data);
    return (
        <>
            {data.loading ? (
                <>Loading...</>
            ) : (
                <ul>
                    {data.products.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}

        </>
    );
}


export default ProductReducer;