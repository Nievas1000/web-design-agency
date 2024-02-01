import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export const Services = () => {
  const [serviceSelected, setServiceSelected] = useState('development')

  return (
    <div id='services'>
      <div className='container position-relative pt-5 pb-5'>
        <div className='position-absolute end-0 er'>
          <Spline scene='https://prod.spline.design/NESURyfSGpm-aX7P/scene.splinecode' />
        </div>
        <div>
          <h4>03 — Our services</h4>
          <p className='approach-description w-75'>Embark on a journey to explore the transformative potential of our comprehensive services, captivating web design, and impactful digital marketing solutions</p>
        </div>
        <div className='row pt-3'>
          <div className='col-12 col-lg-4 p-5'>
            <div className='services-table'>
              <ul>
                <li className={serviceSelected === 'development' ? 'active-service' : ''} onClick={() => setServiceSelected('development')}>
                  Custom Web Development
                </li>
                <li className={serviceSelected === 'design' ? 'active-service' : ''} onClick={() => setServiceSelected('design')}>
                  Web App Design
                </li>
                <li className={serviceSelected === 'marketing' ? 'active-service' : ''} onClick={() => setServiceSelected('marketing')}>
                  Website Marketing
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
    </div>
  )
}
