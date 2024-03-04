import { useTranslation } from 'react-i18next'
import { useScrollEffect } from '../../hooks/useScrollEfect'

export const Reasons = ({ openBecomeClient }) => {
  const [visible] = useScrollEffect('scrollEffectReasons')

  const { t } = useTranslation()
  const reasonsData = t('REASONS', { returnObjects: true })
  return (
    <div className={` scrollEffectReasons ${visible && 'visible'}`}>
      <div className='container pt-5'>
        <h2 className='d-flex justify-content-center text-center'>{reasonsData.title}</h2>
        <div className='d-block d-md-flex pt-5 pb-5'>
          <div className='reason-list'>
            <ul>
              {reasonsData.list1.map((item, index) => {
                return (
                  <li key={index} className='d-flex list-none'>
                    <div>
                      <div className='reason-item-icon'><i className={item.icon} /></div>
                    </div>
                    <div className='reason-item-description'>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='reason-list'>
            <ul>
              {reasonsData.list2.map((item, index) => {
                return (
                  <li key={index} className='d-flex list-none'>
                    <div>
                      <div className='reason-item-icon'><i className={item.icon} /></div>
                    </div>
                    <div className='reason-item-description'>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
