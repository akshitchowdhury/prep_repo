import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Reduc/store";

const Products = ()=> {
    const products = [
        {
            id: 1,
            name: "Mobile",
            price: 25000
        },
        {
            id: 2,
            name: "Laptop",
            price: 45000
        },
        {
            id: 3,
            name: "Watch",
            price: 15000
        },{
            id: 4,
            name: "Tablet",
            price: 35000
        }
    ]
    
    const dispatch = useDispatch()
    const handleAdd = (product)=>{
            dispatch(addToCart(product))
    }
    return(
        <>
        {
            products.map((product)=>(
                <>
                <div key={product.id}>
                <li>
                    {product.name} - {product.price}
                </li>
                <button className="bg-green-500" onClick={()=>{handleAdd(product)}}>
                    Click to Add
                </button>
                </div>
                </>
            ))
        }
        </>
    )
}

export default Products