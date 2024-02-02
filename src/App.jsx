import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { ParallaxImage } from './components/ParallaxImage'
import { About } from './components/About'
import { Services } from './components/Services'
import { useState } from 'react'
import { BecomeClient } from './components/BecomeClient'
import { Reasons } from './components/Reasons'

function App () {
  const [show, setShow] = useState(false)

  const openBecomeClient = () => {
    setShow(true)
    document.body.classList.add('body-no-scroll')
  }
  return (
    <div>
      <button id='floating-button' onClick={openBecomeClient}>+ Become a Client</button>
      {show && <BecomeClient setShow={setShow} />}
      <Navbar />
      <Header />
      <Services />
      <ParallaxImage />
      <About />
      <Reasons openBecomeClient={openBecomeClient} />
      <Contact />
    </div>
  )
}

export default App
