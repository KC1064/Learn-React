import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

const Example_01 = () => {
    const [input,setInput] = useState('');
    // const [render,setRender] = useState(0);

    const render = useRef(0);

    useEffect(()=>{
        render.current +=1;
    },)

    // This will go on for infinite times
    // useEffect(()=>{
    //     setRender(render+1);
    // })
  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>Page is rendered {render.current} times.</p>
    </div>
  )
}

export default Example_01;