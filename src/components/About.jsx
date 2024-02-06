import { useState } from 'react'
import clock from '../assets/clock.gif'
import web from '../assets/web-about.gif'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import Spline from '@splinetool/react-spline'
import dev from '../assets/about-dev.jpg'

export const About = () => {
  const [section, setSection] = useState('')
  return (
    <div id='about' className='pb-5'>
      <div className='container position-relative d-block d-lg-flex'>
        <div className='position-absolute er'>
          <Spline scene='https://prod.spline.design/azpqkgYmEcAWPtey/scene.splinecode' />
        </div>
        <div className='col-12 col-lg-6'>
          <div className='pt-5'>
            <h4>02 — About us</h4>
            <p className='approach-description w-100'>Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights</p>
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
              {section !== 'custom' ? <h3 onClick={() => setSection('custom')}>Custom Web Design <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Custom Web Design <IoIosArrowUp /></h3>}
              {section === 'custom' &&
                <div className='list-about'>
                  <ul>
                    <li>Tailored Digital Experiences</li>
                    <li>Functional Excellence</li>
                    <li>Responsive Design Mastery</li>
                    <li>Iterative Collaboration</li>
                  </ul>
                </div>}
            </div>
          </div>
          <div className='d-flex fy'>
            <div className='w-100'>
              {section !== 'template' ? <h3 onClick={() => setSection('template')}>Template Web Design <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Template Web Design <IoIosArrowUp /></h3>}
              {section === 'template' &&
                <div className='list-about'>
                  <ul>
                    <li>Effortless Elegance</li>
                    <li>Personalization Expertise</li>
                    <li>Diverse Template Selection</li>
                  </ul>
                </div>}
            </div>
          </div>
          <div className='d-flex fy'>
            <div className='w-100'>
              {section !== 'help' ? <h3 onClick={() => setSection('help')}>Website Help & Maintenance <IoIosArrowDown /></h3> : <h3 onClick={() => setSection('')}>Website Help & Maintenance <IoIosArrowUp /></h3>}
              {section === 'help' &&
                <div className='list-about'>
                  <ul>
                    <li>Expert Technical Assistance</li>
                    <li>Performance Optimization</li>
                    <li>Continuous Collaboration</li>
                  </ul>
                </div>}
            </div>
          </div>
        </div>
      </div>

      <div className='container pt-5'>
        <h3 className='d-flex justify-content-center'>Coding Excellence: Crafting Websites Beyond Boundaries</h3>
        <div className='p-5'>
          <p className='d-flex justify-content-center align-items-center text-center about-coding-text'>If you’re like us, then your business has big plans.</p>
          <p className='d-flex justify-content-center align-items-center text-center about-coding-text'>You’re pitching to larger and professional organizations, but you’re worried you’ll lose the deals when they visit your lackluster website and don’t think you’re credible or successful enough.</p>
          <p className='d-flex justify-content-center align-items-center text-center about-coding-text fw-bold'>You deserve to get more sales inquiry emails in your inbox each week from your web forms.

          </p>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='d-block d-md-flex container-coding-list'>
            <div className='list-about-coding d-flex justify-content-center align-items-center p-5'>
              <div>
                <h2 className='d-flex justify-content-center'>Call us your website partner.</h2>
                <ul className='pt-3'>
                  <li>Unlimited Customization</li>
                  <li>Performance Optimization</li>
                  <li>Reinforced Security</li>
                  <li>Continuous Adaptability</li>
                </ul>
                <h1 className='pt-5'>Are you ready?</h1>
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
