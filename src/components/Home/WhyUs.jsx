import { useTranslation } from 'react-i18next'

export const WhyUs = () => {
  const { t } = useTranslation()
  const whyData = t('WHYUS', { returnObjects: true })
  return (
    <div className='container d-flex justify-content-center pb-5 pt-3'>
      <div>
        <div className='text-center'>
          <span>{whyData.title1}</span>
          <div className='d-flex justify-content-center'>
            <h2 className='width-us'>{whyData.title2}</h2>
          </div>
        </div>
        <div className='pt-5'>
          <div className='d-flex justify-content-left'>
            <div className='width-us'>
              <span className='fs-5'>{whyData.items[0].section}</span>
              <h4 className='pt-3'>{whyData.items[0].title}</h4>
              <p>{whyData.items[0].description1} <span className='fw-bold'>{whyData.items[0].description2}</span></p>
              <p>{whyData.items[0].description3}</p>
              <ul>
                {whyData.items[0].list.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            <div className='width-us pt-3'>
              <span className='fs-5'>{whyData.items[1].section}</span>
              <h4 className='pt-3'>{whyData.items[1].title}</h4>
              <p>{whyData.items[1].description}</p>
              <ul>
                {whyData.items[1].list.map((item, index) => {
                  return (
                    <li key={index}><span className='fw-bold'>{item.name}</span> {item.text}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-left'>
            <div className='width-us pt-3'>
              <span className='fs-5'>{whyData.items[2].section}</span>
              <h4 className='pt-3'>{whyData.items[2].title}</h4>
              <p>{whyData.items[2].description}</p>
              <ul>
                {whyData.items[2].list.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='d-flex justify-content-end pb-5'>
            <div className='width-us pt-3'>
              <span className='fs-5'>{whyData.items[3].section}</span>
              <h4 className='pt-3'>{whyData.items[3].title}</h4>
              <p>{whyData.items[3].description1} </p>
              <p>{whyData.items[3].description2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
