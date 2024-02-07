import img1 from '../../assets/project-1.png'
import img2 from '../../assets/project-2.png'
import img3 from '../../assets/project-5.png'
import img4 from '../../assets/project-6.png'
import { Image } from './Image'
import { useHeader } from '../../hooks/useHeader'
import { useTranslation } from 'react-i18next'

export const Header = ({ openBecomeClient }) => {
  const { wordIndex, words } = useHeader()
  const { t } = useTranslation()

  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay h-100' style={{ display: 'flex' }}>
          <div className='img-container w-0'>
            <div>
              <Image src={img1} alt='Left Top' from={{ opacity: 0, transform: 'translateX(-100%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(-15deg)' }} />
              <Image src={img2} alt='Left Bottom' from={{ opacity: 0, transform: 'translateX(-100%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(-15deg)' }} />
            </div>
          </div>
          <div className='container h-100 d-flex justify-content-center align-items-center' style={{ zIndex: '10' }}>
            <div className='rectangle-container position-absolute'>
              <div className='rectangle-carousel'>
                {[...Array(8)].map((_, index) => (
                  <div key={index} className='rectangle' />
                ))}
              </div>
            </div>
            <div className='d-block'>
              <h1 className='header-title text-center'>
                {t('HEADER.item1')}
              </h1>
              <h1 className='header-title text-center'>
                {words[wordIndex]}
              </h1>
              <div className='d-flex justify-content-center pt-3 subtitle-header'>
                <h4 className='text-center'>{t('HEADER.item2')}</h4>
              </div>
              <div className='d-flex justify-content-center pt-3'>
                <span href='#features' className='button-more' onClick={openBecomeClient}>
                  {t('HEADER.item3')}
                </span>
              </div>
            </div>
          </div>
          <div className='img-container' style={{ right: '0' }}>
            <div>
              <Image src={img3} alt='Right Top' from={{ opacity: 0, transform: 'translateX(60%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(15deg)' }} />
              <Image src={img4} alt='Right Bottom' from={{ opacity: 0, transform: 'translateX(60%) rotate(180deg)' }} to={{ opacity: 1, transform: 'translateX(0) rotate(15deg)' }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
