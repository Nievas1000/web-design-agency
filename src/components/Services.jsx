import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import image1 from '../assets/service1.png'
import image2 from '../assets/service2.png'
import image3 from '../assets/service3.png'
import { useTranslation } from 'react-i18next'
import { useScrollEffect } from '../hooks/useScrollEfect'

export const Services = ({ openBecomeClient }) => {
  const [serviceSelected, setServiceSelected] = useState('funnels')
  const [visible] = useScrollEffect('scrollEffectServices')
  const { t } = useTranslation()

  return (
    <div id='services' className={`scrollEffectServices ${visible && 'visible'}`}>
      <>
        <div className='container pt-5'>
          <h2>01 — {t('SERVICES.title')}</h2>
          <h3 className='approach-description'>{t('SERVICES.description')}</h3>
        </div>

        <div className='position-absolute d-none d-md-block er'>
          <Spline scene='https://prod.spline.design/NESURyfSGpm-aX7P/scene.splinecode' />
        </div>
        <div className='container position-relative pt-2 pb-5'>
          <div className='row'>
            <div className='col-12 col-lg-4 p-5'>
              <div className='services-table'>
                <ul>
                  <li className={serviceSelected === 'funnels' ? 'active-service' : ''} onClick={() => setServiceSelected('funnels')}>
                    {t('SERVICES.servicesList.item1')}
                  </li>
                  <li className={serviceSelected === 'custom' ? 'active-service' : ''} onClick={() => setServiceSelected('custom')}>
                    {t('SERVICES.servicesList.item2')}
                  </li>
                  <li className={serviceSelected === 'template' ? 'active-service' : ''} onClick={() => setServiceSelected('template')}>
                    {t('SERVICES.servicesList.item3')}
                  </li>
                  <li className={serviceSelected === 'seo' ? 'active-service' : ''} onClick={() => setServiceSelected('seo')}>
                    {t('SERVICES.servicesList.item4')}
                  </li>
                  <li className={serviceSelected === 'maintenance' ? 'active-service' : ''} onClick={() => setServiceSelected('maintenance')}>
                    {t('SERVICES.servicesList.item5')}
                  </li>
                </ul>
              </div>
            </div>
            {serviceSelected === 'funnels' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h3>{t('SERVICES.servicesList.subtitle1')}</h3>
                  <p className='pt-3'>{t('SERVICES.servicesList.description1')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.item1') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'custom' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h3>{t('SERVICES.servicesList.subtitle2')}</h3>
                  <p className='pt-3'>{t('SERVICES.servicesList.description2')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.item2') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'template' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h3>{t('SERVICES.servicesList.subtitle3')}</h3>
                  <p className='pt-3'>{t('SERVICES.servicesList.description3')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.item3') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'seo' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h3>{t('SERVICES.servicesList.subtitle4')}</h3>
                  <p className='pt-3'>{t('SERVICES.servicesList.description4')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.item4') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'maintenance' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h3>{t('SERVICES.servicesList.subtitle5')}</h3>
                  <p className='pt-3'>{t('SERVICES.servicesList.description5')}</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.item5') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className='container pb-5'>
          <div className='row justify-content-center pt-5 mb-5 h-100 g-0 approach-container'>
            <div className='col mb-4 approach flex-grow-1'>
              <img src={image1} alt='Responsive design' className='img-fluid' />
              <div className='overlay-apro pt-5'>
                <h2>{t('SERVICES.servicesCards.title1')}</h2>
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
              <img src={image2} alt='Solid solutions for your coaching website' className='img-fluid' />
              <div className='overlay-apro'>
                <h2>{t('SERVICES.servicesCards.title2')}</h2>
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
              <img src={image3} alt='Web development for your coaching website' className='img-fluid' />
              <div className='overlay-apro'>
                <h2>{t('SERVICES.servicesCards.title3')}</h2>
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
      </>
    </div>
  )
}
