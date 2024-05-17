import { useTranslation } from 'react-i18next'

export const Steps = ({ openBecomeClient }) => {
  const { t } = useTranslation()
  const stepsData = t('STEPS', { returnObjects: true })
  return (
    <div id='process' className='position-relative'>
      <div className='container pb-5'>
        <div className='d-block d-md-flex pt-5'>
          <div className='steps-list'>
            <div className='step-item'>
              <h2>03 - {stepsData.title}</h2>
              <h4 className='pt-5'>1. {stepsData.item1.title}</h4>
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
              <h4>2. {stepsData.item2.title}</h4>
              <p>{stepsData.item2.description1} <a href='#calendar'>{stepsData.item2.description2}</a> {stepsData.item2.description3} <span onClick={() => openBecomeClient(false)}>{stepsData.item2.description4}</span> {stepsData.item2.description5}</p>
            </div>
          </div>
          <div>
            {stepsData.list.map((item, index) => {
              return (
                <div key={index} className='step-item'>
                  <h4>{item.title}</h4>
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
