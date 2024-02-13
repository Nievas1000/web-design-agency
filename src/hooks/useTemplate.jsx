import { useState } from 'react'
import { images } from '../utils/carouselTemplate'

export const useTemplate = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [showCarousel, setShowCarousel] = useState(false)
  const [currentImages, setCurrentImages] = useState([])

  const openGallery = (index) => {
    setSelectedImageIndex(index)
    setCurrentImages(images[index].imagesData)
    console.log(currentImages)
    setShowCarousel(true)
    document.body.classList.add('body-no-scroll')
  }

  const closeGallery = () => {
    setSelectedImageIndex(null)
    setCurrentImages([])
    setShowCarousel(false)
    document.body.classList.remove('body-no-scroll')
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500
  }

  return { selectedImageIndex, openGallery, images, closeGallery, showCarousel, settings, currentImages }
}
