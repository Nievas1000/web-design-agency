import { useState } from 'react'
import clock from '../assets/clock.gif'
import web from '../assets/web-about.gif'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Spline from '@splinetool/react-spline'
import dev from '../assets/about-dev.jpg'
import { useTranslation } from 'react-i18next'

export const About = () => {
  const [section, setSection] = useState('')
  const { t } = useTranslation()
  const aboutData = t('ABOUT', { returnObjects: true })

  return (
    <div id='about' className='pb-5'>
      <div className='container position-relative d-block d-lg-flex'>
        <div className='position-absolute er'>
          <Spline scene='https://prod.spline.design/azpqkgYmEcAWPtey/scene.splinecode' />
        </div>
        <div className='col-12 col-lg-6'>
          <div className='pt-5'>
            <h4>02 — {aboutData.title}</h4>
            <p className='approach-description w-100'>{aboutData.description}</p>
          </div>
          <div className='row gap-1'>
            <div className='col-md-5 d-flex card-about'>
              <div className='card-about-info'>
                <h2 className='text-black'>+3</h2>
                <p className='text-white'>{aboutData.card1}</p>
              </div>
              <img height={100} src={clock} alt='' />
            </div>
            <div className='col-md-5 d-flex card-about'>
              <div className='card-about-info'>
                <h2 className='text-black'>+10</h2>
                <p className='text-white'>{aboutData.card2}</p>
              </div>
              <img height={100} src={web} alt='' />
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
        <div className='p-5'>
          <p className='d-flex justify-content-center align-items-center text-center about-coding-text'>{aboutData.aboutVision.description1}</p>
          <p className='d-flex justify-content-center align-items-center text-center about-coding-text'>{aboutData.aboutVision.description2}</p>
          <p className='d-flex justify-content-center align-items-center text-center about-coding-text fw-bold'>{aboutData.aboutVision.description3}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='d-block d-md-flex container-coding-list'>
            <div className='list-about-coding d-flex justify-content-center align-items-center p-5'>
              <div>
                <h2 className='d-flex justify-content-center'>{aboutData.aboutVision.imageZone.title}</h2>
                <ul className='pt-3'>
                  {aboutData.aboutVision.imageZone.list.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}
                </ul>
                <h2 className='pt-5'>{aboutData.aboutVision.imageZone.footer}</h2>
              </div>
            </div>
            <div className='img-about'>
              <img src={dev} alt='dev' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
