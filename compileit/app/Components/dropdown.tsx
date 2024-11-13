'use client'
import React, { useState } from 'react'

const Dropdown = ({setRum}:{setRum:any}) => {

  return (
   <div className='dropdown'>
<label className="form-control w-full max-w-xs">
  <div className="label">
  </div>
  <select onChange={(e)=>setRum(e.target.value)} className="select select-bordered">
    <option disabled selected>Mötesrum</option>
    <option value='rum1'>rum1</option>
    <option value='rum2'>rum2</option>
    <option value='rum3'>rum3</option>
    <option value='rum4'>rum4</option>
    <option value='rum5'>rum5</option>
    <option value='rum6'>rum6</option>

  </select>


</label>
</div>
  )
}

export default Dropdown
