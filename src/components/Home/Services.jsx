import { useState } from 'react'
import image1 from '../../assets/mobile-adaptation.webp'
import image2 from '../../assets/web-solutions.webp'
import image3 from '../../assets/web-development.webp'
import { useTranslation } from 'react-i18next'

export const Services = ({ openBecomeClient }) => {
  const [serviceSelected, setServiceSelected] = useState('funnels')
  const { t } = useTranslation()
  const servicesData = t('SERVICES', { returnObjects: true })

  return (
    <div id='services'>
      <>
        <div className='container position-relative pb-5'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
              <div>
                <h2>01 — {t('SERVICES.title')}</h2>
                <h3 className='approach-description w-100'>{t('SERVICES.description')}</h3>
              </div>
              <div className='services-table pt-5'>
                <ul>
                  <li className={serviceSelected === 'funnels' ? 'active-service' : ''} onClick={() => setServiceSelected('funnels')}>
                    {t('SERVICES.servicesList.title1')}
                  </li>
                  <li className={serviceSelected === 'custom' ? 'active-service' : ''} onClick={() => setServiceSelected('custom')}>
                    {t('SERVICES.servicesList.title2')}
                  </li>
                  <li className={serviceSelected === 'seo' ? 'active-service' : ''} onClick={() => setServiceSelected('seo')}>
                    {t('SERVICES.servicesList.title3')}
                  </li>
                  <li className={serviceSelected === 'maintenance' ? 'active-service' : ''} onClick={() => setServiceSelected('maintenance')}>
                    {t('SERVICES.servicesList.title4')}
                  </li>
                </ul>
              </div>
            </div>
            {serviceSelected === 'custom' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center fade-in'>
                <div>
                  <div className='benefit-services-items'>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center w-75'>{t('SERVICES.servicesList.subtitle2')}</h3>
                    </div>
                    <ul>
                      {servicesData.servicesList.items1.map((item, index) => {
                        return (
                          <li key={index} className='p-3'><i className={`${item.icon} pe-2`} /> {item.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className='pt-3 d-flex justify-content-center'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.title2') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'funnels' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center fade-in'>
                <div>
                  <div className='benefit-services-items'>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center w-75'>{t('SERVICES.servicesList.subtitle1')}</h3>
                    </div>
                    <ul>
                      {servicesData.servicesList.items2.map((item, index) => {
                        return (
                          <li key={index} className='p-3'><i className={`${item.icon} pe-2`} /> {item.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className='pt-3 d-flex justify-content-center'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.title1') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'seo' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center fade-in'>
                <div>
                  <div className='benefit-services-items'>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center w-75'>{t('SERVICES.servicesList.subtitle3')}</h3>
                    </div>
                    <ul>
                      {servicesData.servicesList.items3.map((item, index) => {
                        return (
                          <li key={index} className='p-3'><i className={`${item.icon} pe-2`} /> {item.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className='pt-3 d-flex justify-content-center'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.title3') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'maintenance' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center fade-in'>
                <div>
                  <div className='benefit-services-items'>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center w-75'>{t('SERVICES.servicesList.subtitle4')}</h3>
                    </div>
                    <ul>
                      {servicesData.servicesList.items4.map((item, index) => {
                        return (
                          <li key={index} className='p-3'><i className={`${item.icon} pe-2`} /> {item.name}</li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className='pt-3 d-flex justify-content-center'>
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.title4') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className='container pb-5'>
          <div className='row justify-content-center pt-5 mb-5 h-100 g-0 approach-container'>
            <div className='col mb-4 approach flex-grow-1'>
              <img src={image1} alt='Responsive design' className='img-fluid' />
              <div className='overlay-apro pt-4'>
                <h4>{servicesData.servicesCards[0].title}</h4>
                <div className='position-absolute bottom-0'>
                  <p>
                    {servicesData.servicesCards[0].description}
                  </p>
                  <ul className='tech-approach'>
                    <li>{servicesData.servicesCards[0].items[0]}</li>
                    <li>{servicesData.servicesCards[0].items[1]}</li>
                    <li>{servicesData.servicesCards[0].items[2]}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col mb-4 approach flex-grow-1'>
              <img src={image2} alt='Solid solutions for your coaching website' className='img-fluid' />
              <div className='overlay-apro'>
                <h4>{servicesData.servicesCards[1].title}</h4>
                <div className='position-absolute bottom-0'>
                  <p>
                    {servicesData.servicesCards[1].description}
                  </p>
                  <ul className='tech-approach'>
                    <li>{servicesData.servicesCards[1].items[0]}</li>
                    <li>{servicesData.servicesCards[1].items[1]}</li>
                    <li>{servicesData.servicesCards[1].items[2]}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col mb-4 approach flex-grow-1'>
              <img src={image3} alt='Web development for your coaching website' className='img-fluid' />
              <div className='overlay-apro'>
                <h4>{servicesData.servicesCards[2].title}</h4>
                <div className='position-absolute bottom-0'>
                  <p>
                    {servicesData.servicesCards[2].description}
                  </p>
                  <ul className='tech-approach'>
                    <li>{servicesData.servicesCards[2].items[0]}</li>
                    <li>{servicesData.servicesCards[2].items[1]}</li>
                    <li>{servicesData.servicesCards[2].items[2]}</li>
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
