import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { ParallaxImage } from './components/ParallaxImage'
import { About } from './components/About'
import { Services } from './components/Services'
import { useState } from 'react'
import { Reasons } from './components/Reasons'
import { Calendar } from './components/Calendar'
import { BecomeClient } from './components/BecomeClient/BecomeClient'
import { Steps } from './components/Steps'
import { WhyUs } from './components/WhyUs'
import { Templates } from './components/Templates'
import { useTranslation } from 'react-i18next'

function App () {
  const [show, setShow] = useState(false)
  const { t } = useTranslation()

  const openBecomeClient = () => {
    setShow(true)
    document.body.classList.add('body-no-scroll')
  }
  return (
    <div>
      <button id='floating-button' className='d-none d-md-block' onClick={openBecomeClient}>+ {t('BECOMECLIENT.becomeButton')}</button>
      {show && <BecomeClient setShow={setShow} show={show} />}
      <Navbar />
      <Header openBecomeClient={openBecomeClient} />
      <Services openBecomeClient={openBecomeClient} />
      <WhyUs />
      <ParallaxImage openBecomeClient={openBecomeClient} />
      <About />
      <Reasons openBecomeClient={openBecomeClient} />
      <Steps openBecomeClient={openBecomeClient} />
      <Templates />
      <Calendar />
      <Contact openBecomeClient={openBecomeClient} />
    </div>
  )
}

export default App
