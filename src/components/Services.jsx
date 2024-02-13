import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import image1 from '../assets/service1.png'
import image2 from '../assets/service2.png'
import image3 from '../assets/service3.png'
import { useTranslation } from 'react-i18next'

export const Services = ({ openBecomeClient }) => {
  const [serviceSelected, setServiceSelected] = useState('custom')
  const { t } = useTranslation()

  return (
    <div id='services' className='pb-5'>
      <div className='h-100'>
        <div className='container pt-5'>
          <h4>01 — {t('SERVICES.title')}</h4>
          <p className='approach-description'>{t('SERVICES.description')}</p>
        </div>

        <div className='position-absolute er'>
          <Spline scene='https://prod.spline.design/NESURyfSGpm-aX7P/scene.splinecode' />
        </div>
        <div className='container position-relative pt-5 pb-5'>
          <div className='row pt-3'>
            <div className='col-12 col-lg-4 p-5'>
              <div className='services-table'>
                <ul>
                  <li className={serviceSelected === 'custom' ? 'active-service' : ''} onClick={() => setServiceSelected('custom')}>
                    {t('SERVICES.servicesList.item1')}
                  </li>
                  <li className={serviceSelected === 'template' ? 'active-service' : ''} onClick={() => setServiceSelected('template')}>
                    {t('SERVICES.servicesList.item2')}
                  </li>
                  <li className={serviceSelected === 'help' ? 'active-service' : ''} onClick={() => setServiceSelected('help')}>
                    {t('SERVICES.servicesList.item3')}
                  </li>
                  <li className={serviceSelected === 'maintenance' ? 'active-service' : ''} onClick={() => setServiceSelected('maintenance')}>
                    {t('SERVICES.servicesList.item4')}
                  </li>
                </ul>
              </div>
            </div>
            {serviceSelected === 'custom' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h2>{t('SERVICES.servicesList.subtitle1')}</h2>
                  <p className='pt-3'>{t('SERVICES.servicesList.description1')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'template' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h2>{t('SERVICES.servicesList.subtitle2')}</h2>
                  <p className='pt-3'>{t('SERVICES.servicesList.description2')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'help' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h2>{t('SERVICES.servicesList.subtitle3')}</h2>
                  <p className='pt-3'>{t('SERVICES.servicesList.description3')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'maintenance' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h2>{t('SERVICES.servicesList.subtitle4')}</h2>
                  <p className='pt-3'>{t('SERVICES.servicesList.description4')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className='container pb-5'>
          <div className='row justify-content-center pt-5 mb-5 h-100 g-0 approach-container'>
            <div className='col mb-4 approach flex-grow-1'>
              <img src={image1} alt='image1' className='img-fluid' />
              <div className='overlay-apro pt-5'>
                <h1>{t('SERVICES.servicesCards.title1')}</h1>
                <div className='position-absolute bottom-0'>
                  <p>
                    {t('SERVICES.servicesCards.description1')}
                  </p>
                  <ul className='tech-approach'>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col mb-4 approach flex-grow-1'>
              <img src={image2} alt='image1' className='img-fluid' />
              <div className='overlay-apro'>
                <h1>{t('SERVICES.servicesCards.title2')}</h1>
                <div className='position-absolute bottom-0'>
                  <p>
                    {t('SERVICES.servicesCards.description2')}
                  </p>
                  <ul className='tech-approach'>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col mb-4 approach flex-grow-1'>
              <img src={image3} alt='image1' className='img-fluid' />
              <div className='overlay-apro'>
                <h1>{t('SERVICES.servicesCards.title3')}</h1>
                <div className='position-absolute bottom-0'>
                  <p>
                    {t('SERVICES.servicesCards.description3')}
                  </p>
                  <ul className='tech-approach'>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
