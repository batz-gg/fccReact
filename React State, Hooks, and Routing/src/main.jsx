import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToggleApp } from './toggleText.jsx'
import { ColorPicker } from './colorPicker.jsx'
import { FruitsSearch } from './fruitsSearch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleApp />
    <ColorPicker />
    <FruitsSearch />
  </StrictMode>,
)
