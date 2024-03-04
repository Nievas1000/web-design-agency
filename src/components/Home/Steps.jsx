import { useTranslation } from 'react-i18next'

export const Steps = ({ openBecomeClient }) => {
  const { t } = useTranslation()
  const stepsData = t('STEPS', { returnObjects: true })
  return (
    <div className='position-relative'>
      <div className='container pt-5 pb-5'>
        <h2 className='d-flex justify-content-center'>{stepsData.title}</h2>
        <div className='d-block d-md-flex pt-5'>
          <div className='steps-list'>
            <div className='step-item'>
              <h3>1. {stepsData.item1.title}</h3>
              <p>{stepsData.item1.description}</p>
              <ul>
                {stepsData.item1.list.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
              <p>{stepsData.item1.footer1} <a href='#services'>{stepsData.item1.footer2}</a> {stepsData.item1.footer3}</p>
            </div>
            <div className='step-item'>
              <h3>2. {stepsData.item2.title}</h3>
              <p>{stepsData.item2.description1} <a href='#calendar'>{stepsData.item2.description2}</a> {stepsData.item2.description3} <span onClick={() => openBecomeClient(false)}>{stepsData.item2.description4}</span> {stepsData.item2.description5}</p>
            </div>
          </div>
          <div>
            {stepsData.list.map((item, index) => {
              return (
                <div key={index} className='step-item'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
