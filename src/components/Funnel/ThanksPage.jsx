import { useTranslation } from 'react-i18next'
import check from '../../assets/check.webp'
import { Calendar } from '../Home/Calendar'

export const ThanksPage = () => {
  const { t } = useTranslation()
  const guide = t('THANKS-GUIDE', { returnObjects: true })
  return (
    <div>
      <div className='container pt-5'>
        <div className='d-flex justify-content-center'>
          <div className='text-center w-75'>
            <h1 className='fw-bold'><span className='congrats-funnel'>{guide.title1}</span> {guide.title2}</h1>
            <p className='pt-2'>{guide.description}</p>
          </div>
        </div>
        <div className='d-flex flex-wrap text-center'>
          <div className='col-12 col-lg-4 d-flex align-items-end justify-content-center container-step'>
            <div>
              <h4>{guide.step1Title}</h4>
              <p>{guide.step1Description}</p>
            </div>
          </div>
          <div className='col-12 col-lg-4 container-step'>
            <div>
              <img src={check} className='img-check-guide pb-3' style={{ maxWidth: '100%', height: 'auto' }} />
              <h4>{guide.step2Title}</h4>
              <p>{guide.step2Description}</p>
            </div>
          </div>
          <div className='col-12 col-lg-4 d-flex align-items-end justify-content-center container-step'>
            <div>
              <h4>{guide.step3Title}</h4>
              <p>{guide.step3Description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5'>
        <Calendar />
      </div>
      <footer className='d-flex align-items-center'>
        <h6 className='d-flex justify-content-center w-100'>
          Copyright © 2024 All Rights Reserved - Nevve
        </h6>
      </footer>
    </div>
  )
}
