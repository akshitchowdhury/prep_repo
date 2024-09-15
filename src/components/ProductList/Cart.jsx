import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
    return (
    <div>
      {
        cart.length===0 ? <div>
            Your Cart is empty
        </div> : (
            cart.map((product)=>(
                <div key={product.id}>
                    {product.name} - quantity: {product.quantity} - totalPrice: {product.price}
                </div>
            ))
        )
      }
    </div>
  )
}

export default Cart
