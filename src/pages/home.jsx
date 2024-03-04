import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/Home/Header.jsx'
import { Navbar } from '../components/Home/Navbar.jsx'
import { Contact } from '../components/Home/Contact.jsx'
import { ParallaxImage } from '../components/Home/ParallaxImage.jsx'
import { About } from '../components/Home/About.jsx'
import { Services } from '../components/Home/Services.jsx'
import { Reasons } from '../components/Home/Reasons.jsx'
import { Calendar } from '../components/Home/Calendar.jsx'
import { BecomeClient } from '../components/Home/BecomeClient/BecomeClient.jsx'
import { Steps } from '../components/Home/Steps.jsx'
import { WhyUs } from '../components/Home/WhyUs.jsx'
import { Templates } from '../components/Home/Templates.jsx'

export const Home = () => {
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
