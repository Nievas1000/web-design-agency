import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { ParallaxImage } from './components/ParallaxImage'
import { About } from './components/About'
import { Services } from './components/Services'
import { useState } from 'react'
import { Reasons } from './components/Reasons'
import { Calendar } from './components/Calendar'
import { ScrollAnimationContainer } from './components/ScrollContainer'
import { BecomeClient } from './components/BecomeClient/BecomeClient'
import { Steps } from './components/Steps'
import { WhyUs } from './components/WhyUs'

function App () {
  const [show, setShow] = useState(false)

  const openBecomeClient = () => {
    setShow(true)
    document.body.classList.add('body-no-scroll')
  }
  return (
    <div>
      <button id='floating-button' onClick={openBecomeClient}>+ Become a Client</button>
      {show && <BecomeClient setShow={setShow} show={show} />}
      <Navbar />
      <Header openBecomeClient={openBecomeClient} />
      <ScrollAnimationContainer direction='y' initial={300}>
        <Services openBecomeClient={openBecomeClient} />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer direction='y' initial={300}>
        <WhyUs />
      </ScrollAnimationContainer>
      <ParallaxImage openBecomeClient={openBecomeClient} />
      <ScrollAnimationContainer direction='y' initial={300}>
        <About />
      </ScrollAnimationContainer>
      <Reasons openBecomeClient={openBecomeClient} />
      <ScrollAnimationContainer direction='y' initial={300}>
        <Steps openBecomeClient={openBecomeClient} />
      </ScrollAnimationContainer>
      <ScrollAnimationContainer direction='y' initial={300}>
        <Calendar />
      </ScrollAnimationContainer>
      <Contact openBecomeClient={openBecomeClient} />
    </div>
  )
}

export default App
