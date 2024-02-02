import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import image1 from '../assets/service1.png'
import image2 from '../assets/service2.png'
import image3 from '../assets/service3.png'

export const Services = () => {
  const [serviceSelected, setServiceSelected] = useState('development')

  return (
    <div id='services' className='pb-5'>
      <div className='h-100'>
        <div className='container pt-5'>
          <h4>01 — Our Services</h4>
          <p className='approach-description'>As a tight-knit team of experts, we create memorable websites and digital experiences</p>
        </div>

        <div className='position-absolute er'>
          <Spline scene='https://prod.spline.design/NESURyfSGpm-aX7P/scene.splinecode' />
        </div>
        <div className='container position-relative pt-5 pb-5'>
          <div className='row pt-3'>
            <div className='col-12 col-lg-4 p-5'>
              <div className='services-table'>
                <ul>
                  <li className={serviceSelected === 'development' ? 'active-service' : ''} onClick={() => setServiceSelected('development')}>
                    Custom Web Design
                  </li>
                  <li className={serviceSelected === 'design' ? 'active-service' : ''} onClick={() => setServiceSelected('design')}>
                    Template Web Design
                  </li>
                  <li className={serviceSelected === 'marketing' ? 'active-service' : ''} onClick={() => setServiceSelected('marketing')}>
                    Website help
                  </li>
                  <li className={serviceSelected === 'marketing' ? 'active-service' : ''} onClick={() => setServiceSelected('marketing')}>
                    Website maintenance
                  </li>
                </ul>
              </div>
            </div>
            {serviceSelected === 'development' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Custom Web Development that make your website unique</h1>
                  <p className='pt-3'>We are focus to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.</p>
                  <div className='pt-3'>
                    <button className='service-button'>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'design' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Web App Design that get results</h1>
                  <p className='pt-3'>We adopt a strategic approach in crafting web applications, ensuring not only functionality but also prioritizing intuitive user experiences. Our goal is to captivate users with seamless interactions, fostering optimal engagement and satisfaction through thoughtful design and development.</p>
                  <div className='pt-3'>
                    <button className='service-button'>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'marketing' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Website Marketing</h1>
                  <p className='pt-3'>Specializing in tailored digital marketing, we elevate brand visibility through strategic initiatives. Our focus is on engaging your target audience, fostering awareness, and ensuring a lasting impact on your brand's growth journey.</p>
                  <div className='pt-3'>
                    <button className='service-button'>Get a quote</button>
                  </div>
                </div>
              </div>}
          </div>
        </div>

        <div className='container pb-5'>
          <div className='row justify-content-center pt-5 mb-5 h-100 g-0 approach-container'>
            <div className='col mb-4 approach flex-grow-1'>
              <img src={image1} alt='image1' className='img-fluid' />
              <div className='overlay-apro pt-5'>
                <h1>Mobile adaptation</h1>
                <div className='position-absolute bottom-0'>
                  <p>
                    Many years of expertise in mobile development
                    allow us to design architecture and create
                    bespoke native applications for Apple iOS and
                    Google Android.
                  </p>
                  <ul className='tech-approach'>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col mb-4 approach flex-grow-1'>
              <img src={image2} alt='image1' className='img-fluid' />
              <div className='overlay-apro'>
                <h1>Solid design solution</h1>
                <div className='position-absolute bottom-0'>
                  <p>We're driven by user‑centered design that drives productivity and increases revenue. Our expertise and ingenuity are remarkable, yet we always strive to outdo and outperform our previous achievements.
                  </p>
                  <ul className='tech-approach'>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='col mb-4 approach flex-grow-1'>
              <img src={image3} alt='image1' className='img-fluid' />
              <div className='overlay-apro'>
                <h1>Web development</h1>
                <div className='position-absolute bottom-0'>
                  <p>
                    Our adaptive design components are built using perfectly structured and readable code. We make sure that the development solutions are well-optimized and work flawlessly across devices and browsers.
                  </p>
                  <ul className='tech-approach'>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
