import React, { useState } from 'react'

const Tabs = () => {
    const[tab,setTab] = useState(null)
    
    const content = {
        1: "Lorem JJk ipsum dolor sit amet consectetur adipisicing elit. Lorem JJk ipsum dolor sit amet consectetur adipisicing elit. Lorem JJk ipsum dolor sit amet consectetur adipisicing elit.",
        2: "Lorem MHA ipsum dolor sit amet consectetur adipisicing elit. Lorem MHA ipsum dolor sit amet consectetur adipisicing elit. Lorem MHA ipsum dolor sit amet consectetur adipisicing elit.",
        3: "Lorem AOT ipsum dolor sit amet consectetur adipisicing elit. Lorem AOT ipsum dolor sit amet consectetur adipisicing elit. Lorem AOT ipsum dolor sit amet consectetur adipisicing elit."
    };
  return (
    <div>
    <div className='flex flex-row space-x-5'>
        <button onClick={()=>{setTab(1) 
        }} className={`${tab===1 ? 'bg-blue-500' : 'bg-red-600'} rounded-md p-4`}>
            JJk
        </button>
        <button onClick={()=>setTab(2)} className={`${tab===2 ? 'bg-blue-500' : 'bg-red-600'} rounded-md p-4`}>
            MHA
        </button>
        <button onClick={()=>setTab(3)} className={`${tab===3 ? 'bg-blue-500' : 'bg-red-600'} rounded-md p-4`}>
            AOT
        </button>
</div>
        {
            tab && 
            <>
            <p>
                {content[tab]}
            </p>
        </>   

        }
        
        
    </div>
  )
}

export default Tabs
