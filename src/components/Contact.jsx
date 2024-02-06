import { FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

export const Contact = ({ openBecomeClient }) => {
  return (
    <div id='contact'>
      <div className='container pt-5 pb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='section-title'>
              <h1 className='pt-3'>We would love to hear from you.</h1>
              <p className='pt-4'>
                Feel free to reach our if you want to collaborate with us, or simply have a chat
              </p>
              <div className='pt-3'>
                <span href='#features' onClick={openBecomeClient} className='d-inline become-contact'>
                  Become a client
                </span>
              </div>
              <p className='pt-4'>Don’t like the forms? Drop us a line via email.</p>
              <a className='contact-email' href='mailto:lautynievas09@gmail.com'>lautynievas09@gmail.com</a>
            </div>
          </div>
          <div className='container col-md-3 col-md-offset-1 contact-info pt-4'>
            <h3>Contact Info</h3>
            <div className='contact-item pt-3'>
              <span>
                <IoLocationSharp /> Address
              </span>
              <p>
                Buenos Aires, Argentina
              </p>
            </div>
            <div className='contact-item pt-3'>
              <span>
                <FaPhoneAlt /> Phone
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
