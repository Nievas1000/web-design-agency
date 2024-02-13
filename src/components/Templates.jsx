import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdClose } from 'react-icons/md'
import { useTemplate } from '../hooks/useTemplate'
import { useTranslation } from 'react-i18next'

export const Templates = () => {
  const { selectedImageIndex, openGallery, images, closeGallery, showCarousel, settings, currentImages } = useTemplate()
  const { t } = useTranslation()

  return (
    <div id='templates' className='container pb-5'>
      <h1 className='text-center mt-4 mb-5'>{t('TEMPLATE.title')}</h1>
      <div className='row justify-content-center'>
        {images.map((image, index) => (
          <div key={index} className='col-12 col-sm-6 col-md-4 mb-4'>
            <h5 className='d-flex justify-content-center text-center'>{image.title}</h5>
            <div className='template-container'>
              <img src={image.main} alt={`Template ${index + 1}`} className='img-fluid' />
              <div className='overlay-template'>
                <button onClick={() => openGallery(index)} className='view-more-btn'>View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showCarousel && currentImages.length > 0 && (
        <div className='carousel-container'>
          <button onClick={closeGallery} className='close-btn'><MdClose size={35} /></button>
          <div className='carousel'>
            <Slider {...settings} initialSlide={selectedImageIndex}>
              {currentImages.map((image, index) => (
                <div key={index}>
                  <p className='d-flex justify-content-center title-carousel'>{index + 1}</p>
                  <img src={image} alt={`Template ${selectedImageIndex + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  )
}
