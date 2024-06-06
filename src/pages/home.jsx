import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/Home/Header.jsx'
import { Navbar } from '../components/Home/Navbar.jsx'
import { Contact } from '../components/Home/Contact.jsx'
import { ParallaxImage } from '../components/Home/ParallaxImage.jsx'
import { Services } from '../components/Home/Services.jsx'
import { Reasons } from '../components/Home/Reasons.jsx'
import { Calendar } from '../components/Home/Calendar.jsx'
import { BecomeClient } from '../components/Home/BecomeClient/BecomeClient.jsx'
import { WhyUs } from '../components/Home/WhyUs.jsx'
import { Process } from '../components/Home/Process.jsx'
import { Portfolio } from '../components/Home/Portfolio.jsx'

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
      <Process />
      <ParallaxImage openBecomeClient={openBecomeClient} />
      <Portfolio />
      <Reasons openBecomeClient={openBecomeClient} />
      <Calendar />
      <Contact openBecomeClient={openBecomeClient} />
    </div>
  )
}
