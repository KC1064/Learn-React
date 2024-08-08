import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Memo from './Memo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Memo></Memo>
  </StrictMode>
)
