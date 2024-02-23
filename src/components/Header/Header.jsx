import img from '../../assets/header-image.jpg'
import { useHeader } from '../../hooks/useHeader'
import { useTranslation } from 'react-i18next'

export const Header = ({ openBecomeClient }) => {
  const { wordIndex, words } = useHeader()
  const { t, i18n } = useTranslation()

  return (
    <header id='header'>
      <div className='container intro d-flex'>
        <div className='h-100 d-flex justify-content-center align-items-center text-header'>
          <div className='rectangle-container position-absolute'>
            <div className='rectangle-carousel'>
              {[...Array(8)].map((_, index) => (
                <div key={index} className='rectangle' />
              ))}
            </div>
          </div>
          <div className='d-block'>
            <h2 className='header-title'>
              {i18n.language === 'en' ? `${t('HEADER.item1')} ${words[wordIndex]} ${t('HEADER.item2')}` : `${t('HEADER.item1')} ${t('HEADER.item2')} ${words[wordIndex]}`}
            </h2>
            <div className='d-flex justify-content-center pt-3 subtitle-header'>
              <h4>{t('HEADER.item3')}</h4>
            </div>
            <div className='pt-3'>
              <span href='#features' className='button-more' onClick={() => openBecomeClient(false)}>
                {t('HEADER.item4')}
              </span>
            </div>
          </div>
        </div>
        <div className='d-none d-md-flex justify-content-center align-items-center w-50'>
          <div className='d-flex justify-content-center align-items-center img-header'>
            <img src={img} className='img-fluid' alt='' />
          </div>
        </div>
      </div>
    </header>
  )
}
