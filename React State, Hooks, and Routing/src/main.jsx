import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToggleApp } from './toggleTextApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleApp />
  </StrictMode>,
)
