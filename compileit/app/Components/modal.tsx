"use client"
import React from 'react'


type Props ={
    rum: string,
    tid:string
}

const Modal = ({rum, tid}: Props) => {

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Submit</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Rummet har bokats</h3>
  <div>
        <h1>{rum}</h1>
        <h1>{tid}</h1>
      </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal
