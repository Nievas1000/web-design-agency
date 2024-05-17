import img from '../../assets/header-image.webp'
import { useHeader } from '../../hooks/useHeader'
import { useTranslation } from 'react-i18next'

export const Header = ({ openBecomeClient }) => {
  const { wordIndex, words } = useHeader()
  const { t, i18n } = useTranslation()

  return (
    <header id='header'>
      <div className='container intro d-flex'>
        <div className='h-100 d-flex justify-content-center align-items-center text-header'>
          <div className='d-block text-left'>
            <h1 className='header-title'>
              {i18n.language === 'en' ? `${t('HEADER.item1')} ${words[wordIndex]} ${t('HEADER.item2')}` : `${t('HEADER.item1')} ${t('HEADER.item2')} ${words[wordIndex]}`}
            </h1>
            <div className='d-flex justify-content-center pt-3 subtitle-header'>
              <span>{t('HEADER.item3')}</span>
            </div>
            <div className='pt-4'>
              <span href='#features' className='button-more' onClick={() => openBecomeClient(false)}>
                {t('HEADER.item4')}
              </span>
            </div>
          </div>
        </div>
        <div className='d-none d-md-flex justify-content-center align-items-center w-50'>
          <div className='d-flex justify-content-center align-items-center img-header'>
            <img src={img} className='img-fluid' alt='Web design agency main image' />
          </div>
        </div>
      </div>
    </header>
  )
}
