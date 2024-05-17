import { useState } from 'react'
import { useScrolled } from '../../hooks/useScrolled'
import { useTranslation } from 'react-i18next'
import spain from '../../assets/spain.webp'
import usa from '../../assets/united-states.webp'
import logo from '../../assets/logo.webp'

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
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar container navbar-expand-lg navbar-default navbar-fixed-top navigation w-100'>
        <span className='navbar-brand page-scroll logo p-4 order-lg-1' onClick={() => scrollToSection('header')}>
          <img src={logo} title='Nevve' />
        </span>
        <span className='navbar-toggler me-3' type='button' onClick={() => setShow(!show)}>
          <span className='navbar-toggler-icon' />
        </span>
        <div className={`collapse navbar-collapse justify-content-end pt-3 items-nav order-lg-2 ${show && 'show p-3'}`} id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <span className='nav-link page-scroll' onClick={() => scrollToSection('services')}>{t('NAVBAR.item1')}</span>
            </li>
            <li className='nav-item'>
              <span className='nav-link page-scroll' onClick={() => scrollToSection('about')}>{t('NAVBAR.item2')}</span>
            </li>
            <li className='nav-item'>
              <span className='nav-link page-scroll' onClick={() => scrollToSection('process')}>{t('NAVBAR.item3')}</span>
            </li>
            <li className='nav-item'>
              <span className='nav-link page-scroll' onClick={() => scrollToSection('contact')}>{t('NAVBAR.item4')}</span>
            </li>
            <li className='nav-item'>
              <span className='nav-link page-scroll' onClick={() => scrollToSection('calendar')}>
                <span href='#features' className='button-more d-inline nav-schedule'>
                  {t('NAVBAR.item5')}
                </span>
              </span>
            </li>
            <li className={`nav-item dropdown ${openDrowdown ? 'show' : ''}`}>
              <span
                className='nav-link dropdown-toggle'
                id='navbarDropdown'
                role='button'
                onClick={() => setOpenDropdown(!openDrowdown)}
              >
                {t('NAVBAR.item6')}
              </span>
              <ul className={`dropdow-languaje ${openDrowdown ? 'show-languajes' : ''}`} aria-labelledby='navbarDropdown'>
                <li><span className='dropdown-item' onClick={() => changeLanguage('en')}>EN <img src={usa} className='img-fluid ps-1' loading='lazy' alt='English' /></span></li>
                <li><span className='dropdown-item' onClick={() => changeLanguage('es')}>ES <img src={spain} className='img-fluid ps-1' loading='lazy' alt='Spanish' /></span></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
