import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Parent from './Parent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Parent/>
  </StrictMode>,
)
