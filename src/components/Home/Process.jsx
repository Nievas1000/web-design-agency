import { useTranslation } from 'react-i18next'

export const Process = () => {
  const { t } = useTranslation()
  const stepsData = t('STEPS', { returnObjects: true })

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id='process' className='container pb-5'>
      <h2>02 — {stepsData.title}</h2>
      <div className='row'>
        <div className='col-12 col-lg-6 container-cards-process'>
          {stepsData.cards.map((item, index) => {
            return (
              <div key={index} className='card-container'>
                <div className={`card process-card ${index === 1 && 'active'}`}>
                  <h3>{item.title}</h3>
                  <p className='pt-2'>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center container-process-description'>
          <div className='process-description'>
            <h3>{stepsData.description1[0]} <span className='process-description-highlighted'>{stepsData.description1[1]}</span> {stepsData.description1[2]}</h3>
            <p>{stepsData.description2}</p>
            <button className='button-more' onClick={() => scrollToSection('calendar')}>{t('NAVBAR.item5')}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
