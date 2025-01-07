import { useState } from 'react'
import Home from './Home.jsx'
import FrontEnd from './FrontEnd.jsx'
import UiDesign from './UiDesign.jsx'
import About from './About.jsx'
import ContactPage from './Contact.jsx'

function Site() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <FrontEnd />
      <UiDesign />
      <About />
      <ContactPage />
    </>
  )
}

export default Site
