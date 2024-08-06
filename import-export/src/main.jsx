import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {Greet} from './App.jsx'
// import {value} from './App.jsx'
// import { Name } from './App.jsx'
// import { Intro } from './App.jsx'
import App,{Greet,value,Name,Intro} from './App.jsx' // Good Practice


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greet/>
    <Name></Name>
    {value}
    <Intro></Intro>
  </React.StrictMode>,
)
