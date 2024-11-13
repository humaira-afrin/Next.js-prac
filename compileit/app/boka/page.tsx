"use client"
import React, { useState } from 'react'
import Dropdown from '../Components/dropdown'
//import Calender2 from 'react-calendar'
import './calender.css'
import Calender2 from './calender2'
import Button2 from './button2'
import Modal from '../Components/modal'

const Boka = () => {
  const [rum, setRum]=useState("")
  const [tid, setTid] = useState('');
  const [show, setShow] = useState(false);

  const showBookning = () =>{
    setShow(true)
  }

  return (
    <div>
      <h1 className='titel'>Välj en tid</h1>
      <Dropdown setRum={setRum}/>
      <div className= 'flex justify-center items-center'>
      <Calender2 setTid={setTid}/>
      </div>
      {/* <Button2 showBookning={showBookning}/> */}
      <div className= 'flex justify-center items-center'>
      <Modal rum ={rum} tid={tid}/>
      </div>
      
    </div>
  )
}

export default Boka
