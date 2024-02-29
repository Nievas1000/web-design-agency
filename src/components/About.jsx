import { useState } from 'react'
import clock from '../assets/clock.gif'
import web from '../assets/web-about.gif'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import dev from '../assets/about-dev.jpg'
import { useTranslation } from 'react-i18next'
import { useScrollEffect } from '../hooks/useScrollEfect'

export const About = () => {
  const [section, setSection] = useState('')
  const [visible] = useScrollEffect('scrollEffectAbout')
  const { t } = useTranslation()
  const aboutData = t('ABOUT', { returnObjects: true })

  return (
    <div id='about' className={`pb-5 scrollEffectAbout ${visible && 'visible'}`}>
      <div className='container position-relative d-block d-lg-flex'>
        <div className='col-12 col-lg-6'>
          <div className='pt-5'>
            <h2>02 — {aboutData.title}</h2>
            <h3 className='approach-description w-100'>{aboutData.description}</h3>
          </div>
          <div className='row gap-1'>
            <div className='col-md-5 d-flex card-about'>
              <div className='card-about-info'>
                <p className='text-black number-card'>+3</p>
                <p className='text-white'>{aboutData.card1}</p>
              </div>
              <img src={clock} alt='Years of experience' />
            </div>
            <div className='col-md-5 d-flex card-about'>
              <div className='card-about-info'>
                <p className='text-black number-card'>+10</p>
                <p className='text-white'>{aboutData.card2}</p>
              </div>
              <img src={web} alt='Web design knowledge' />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 b pt-5'>
          {aboutData.listAbout.map((item, index) => {
            return (
              <div key={index} className='d-flex fy'>
                <div className='w-100'>
                  {section !== item.section ? <h3 onClick={() => setSection(item.section)}>{item.title} <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>{item.title} <IoIosArrowUp /></h3>}
                  {section === item.section &&
                    <div className='list-about'>
                      <ul>
                        {item.items.map((info, index) => {
                          return (
                            <li key={index}>{info}</li>
                          )
                        })}
                      </ul>
                    </div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='container pt-5'>
        <h3 className='d-flex justify-content-center text-center'>{aboutData.aboutVision.title}</h3>
        <div className='p-2'>
          <p className='d-flex pt-4 justify-content-center align-items-center text-center about-coding-text'>{aboutData.aboutVision.description1}</p>
          <p className='d-flex pt-2 justify-content-center align-items-center text-center about-coding-text'>{aboutData.aboutVision.description2}</p>
          <p className='d-flex pt-2 justify-content-center align-items-center text-center about-coding-text fw-bold'>{aboutData.aboutVision.description3}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='d-block d-md-flex container-coding-list'>
            <div className='list-about-coding d-flex justify-content-center align-items-center p-5'>
              <div>
                <h3 className='d-flex justify-content-center' style={{ fontSize: '35px' }}>{aboutData.aboutVision.imageZone.title}</h3>
                <ul className='pt-3'>
                  {aboutData.aboutVision.imageZone.list.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
                <h4 className='pt-5'>{aboutData.aboutVision.imageZone.footer}</h4>
              </div>
            </div>
            <div className='img-about'>
              <img src={dev} alt='Designing coaching website' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
