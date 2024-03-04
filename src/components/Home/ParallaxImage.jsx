import { useTranslation } from 'react-i18next'
import background from '../../assets/parallax-background.webp'
import cover from '../../assets/parallax-cover.webp'
import { Parallax } from 'react-parallax'

export const ParallaxImage = ({ openBecomeClient }) => {
  const { t } = useTranslation()

  return (
    <div>
      <Parallax bgImage={background} strength={500}>
        <div>
          <div className='d-flex justify-content-center cover-image'>
            <img src={cover} alt='Coaching website example' />
          </div>
          <div className='parallax-container'>
            <div className='position-absolute text-container'>
              <p>{t('SERVICES.parallax1')}</p>
              <p>{t('SERVICES.parallax2')}</p>
              <div className='d-md-flex justify-content-center gap-2'>
                <button className='button-parallax get-contact mt-1' onClick={() => openBecomeClient(false)}>{t('BECOMECLIENT.becomeButton')}</button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  )
}
