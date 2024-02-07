import { useTranslation } from 'react-i18next'
import { FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import logo from '../assets/logo.png'

export const Contact = ({ openBecomeClient }) => {
  const { t } = useTranslation()
  return (
    <div id='contact'>
      <div className='container pt-5 pb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='section-title'>
              <a className='logo-contact pb-4' href='#'>
                <img src={logo} title='Nevve' />
              </a>
              <h1 className='pt-3'>{t('CONTACT.title')}</h1>
              <p className='pt-4'>
                {t('CONTACT.description1')}
              </p>
              <div className='pt-3'>
                <span href='#features' onClick={openBecomeClient} className='d-inline become-contact'>
                  Become a client
                </span>
              </div>
              <p className='pt-4'>{t('CONTACT.description2')}.</p>
              <a className='contact-email' href='mailto:lautynievas09@gmail.com'>lautynievas09@gmail.com</a>
            </div>
          </div>
          <div className='container col-md-3 col-md-offset-1 contact-info pt-4'>
            <h3>{t('CONTACT.contactInfo.title')}</h3>
            <div className='contact-item pt-3'>
              <span>
                <IoLocationSharp /> {t('CONTACT.contactInfo.address')}
              </span>
              <p>
                Buenos Aires, Argentina
              </p>
            </div>
            <div className='contact-item pt-3'>
              <span>
                <FaPhoneAlt /> {t('CONTACT.contactInfo.phone')}
              </span>
              <p>
                +542314517600
              </p>
            </div>
            <div className='contact-item pt-3'>
              <span>
                <MdOutlineEmail /> Email
              </span>
              <p>
                <a href='mailto:lautynievas09@gmail.com'>
                  lautynievas09@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='social'>
        <ul>
          <li>
            <a href='https://www.instagram.com/lautaronievas1/?hl=es'>
              <FaInstagram size={25} />
            </a>
          </li>
          <li>
            <a href='https://github.com/Nievas1000'>
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/lautaro-nievas/'>
              <FaLinkedin size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
