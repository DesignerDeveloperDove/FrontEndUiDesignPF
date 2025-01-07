import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Home from './Components/Hero.jsx'
import FrontEnd from './Pages/FrontEnd.jsx'
import UiDesign from './Pages/UiDesign.jsx'
import About from './Pages/About.jsx'
import ContactPage from './Pages/Contact.jsx'
import Cs from './Pages/CsTemplate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
