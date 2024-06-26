import { IoClose } from 'react-icons/io5'
import { useBecomeClient } from '../../../hooks/useBecomeClient.jsx'
import { FaLongArrowAltRight, FaSpinner } from 'react-icons/fa'
import { ThanksText } from './ThanksText.jsx'
import { useTranslation } from 'react-i18next'

export const BecomeClient = ({ setShow, show, serviceInfo = null }) => {
  const { handleChange, handleSubmit, handleOptionClick, closeBecomeClient, services, selectedOptions, becomeContainerRef, formData, nameError, emailError, serviceError, sent, isSending, serviceMessage } = useBecomeClient(setShow, show, serviceInfo)
  const { t } = useTranslation()
  const becomeData = t('BECOMECLIENT', { returnObjects: true })

  return (
    <div className='become-container'>
      <div className={`become-content ${show ? 'in' : 'out'}`} ref={becomeContainerRef}>
        {!sent
          ? <div>
            <span className='position-absolute pointer end-0 pe-3 pt-3' onClick={closeBecomeClient}><IoClose size={30} /></span>
            <div className='container p-5'>
              <h2>{becomeData.title}</h2>
              <div className='pt-4 d-block d-md-flex gap-5'>
                <div>
                  <h5>{becomeData.inputName}</h5>
                  <div className={`info-become-client ${nameError ? 'error-become' : ''}`}>
                    <input type='text' name='name' value={formData.name} placeholder='Kevin Jhones' onChange={handleChange} />
                    {nameError && <p className='text-danger ps-1 pt-1'>{becomeData.requiredTextInput}</p>}
                  </div>
                </div>
                <div>
                  <h5>Your Email</h5>
                  <div className={`info-become-client ${emailError ? 'error-become' : ''}`}>
                    <input type='text' name='email' value={formData.email} placeholder='kevinjhones@gmail.com' onChange={handleChange} />
                    {emailError && <p className='text-danger ps-1 pt-1'>{becomeData.requiredTextInput}</p>}
                  </div>
                </div>
              </div>
              <h5 className='pt-4'>{becomeData.servicesLabel}</h5>
              <div className='interesed-bubbles'>
                {services.map((option, index) => (
                  <span
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={selectedOptions.includes(option) ? 'selected-bubble' : `${serviceError ? 'service-error-become' : ''}`}
                  >
                    {option}
                  </span>
                ))}
              </div>
              {serviceError && <p className='text-danger ps-2 pt-1'>{becomeData.requiredTextServices}</p>}
              <h5 className='pt-4'>{becomeData.inputMessage}</h5>
              <div className='extra-become-client'>
                <textarea name='message' value={serviceInfo && serviceMessage ? becomeData.customMessage + serviceMessage : formData.message} onChange={handleChange} placeholder={becomeData.messagePleaceholder} />
              </div>
              <div className='d-flex justify-content-end pt-3'>
                <span className='send-request-become' onClick={handleSubmit}>{becomeData.submitButton} {isSending ? <FaSpinner className='ms-3 spinner-become' /> : <FaLongArrowAltRight className='ms-3' />}</span>
              </div>
              <div>
                <h5 className='pt-2'>{becomeData.footer1}  <a className='become-call-book' href='#calendar' onClick={closeBecomeClient}>{becomeData.footer2} </a> {becomeData.footer3} .</h5>
              </div>
            </div>
          </div> // eslint-disable-line
          : <ThanksText becomeData={becomeData} closeBecomeClient={closeBecomeClient} />}
      </div>
    </div>
  )
}
