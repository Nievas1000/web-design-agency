import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'

export const Navbar = () => {
  const { scrolled } = useScrolled()
  const [show, setShow] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`navbar navbar-expand-lg navbar-default navbar-fixed-top navigation w-100 ${scrolled ? 'scrolled' : ''}`}>
      <a className='navbar-brand page-scroll logo p-4 order-lg-1' onClick={() => scrollToSection('header')}>
        Nevve
      </a>
      <button className='navbar-toggler me-3' type='button' onClick={() => setShow(!show)}>
        <span className='navbar-toggler-icon' />
      </button>
      <div className={`collapse navbar-collapse justify-content-end pt-3 items-nav me-5 order-lg-2 ${show && 'show p-3'}`} id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('services')}>Services</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('about')}>About</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('contact')}>Templates</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('calendar')}>
              <span href='#features' className='button-more d-inline'>
                Schedule a call
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
