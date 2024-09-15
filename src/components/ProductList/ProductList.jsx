import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Reduc/store'

const ProductList = () => {

const products = [{
    id: 1,
    name: 'Laptop',
    price: 45000
},{
    id: 2,
    name: 'Mobile',
    price: 25000
},
{
    id: 3,
    name: 'Watch',
    price: 15000
}
]
const dispatch = useDispatch()
const handleAddition = (product)=>{

    dispatch(addToCart(product))
}
    return (
    <div>
      <ul>
        {
            products.map((product)=>(
                <>
                <li key={product.id}>
                    {product.name} - {product.price}
                </li>
                <button  onClick={()=>{handleAddition(product)}}>Buy</button>
                </>
            ))
        }
      </ul>
    </div>
  )
}

export default ProductList
