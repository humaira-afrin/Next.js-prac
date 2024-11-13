'use client'
import Link from 'next/link'
import React from 'react'


const Button2 = ({showBookning}:{showBookning:any}) => {
  return (
    <div className='button'>
         {/* <Link href='/confirm'> */}
    <button className="btn btn-outline btn-primary" onClick={showBookning}>
         Nästa 
         </button>
         {/* </Link>  */}
   
    </div>
  )
}

export default Button2