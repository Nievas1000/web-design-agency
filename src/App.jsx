import { Header } from './components/Header.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Contact } from './components/Contact.jsx'
import { ParallaxImage } from './components/ParallaxImage.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { useState } from 'react'
import { Reasons } from './components/Reasons.jsx'
import { Calendar } from './components/Calendar.jsx'
import { BecomeClient } from './components/BecomeClient/BecomeClient.jsx'
import { Steps } from './components/Steps.jsx'
import { WhyUs } from './components/WhyUs.jsx'
import { Templates } from './components/Templates.jsx'
import { useTranslation } from 'react-i18next'

function App () {
  const [show, setShow] = useState(false)
  const [serviceInfo, setServiceInfo] = useState()
  const { t } = useTranslation()

  const openBecomeClient = (service, data = null) => {
    if (service) {
      setServiceInfo(data)
    } else {
      setServiceInfo(null)
    }
    setShow(true)
    document.body.classList.add('body-no-scroll')
  }
  return (
    <div>
      <button id='floating-button' className='d-none d-md-block' onClick={() => openBecomeClient(false)}>+ {t('BECOMECLIENT.becomeButton')}</button>
      {show && <BecomeClient setShow={setShow} show={show} serviceInfo={serviceInfo} />}
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
