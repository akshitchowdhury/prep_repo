import React, { useEffect, useState } from 'react'

const Paginate = () => {

    const[productList,setProductList] = useState([])
    const[categoryList,setCategoryList] = useState([])
    
    const fetchProducts = async()=>{
        const response = await fetch("https://dummyjson.com/products",{method: "GET"})
        const data = await response.json();

        setProductList(data.products)
        setCategoryList([...new Set(data.products.map((item) => item.category))]);

        console.log("List fetched",data.products)
        console.log("categories List fetched",categoryList) 
     }  
 
     useEffect(()=>{ 

        fetchProducts()
     },[])

    return (
        <>
    <select >
        <option>Select category</option>
        {
            categoryList.map((category,index)=>(
                <option id='index' value={category}>
                    {category}
                </option>
            ))
        }
    </select>

        
    <div>
      {
        productList.map((product,index)=>(
            <>
                <p key={index}>{product.title}</p>
            </>
        ))
      }
    </div>
    </>
  )
}

export default Paginate
