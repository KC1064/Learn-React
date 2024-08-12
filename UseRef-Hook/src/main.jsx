import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example_01 from './Example_01'
import Example_02 from './Example_02'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example_01></Example_01>
    <hr />
    <Example_02/>
  </StrictMode>
)
