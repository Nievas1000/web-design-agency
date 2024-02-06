import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import image1 from '../assets/service1.png'
import image2 from '../assets/service2.png'
import image3 from '../assets/service3.png'

export const Services = ({ openBecomeClient }) => {
  const [serviceSelected, setServiceSelected] = useState('custom')

  return (
    <div id='services' className='pb-5'>
      <div className='h-100'>
        <div className='container pt-5'>
          <h4>01 — Our Services</h4>
          <p className='approach-description'>Discover personalized and cutting-edge web solutions. From custom sites to expert maintenance, we transform your vision into digital reality.</p>
        </div>

        <div className='position-absolute er'>
          <Spline scene='https://prod.spline.design/NESURyfSGpm-aX7P/scene.splinecode' />
        </div>
        <div className='container position-relative pt-5 pb-5'>
          <div className='row pt-3'>
            <div className='col-12 col-lg-4 p-5'>
              <div className='services-table'>
                <ul>
                  <li className={serviceSelected === 'custom' ? 'active-service' : ''} onClick={() => setServiceSelected('custom')}>
                    Custom Web Design
                  </li>
                  <li className={serviceSelected === 'template' ? 'active-service' : ''} onClick={() => setServiceSelected('template')}>
                    Template Web Design
                  </li>
                  <li className={serviceSelected === 'help' ? 'active-service' : ''} onClick={() => setServiceSelected('help')}>
                    Website help
                  </li>
                  <li className={serviceSelected === 'maintenance' ? 'active-service' : ''} onClick={() => setServiceSelected('maintenance')}>
                    Website maintenance
                  </li>
                </ul>
              </div>
            </div>
            {serviceSelected === 'custom' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Elevate Your Presence with Unique Custom Web Design</h1>
                  <p className='pt-3'>Discover the power of a tailored online identity with our Custom Web Design service. We don't just build websites; we co-create digital experiences that resonate with your brand. Collaborating closely with you, we delve into your goals and aspirations, ensuring every element reflects your identity. From distinctive designs to the integration of personalized functionalities, our commitment is to deliver a visually stunning and functionally superior website. Our iterative process with active reviews and strict adherence to deadlines ensures that your digital vision not only comes to life but stands out effectively across all devices.</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'template' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Effortless Elegance: Transform with Template Web Design</h1>
                  <p className='pt-3'>Unleash the potential of swift yet stylish web solutions with our Template Web Design service. Choose from a diverse range of design templates, each a foundation for your digital vision. Our efficient process allows you to quickly select the template that resonates with your goals. From there, we meticulously customize every detail to align perfectly with your brand and requirements. This streamlined approach ensures the delivery of an attractive and functional website, elevating your digital presence uniquely and effectively.</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'help' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Expert Guidance for a Laser-Focused Website</h1>
                  <p className='pt-3'>Navigate the digital landscape with confidence using our Website Help service. Whether you're grappling with technical challenges, seeking upgrades, or pursuing performance improvements, our expert team is at your service. We simplify the process, allowing you to concentrate on your business while we tackle the technical intricacies. Our goal is to optimize your website, ensuring it not only meets but exceeds your expectations. With us, you can stay focused on your core activities while we enhance your digital presence seamlessly.</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
                  </div>
                </div>
              </div>}
            {serviceSelected === 'maintenance' &&
              <div className='col-12 col-lg-8 p-5 d-flex justify-content-center fade-in'>
                <div>
                  <h1>Uninterrupted Excellence: Website Maintenance for Seamless Operation</h1>
                  <p className='pt-3'>Elevate your digital longevity with our Website Maintenance service. Your online journey doesn't conclude with the launch of your website. Our team is dedicated to continual collaboration, ensuring your platform operates smoothly and securely. From technical updates to vigilant monitoring, we take responsibility for maintaining the optimal health of your site. This option provides peace of mind, allowing your digital presence to evolve efficiently and consistently.</p>
                  <div className='pt-3'>
                    <button className='service-button' onClick={openBecomeClient}>Get a quote</button>
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
                    We optimize your website for mobile devices, ensuring an impeccable experience on small screens. From design to functionality, your site stands out on any device.
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
                  <p>We offer solid and effective design solutions that boost your business's digital presence. From custom design to technical support, we provide comprehensive services to take your vision to new levels of online excellence.
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
