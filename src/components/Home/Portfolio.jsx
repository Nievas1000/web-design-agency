import image1 from '../../assets/zaida.webp'
import image2 from '../../assets/james.webp'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    title: 'Zaida Project',
    imageUrl: image1,
    link: 'https://zaidabrazon.com'
  },
  {
    title: 'James Project',
    imageUrl: image2,
    link: 'https://james-clear.netlify.app'
  }
]

export const Portfolio = () => {
  const { t } = useTranslation()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  }

  const handleImageClick = (link) => {
    window.open(link, '_blank')
  }
  return (
    <div id='portfolio' className='pt-5 pb-5'>
      <h2 className='container'>03 — {t('PORTFOLIO.title')}</h2>
      <div className='portfolio-carousel-section'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className='carousel-item d-flex justify-content-center'>
              <div>
                <img src={project.imageUrl} alt={project.title} className='carousel-image' />
                <div className='d-flex justify-content-center'>
                  <button className='button-more' onClick={() => handleImageClick(project.link)}>{t('PORTFOLIO.button')}</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
