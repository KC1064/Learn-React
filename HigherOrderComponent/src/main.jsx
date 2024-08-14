import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter></ClickCounter>
    <HoverCounter></HoverCounter>
  </StrictMode>,
)
