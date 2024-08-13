import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Fetch from './Fetch'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Fetch/>
  </StrictMode>,
)
