import { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { useTranslation } from 'react-i18next'
import spain from '../assets/spain.png'
import usa from '../assets/united-states.png'
import logo from '../assets/logo.png'

export const Navbar = () => {
  const { scrolled } = useScrolled()
  const [show, setShow] = useState(false)
  const [openDrowdown, setOpenDropdown] = useState(false)
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    setOpenDropdown(false)
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setShow(false)
    }
  }

  return (
    <div className={`navbar navbar-expand-lg navbar-default navbar-fixed-top navigation w-100 ${scrolled ? 'scrolled' : ''}`}>
      <a className='navbar-brand page-scroll logo p-4 order-lg-1' onClick={() => scrollToSection('header')}>
        <img src={logo} title='Nevve' />
      </a>
      <button className='navbar-toggler me-3' type='button' onClick={() => setShow(!show)}>
        <span className='navbar-toggler-icon' />
      </button>
      <div className={`collapse navbar-collapse justify-content-end pt-3 items-nav me-5 order-lg-2 ${show && 'show p-3'}`} id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('services')}>{t('NAVBAR.item1')}</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('about')}>{t('NAVBAR.item2')}</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('templates')}>{t('NAVBAR.item3')}</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('contact')}>{t('NAVBAR.item4')}</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link page-scroll' onClick={() => scrollToSection('calendar')}>
              <span href='#features' className='button-more d-inline'>
                {t('NAVBAR.item5')}
              </span>
            </a>
          </li>
          <li className={`nav-item dropdown ${openDrowdown ? 'show' : ''}`}>
            <a
              className='nav-link dropdown-toggle'
              id='navbarDropdown'
              role='button'
              onClick={() => setOpenDropdown(!openDrowdown)}
            >
              {t('NAVBAR.item6')}
            </a>
            <ul className={`dropdow-languaje ${openDrowdown ? 'show-languajes' : ''}`} aria-labelledby='navbarDropdown'>
              <li><a className='dropdown-item' onClick={() => changeLanguage('en')}>EN <img src={usa} className='img-fluid ps-1' height={25} width={25} /></a></li>
              <li><a className='dropdown-item' onClick={() => changeLanguage('es')}>ES <img src={spain} className='img-fluid ps-1' height={25} width={25} /></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
