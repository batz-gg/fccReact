import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './navbar.jsx'
import { App } from './App.jsx'
import { Footer } from './footer.jsx'
import { MoodBoard } from "./moodBoard.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <MoodBoard />
    <Footer />
  </StrictMode>,
)
