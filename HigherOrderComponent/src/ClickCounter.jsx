import React from 'react'
import HigherOrderComp from './HigherOrderComp'

const ClickCounter = (props) => {
  
  return (
    <div>
      <button onClick={props.func}>Clicked: {props.cnt}</button>
    </div>
  )
}

export default HigherOrderComp(ClickCounter);