import React from 'react'
/* import Slider from 'react-slick';
import { carousetSettings } from '../utils/carouselSettings'; */
import image1 from '../assets/service1.png'
import image2 from '../assets/service2.png'
import image3 from '../assets/service3.png'
/*
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css' */

export const Approach = () => {
  return (
    <div id='approach' className='h-100'>
      <div className='container pt-5'>
        <h4>01 — Our approach</h4>
        <p className='approach-description'>As a tight-knit team of experts, we create memorable websites and digital experiences</p>
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
  )
}

/* const Services = (props) => {

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
          Discover a spectrum of tailored services that redefine digital excellence. From cutting-edge web development to seamless user experiences, our solutions empower businesses for success in today's dynamic digital landscape. Elevate your brand with our innovative and client-centric services, meticulously crafted for optimal impact and growth
          </p>
        </div>
        <Slider {...carousetSettings}>
          { props?.data?.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
}; */
