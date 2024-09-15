import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../Reduc/store'

const PoductCar = () => {

const cart = useSelector(state=> state.cart)

const dispatch = useDispatch()
const handleReduction = (item)=>{
    dispatch(removeFromCart(item))
}
return (
    <div>
      {
        cart.length===0 ?<div>
        Cart is empty
        </div> : (
            cart.map((item)=>(
                <div key={item.id}>
                <li >
                    {item.name} - {item.quantity} - {item.price}
                </li>
                <button className='bg-red-600' onClick={()=>handleReduction(item)}>
                    Click to reduce items
                </button>
                </div>
            ))
        )
      }
    </div>
  )
}

export default PoductCar
