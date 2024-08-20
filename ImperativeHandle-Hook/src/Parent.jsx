import React,{useRef} from 'react'
import Child from './Child'

const Parent = () => {
    const childRef = useRef(null);

    function handleOpenModal(val){
        childRef.current.openModal(val);
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <Child ref={childRef}/>
        <button onClick={()=>handleOpenModal(true)}>Open Modal</button>
    </div>
  )
}

export default Parent