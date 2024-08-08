import React, { useState } from 'react'
import Component from './Component'
import './memo.css'

const Memo = () => {

  const [count,setCount] = useState(0);
  const [input,setInput] = useState("");

  function handleInput (e) {
    setInput(e.target.value);
  }
  return (
    <>
    <div>
      <button onClick={()=>setCount(count+1)}>Count is {count}</button>
    </div>
    {/* This input should not be re-rendering when input changes */}
    <input type="text" value={input} onChange={handleInput}/> 
    <hr />
    <Component newCount={count}></Component>
    </>
  )
}

export default Memo