import { useTranslation } from 'react-i18next'
import { useScrollEffect } from '../hooks/useScrollEfect'

export const WhyUs = () => {
  const [visible] = useScrollEffect('scrollEffectWhy')
  const { t } = useTranslation()
  const whyData = t('WHYUS', { returnObjects: true })
  return (
    <div className={`container d-flex justify-content-center pb-5 scrollEffectWhy ${visible && 'visible'}`}>
      <div>
        <div className='text-center'>
          <h2>{whyData.title}</h2>
          <p className='fw-bold pt-2'>{whyData.description1}</p>
          <p>{whyData.description2}</p>
          <p className='fw-bold pb-3'>{whyData.description3}</p>
        </div>
        <div className='row pt-4 pb-2 why-container'>
          {whyData.items.map((item, index) => {
            return (
              <div key={index} className='col-md-6'>
                <div>
                  <p className='fw-bold'><i className='fa-solid fa-arrow-right' /> {item.title}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
