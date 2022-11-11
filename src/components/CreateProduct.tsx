import React, { useState } from "react"
import { IProduct } from "../model"

import axios from 'axios'
import ErrorMessage from './ErrorMessage'

const productData : IProduct = {
    title: '',
    price: 10,
    description: '',
    category: '',
    image: 'https://i.pravatar.cc',
    rating: {
        rate: 42,
        count: 10
    }
  };

interface CreateProductProps {
    onCreate: (product:IProduct) => void
}

export default function CreateProduct({onCreate}:CreateProductProps) {

    const [value,setValue] = useState('');
    const [error,setError] = useState('');

    const submitHandler = async (event: React.FormEvent) =>{
        event.preventDefault();
        setError('');

        if(!value.trim()) {
            setError('Please Enter Valid Title');
            return;
        }

        productData.title = value;
        const response = await axios.post('https://fakestoreapi.com/products',productData);
        onCreate(response.data);
    }



  return (
    <form onSubmit={submitHandler}>
      <input 
        type='text' 
        className="boder px-4 py-2 mb-2 w-full outline-0"
        placeholder="Enter Product Title"
        value={value}
        onChange={(e)=> setValue(e.target.value)}
      />
      {error && <ErrorMessage error={error} />}
      <button type="submit" className="px-4 py-2 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}
