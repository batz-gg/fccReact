import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToggleApp } from './toggleText.jsx'
import { ColorPicker } from './colorPicker.jsx'
import { FruitsSearch } from './fruitsSearch.jsx'
import { OTPGenerator } from './otpGenerator.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleApp />
    <ColorPicker />
    <FruitsSearch />
    <OTPGenerator />
  </StrictMode>,
)
