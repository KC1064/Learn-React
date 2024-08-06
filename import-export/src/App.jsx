import React from 'react'

const App = () => {
  return (
    <div>Hello I Am Import 1</div>
  )
}

const Greet = () =>{
  return (
    <div>Good Afternoon</div>
  )
}
const Name = () =>{
  return (
    <div>Learning About Import and Exports</div>
  )
}

const MyName = ()=>{
  return(
    <div>
      Hi I am Alex
    </div>
  )
}

const Uni = ()=>{
  return(
    <div>
      I am an Undergrad from UCLA.
    </div>
  )
}

export default App
export {Greet,Name}
export {MyName,Uni as Intro}
export const value = 1024;