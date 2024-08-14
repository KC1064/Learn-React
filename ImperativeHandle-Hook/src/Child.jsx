import React, { useImperativeHandle, useState, forwardRef } from 'react'

const Child = (props,ref) => {
    const [openModal,setOpenModal] = useState(false);

    useImperativeHandle(ref,()=>({
        openModal:(val)=>setOpenModal(val),
    }))

    if(!openModal) return null;
  return (
    <div>
        <h1>This is Modal</h1>
        <button onClick={()=>setOpenModal(false)}>Close</button>
    </div>
  )
}

export default forwardRef(Child)