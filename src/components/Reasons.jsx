import { ScrollAnimationContainer } from './ScrollContainer'
import { useTranslation } from 'react-i18next'

export const Reasons = ({ openBecomeClient }) => {
  const { t } = useTranslation()
  const reasonsData = t('REASONS', { returnObjects: true })
  return (
    <div>
      <div className='container pt-5'>
        <h1 className='d-flex justify-content-center'>{reasonsData.title}</h1>
        <div className='d-block d-md-flex pt-5 pb-5'>
          <div className='reason-list'>
            <ul>
              {reasonsData.list1.map((item, index) => {
                return (
                  <ScrollAnimationContainer key={index} direction='x' initial={-300}>
                    <li className='d-flex list-none'>
                      <div>
                        <div className='reason-item-icon'><i className={item.icon} /></div>
                      </div>
                      <div className='reason-item-description'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  </ScrollAnimationContainer>
                )
              })}
            </ul>
          </div>
          <div className='reason-list'>
            <ul>
              {reasonsData.list2.map((item, index) => {
                return (
                  <ScrollAnimationContainer key={index} direction='x' initial={300}>
                    <li className='d-flex list-none'>
                      <div>
                        <div className='reason-item-icon'><i className={item.icon} /></div>
                      </div>
                      <div className='reason-item-description'>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  </ScrollAnimationContainer>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
