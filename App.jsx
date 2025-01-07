import { useState } from 'react'
import './App.css'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'//this is for the link tags and is very important
//hashrouter is what we wrap the entire app in, routs is all potential routs available, and route is the specific rout
import './index.css'
import TailsAdoptionCS from './Components/TailsCS.jsx'
import Site from './Pages/HomePage.jsx'
import ReactCS from './Components/ReactCS.jsx'
import InternshipCs from './Components/InternshipCS.jsx'
import EsiCs from './Components/EsiCS.jsx'
import FantaCS from './Components/FantaCS.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
             <Route path="/" element={<Site />} /> {/* at the path of ___ we want to render its own page*/}
             <Route path="/ReactProject" element={<ReactCS />} /> 
             <Route path="/FantaProject" element={<FantaCS />} /> 
             <Route path="/TailsProject" element={<TailsAdoptionCS />} /> 
             <Route path="/Internship" element={<InternshipCs />} /> 
             <Route path="/ESI" element={<EsiCs />} />   
          </Routes>
      </Router>
    </>
  )
}

export default App
