import { useState } from 'react'
import clock from '../assets/clock.gif'
import web from '../assets/web-about.gif'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export const About = () => {
  const [section, setSection] = useState('')
  return (
    <div id='about' className='d-flex pb-5'>
      <div className='container d-block d-lg-flex'>
        <div className='col-12 col-lg-6'>
          <div className='pt-5'>
            <h4>02 — About us</h4>
            <p className='services-description w-100'>Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights</p>
          </div>
          <div className='row gap-1'>
            <div className='col-md-5 d-flex card-about'>
              <div className='card-about-info'>
                <h2 className='text-black'>+3</h2>
                <p className='text-white'>Years of experience</p>
              </div>
              <img height={100} src={clock} alt='' />
            </div>
            <div className='col-md-5 d-flex card-about'>
              <div className='card-about-info'>
                <h2 className='text-black'>+10</h2>
                <p className='text-white'>Web technologies</p>
              </div>
              <img height={100} src={web} alt='' />
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 b pt-5'>
          <div className='d-flex fy'>
            <div className='w-100'>
              {section !== 'branding' ? <h3 onClick={() => setSection('branding')}>Branding <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Branding <IoIosArrowUp /></h3>}
              {section === 'branding' &&
                <div className='list-about'>
                  <ul>
                    <li>Brand Storytelling</li>
                    <li>Corporate Nomenclature</li>
                    <li>Slogans</li>
                    <li>Collateral Design</li>
                  </ul>
                </div>}
            </div>
          </div>
          <div className='d-flex fy'>
            <div className='w-100'>
              {section !== 'design' ? <h3 onClick={() => setSection('design')}>Design <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Design <IoIosArrowUp /></h3>}
              {section === 'design' &&
                <div className='list-about'>
                  <ul>
                    <li>UIUX Design</li>
                    <li>Corporate Blog Design</li>
                    <li>Responsive Website Design</li>
                    <li>Landingpage Designs</li>
                  </ul>
                </div>}
            </div>
          </div>
          <div className='d-flex fy'>
            <div className='w-100'>
              {section !== 'marketing' ? <h3 onClick={() => setSection('marketing')}>Digital Marketing <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Digital Marketing <IoIosArrowUp /></h3>}
              {section === 'marketing' &&
                <div className='list-about'>
                  <ul>
                    <li>Social Media Management</li>
                    <li>Corporate Nomenclature</li>
                    <li>Content Marketing</li>
                    <li>Conversation Rate Optimization</li>
                  </ul>
                </div>}
            </div>
          </div>
          <div className='d-flex fy'>
            <div className='w-100'>
              {section !== 'technologies' ? <h3 onClick={() => setSection('technologies')}>Technologies <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Technologies <IoIosArrowUp /></h3>}
              {section === 'technologies' &&
                <div className='list-about'>
                  <ul>
                    <li>Page Speed Optimization</li>
                    <li>Custom 3D Configurators</li>
                    <li>Web Development by coding</li>
                  </ul>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
