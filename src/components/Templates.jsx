import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MdClose } from 'react-icons/md'
import { images } from '../utils/carouselTemplate'

export const Templates = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [showCarousel, setShowCarousel] = useState(false)
  const [currentImages, setCurrentImages] = useState([])

  const openGallery = (index) => {
    setSelectedImageIndex(index)
    setCurrentImages(images[index].imagesData)
    setShowCarousel(true)
  }

  const closeGallery = () => {
    setSelectedImageIndex(null)
    setCurrentImages([])
    setShowCarousel(false)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500
  }

  return (
    <div className='container pb-5'>
      <h1 className='text-center mt-4 mb-5'>Templates</h1>
      <div className='row justify-content-center'>
        {images.map((image, index) => (
          <div key={index} className='col-12 col-sm-6 col-md-4 mb-4'>
            <div className='template-container'>
              <img src={image.main} alt={`Template ${index + 1}`} className='img-fluid' />
              <div className='overlay-template'>
                <button onClick={() => openGallery(index)} className='view-more-btn'>View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showCarousel && (
        <div className='gallery-modal'>
          <button onClick={closeGallery} className='close-btn'><MdClose size={35} /></button>
          <Slider {...settings} initialSlide={selectedImageIndex}>
            {currentImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Template ${selectedImageIndex + 1}`} className='img-fluid' />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  )
}
