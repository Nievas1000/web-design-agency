import { AiOutlineGlobal, AiOutlineLike } from 'react-icons/ai'
import { CiClock1 } from 'react-icons/ci'
import { HiUsers } from 'react-icons/hi2'
import { FaMicrophone } from 'react-icons/fa'
import { RiBarChartGroupedFill } from 'react-icons/ri'
import { ScrollAnimationContainer } from './ScrollContainer'
import Spline from '@splinetool/react-spline'

export const Reasons = ({ openBecomeClient }) => {
  return (
    <div>
      <div className='container'>
        <h1 className='d-flex justify-content-center'>Reasons Your Brand Needs a Website</h1>
        <div className='d-block d-md-flex pt-5 pb-5'>
          <div className='reason-list'>
            <ul>
              <ScrollAnimationContainer direction='x' initial={-300}>
                <li className='d-flex list-none'>
                  <div>
                    <div className='reason-item-icon'><AiOutlineGlobal /></div>
                  </div>
                  <div className='reason-item-description'>
                    <h4>Global Reach</h4>
                    <p>Having a website allows your small business to reach a global audience. Unlike a physical store, your website is accessible to anyone with an internet connection, expanding your potential customer base beyond local boundaries.</p>
                  </div>
                </li>
              </ScrollAnimationContainer>
              <ScrollAnimationContainer direction='x' initial={-300}>
                <li className='d-flex list-none'>
                  <div>
                    <div className='reason-item-icon'><CiClock1 /></div>
                  </div>
                  <div className='reason-item-description'>
                    <h4>24/7 Availability</h4>
                    <p>A website provides your business with a virtual storefront that is open 24/7. This means customers can access information about your products or services at any time, increasing the likelihood of conversions even when your physical location is closed.</p>
                  </div>
                </li>
              </ScrollAnimationContainer>
              <ScrollAnimationContainer direction='x' initial={-300}>
                <li className='d-flex list-none'>
                  <div>
                    <div className='reason-item-icon'><AiOutlineLike /></div>
                  </div>
                  <div className='reason-item-description'>
                    <h4>Credibility and Professionalism</h4>
                    <p>A well-designed website adds a level of professionalism and credibility to your small business. Consumers often search online for information before making a purchase decision, and a polished website can instill trust in potential customers.</p>
                  </div>
                </li>
              </ScrollAnimationContainer>
            </ul>
          </div>
          <div className='reason-list'>
            <ul>
              <ScrollAnimationContainer direction='x' initial={300}>
                <li className='d-flex list-none'>
                  <div>
                    <div className='reason-item-icon'><RiBarChartGroupedFill /></div>
                  </div>
                  <div className='reason-item-description'>
                    <h4>Adaptability and Growth</h4>
                    <p>As your small business evolves, your website can evolve with it. Whether you want to introduce new products, update information, or expand your online presence, having a website provides the flexibility to adapt to changing business needs and fuel growth.</p>
                  </div>
                </li>
              </ScrollAnimationContainer>
              <ScrollAnimationContainer direction='x' initial={300}>
                <li className='d-flex list-none'>
                  <div>
                    <div className='reason-item-icon'><HiUsers /></div>
                  </div>
                  <div className='reason-item-description'>
                    <h4>Customer Convenience</h4>
                    <p>A website makes it convenient for customers to learn about your business, browse your offerings, and make purchases without leaving their homes. This convenience can lead to increased customer satisfaction and loyalty.</p>
                  </div>
                </li>
              </ScrollAnimationContainer>
              <ScrollAnimationContainer direction='x' initial={300}>
                <li className='d-flex list-none'>
                  <div>
                    <div className='reason-item-icon'><FaMicrophone /></div>
                  </div>
                  <div className='reason-item-description'>
                    <h4>Cost-Effective Promotion</h4>
                    <p>Compared to traditional forms of advertising, such as print media or TV commercials, maintaining a website is a cost-effective way to market your small business. Online marketing tools like social media and search engine optimization (SEO) can be utilized at a lower cost.</p>
                  </div>
                </li>
              </ScrollAnimationContainer>
            </ul>
          </div>
        </div>
      </div>
      <div className='position-relative'>
        <div className='position-absolute er'>
          <Spline scene='https://prod.spline.design/HLRXR6e-J-lyAojT/scene.splinecode' />
        </div>
        <div className='container pt-5 pb-5'>
          <h1 className='d-flex justify-content-center'>Website Design Process</h1>
          <div className='d-block d-md-flex pt-5'>
            <div className='steps-list'>
              <div className='step-item'>
                <h3>1. Choose Website Design Service</h3>
                <p>We invite you to explore our range of web design services to find the perfect solution to fit your digital needs.</p>
                <ul>
                  <li>Custom Web Design</li>
                  <li>Template Web Design</li>
                  <li>Website Help</li>
                  <li>Website Maintenance</li>
                </ul>
                <p>Go to <a href='#services'>Service section</a> for more details</p>
              </div>
              <div className='step-item'>
                <h3>2. Let Us Know Your Idea</h3>
                <p>Before we begin the website design process, we would be excited to delve deeper and get to know you better so we can offer you a personalized web design experience. We want to ensure that every detail is uniquely attended to and that your vision comes to life online. <span>Schedule a call</span> or <span onClick={openBecomeClient}>complete the questionnaire</span> to start.</p>
              </div>
            </div>
            <div>
              <div className='step-item'>
                <h3>3. Sign The Service Agreement</h3>
                <p>The Service Agreement details all aspects of the web design process. Once you've signed, we'll be ready to move forward with creating your website. This document provides the solid foundation to ensure a clear understanding of the services, prices and specific details we have discussed.</p>
              </div>
              <div className='step-item'>
                <h3>4. Web Design and Web Development Begins</h3>
                <p>This is the stage where you can relax and entrust us with the heavy lifting. Your only task is to provide us with your logo, pertinent information, and any images you'd like to feature on your website. From there, we take care of the entire process, ensuring a seamless and hassle-free experience for you.</p>
              </div>
              <div className='step-item'>
                <h3>5. Website maintenance</h3>
                <p>In our last step, we offer an additional option for those who want constant maintenance of their website. This service ensures that your site remains up to date, secure and optimized at all times. We take care of technical updates, performance monitoring and any necessary adjustments to keep your digital presence in its best shape.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
