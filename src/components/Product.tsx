import React, { useState } from 'react'
import { IProduct } from '../model'

interface ProductProps{
    product: IProduct
}

export default function Product({product}: ProductProps) {

    const [details,setDetails] = useState(false);

    const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400';
    const btnClasses = ['px-4','py-2','border',btnBgClassName];

  return (
    <div className='border px-4 py-2 rounded mb-2 flex flex-col items-center'>
        <img src={product.image} alt={product.title} className='w-1/6' />
        <p>{product.title}</p>
        <p>{product.price}</p>
        <button onClick={()=>setDetails(prev=> !prev)} className={btnClasses.join(' ')}>
            {details ? 'Hide Details' : 'Details'}
        </button>
        {
            details && 
            <div>
                <p><span className=" font-bold text-2xl">Catgeory:</span>{product.category}</p>
                <p><span className=" font-bold text-2xl">Description:</span>{product.description}</p>
                <p><span className=" font-bold text-2xl">Price:</span>{product.price}</p>
            </div>
        }
    </div>
  )
}
