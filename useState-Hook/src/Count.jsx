import React, { useState } from 'react'
import './Count.css'

const Count = () => {
    const [count,setCount] = useState(0);

    const incr = () =>{
        setCount(count+1);
    }
    const decr = () => {
        setCount(count-1);
    }
  return (
    <div className='main'>
        <div className='count'>Count: {count}</div>
        <div className='btns'>
            <button onClick={incr}>+</button>
            <button onClick={decr}>-</button>
        </div>
    </div>
  )
}

export default Count