import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Services = ({ openBecomeClient }) => {
  const [serviceSelected, setServiceSelected] = useState('custom')
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
              </div>
              <div className='services-table pt-4'>
                <ul className='service-table-list'>
                  <div
                    className={`card ${serviceSelected === 'custom' ? 'active active-service' : ''}`}
                    onClick={() => setServiceSelected('custom')}
                  >
                    <span>{t('SERVICES.servicesList.title1')}</span>
                  </div>
                  <div
                    className={`card ${serviceSelected === 'funnels' ? 'active active-service' : ''}`}
                    onClick={() => setServiceSelected('funnels')}
                  >
                    <span>{t('SERVICES.servicesList.title2')}</span>
                  </div>
                  <div
                    className={`card ${serviceSelected === 'seo' ? 'active active-service' : ''}`}
                    onClick={() => setServiceSelected('seo')}
                  >
                    <span>{t('SERVICES.servicesList.title3')}</span>
                  </div>
                  <div
                    className={`card ${serviceSelected === 'maintenance' ? 'active active-service' : ''}`}
                    onClick={() => setServiceSelected('maintenance')}
                  >
                    <span>{t('SERVICES.servicesList.title4')}</span>
                  </div>
                </ul>
                <span className='service-for-title d-flex justify-content-center pt-3'>{t('SERVICES.forYou')}</span>
                {serviceSelected === 'custom' &&
                  <div className='service-for fade-in'>
                    <ul>
                      {servicesData.servicesList.description1.map((item, index) => {
                        return (
                          <li key={index}>{item}</li>
                        )
                      })}
                    </ul>
                  </div>}
                {serviceSelected === 'funnels' &&
                  <div className='service-for d-flex justify-content-center fade-in'>
                    <ul>
                      {servicesData.servicesList.description2.map((item, index) => {
                        return (
                          <li key={index}>{item}</li>
                        )
                      })}
                    </ul>
                  </div>}
                {serviceSelected === 'seo' &&
                  <div className='service-for d-flex justify-content-center fade-in'>
                    <ul>
                      {servicesData.servicesList.description3.map((item, index) => {
                        return (
                          <li key={index}>{item}</li>
                        )
                      })}
                    </ul>
                  </div>}
                {serviceSelected === 'maintenance' &&
                  <div className='service-for d-flex justify-content-center fade-in'>
                    <ul>
                      {servicesData.servicesList.description4.map((item, index) => {
                        return (
                          <li key={index}>{item}</li>
                        )
                      })}
                    </ul>
                  </div>}
              </div>
            </div>
            {serviceSelected === 'custom' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center fade-in'>
                <div className='w-100'>
                  <div className='benefit-services-items'>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center w-75'>{t('SERVICES.servicesList.subtitle1')}</h3>
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
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.title1') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'funnels' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center fade-in'>
                <div className='w-100'>
                  <div className='benefit-services-items'>
                    <div className='d-flex justify-content-center'>
                      <h3 className='text-center w-75'>{t('SERVICES.servicesList.subtitle2')}</h3>
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
                    <button className='service-button' onClick={() => openBecomeClient(true, { name: t('SERVICES.servicesList.title2') })}>{t('SERVICES.button')}</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'seo' &&
              <div className='col-12 col-lg-6 d-flex justify-content-center fade-in'>
                <div className='w-100'>
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
              <div className='col-12 col-lg-6 d-flex justify-content-center fade-in'>
                <div className='w-100'>
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

      </>
    </div>
  )
}
