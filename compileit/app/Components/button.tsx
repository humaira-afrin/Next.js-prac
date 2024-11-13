'use client'
import Link from 'next/link'
import React from 'react'


const button = () => {
  return (
    <div className='button'>
         <Link href='/boka'>
    <button className="btn btn-outline btn-primary btn-lg" >
         Boka 
         </button>
         </Link> 
   
    </div>
  )
}

export default button