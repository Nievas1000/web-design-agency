import website from '../assets/free-website-example.webp'
import { FaLongArrowAltRight, FaSpinner } from 'react-icons/fa'
import { useFunnel } from '../hooks/useFunnel'
import { useTranslation } from 'react-i18next'

export const Funnel = () => {
  document.title = 'Free Guide To Attract and Retain Clients'
  const { formData, saveEmail, isSending, nameError, emailError, handleChange } = useFunnel()
  const { t } = useTranslation()
  const guide = t('GET-GUIDE', { returnObjects: true })

  return (
    <div>
      <header className='pt-5'>
        <h3 className='d-flex justify-content-center align-items-center'>{guide.preTitle}</h3>
        <div className='d-flex justify-content-center align-items-center text-center'>
          <div className='container-titles-funnel'>
            <h1>
              {guide.mainTitle[0]}
              <span> {guide.mainTitle[1]} </span>
              {guide.mainTitle[2]}
              <span> {guide.mainTitle[3]} </span>
            </h1>
            <p>
              {guide.description1} <span>{guide.description2}</span>
            </p>
          </div>
        </div>
      </header>
      <div className='pt-5 container-guide'>
        <div className='d-block d-lg-flex justify-content-center container-download'>
          <div className='d-flex align-items-center'>
            <img className='d-none d-lg-block img-guide' src={website} alt='Guide to get clients' />
          </div>
          <div className='d-flex justify-content-center align-items-center text-center d-lg-none'>
            <img className='img-guide' src={website} alt='' />
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='arrow-funnel-container'>
              <div className='arrow-funnel' />
              <div className='arrow-funnel' />
              <div className='arrow-funnel arrow-blue' />
              <div className='arrow-funnel' />
              <div className='arrow-funnel' />
            </div>
          </div>
          <div className='d-flex justify-content-center container-form-funnel'>
            <div className='form-funnel'>
              <h2 className='text-center'>{guide.form.title}</h2>
              <p className='text-center'>{guide.form.description}</p>
              <div className={`input-container ${nameError ? 'error-become' : ''}`}>
                <span className='required-label'>{guide.form.nameLabel}</span>
                <input type='text' name='name' className='mt-2' value={formData.name} onChange={handleChange} placeholder='Jhones Mattew' />
                <i className='fas fa-user' />
              </div>
              {nameError && <p className='text-danger ps-1 pt-1'>{guide.form.errorName}</p>}
              <div className={`input-container ${emailError ? 'error-become' : ''}`}>
                <span className='required-label'>{guide.form.emailLabel}</span>
                <input type='email' name='email' className='mt-2' value={formData.email} onChange={handleChange} placeholder='jhonesmattew@gmail.com' />
                <i className='fas fa-envelope' />
              </div>
              {emailError && <p className='text-danger ps-1 pt-1'>{guide.form.errorEmail}</p>}
              <div className='input-container linkedin-container'>
                <span>Linkedin</span>
                <div className='d-flex mt-2'>
                  <div className='linkedin-prefix'>linkedin.com/in/</div>
                  <input type='text' name='linkedin' value={formData.linkedin} onChange={handleChange} placeholder='jhonesmattew' />
                  <i className='fa-brands fa-linkedin-in' />
                </div>
              </div>
              <div className='input-container'>
                <span>{guide.form.aditionalLabel}</span>
                <textarea type='text' name='aditional' className='mt-2' value={formData.aditional} onChange={handleChange} placeholder={guide.form.aditionalPleaceholder} />
              </div>
              <div>
                <span className='send-request-become d-flex justify-content-center' onClick={saveEmail}>{guide.form.button} {isSending ? <FaSpinner className='ms-3 spinner-become' /> : <FaLongArrowAltRight className='ms-3' />}</span>
              </div>
              <p className='form-footer'>{guide.form.footer} </p>
            </div>
          </div>
        </div>
      </div>
      <footer className='d-flex align-items-center'>
        <h6 className='d-flex justify-content-center w-100'>
          Copyright © 2024 All Rights Reserved - Nevve
        </h6>
      </footer>
    </div>
  )
}
