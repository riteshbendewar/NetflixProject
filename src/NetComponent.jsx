import React from 'react'
 import Netflix from './Netflix'
 import './Netflix.css'
 import { Series } from './Netflix'

export  default function NetComponent() {
  return (
 
    <>
    <div className='bg-dark text-center text-danger m-2 p-4  text-capitalize text-danger'>
      <h1 className='Font'>Top 6 High rated netflix series in 2024 </h1>
      </div>
    <div className=' '>
        
     <Netflix></Netflix>
    </div>
    </>
  )
}
