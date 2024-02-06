import { IoClose } from 'react-icons/io5'
import { useBecomeClient } from '../../hooks/useBecomeClient'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { ThanksText } from './ThanksText'

export const BecomeClient = ({ setShow, show }) => {
  const { handleChange, handleSubmit, handleOptionClick, closeBecomeClient, services, selectedOptions, becomeContainerRef, formData, nameError, emailError, serviceError, sent } = useBecomeClient(setShow, show)

  console.log(sent)

  return (
    <div className='become-container'>
      <div className={`become-content ${show ? 'in' : 'out'}`} ref={becomeContainerRef}>
        {!sent
          ? <div>
            <span className='position-absolute pointer end-0 pe-3 pt-3' onClick={closeBecomeClient}><IoClose size={30} /></span>
            <div className='container p-5'>
              <h1>Hey! Tell us what you need!</h1>
              <div className='pt-4 d-block d-md-flex gap-5'>
                <div>
                  <h5>Name</h5>
                  <div className={`info-become-client ${nameError ? 'error-become' : ''}`}>
                    <input type='text' name='name' value={formData.name} placeholder='Kevin Jhones' onChange={handleChange} />
                    {nameError && <p className='text-danger ps-1 pt-1'>Required fiel</p>}
                  </div>
                </div>
                <div>
                  <h5>Your Email</h5>
                  <div className={`info-become-client ${emailError ? 'error-become' : ''}`}>
                    <input type='text' name='email' value={formData.email} placeholder='kevinjhones@gmail.com' onChange={handleChange} />
                    {emailError && <p className='text-danger ps-1 pt-1'>Required fiel</p>}
                  </div>
                </div>
              </div>
              <h5 className='pt-4'>I'm interested in...</h5>
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
                {serviceError && <p className='text-danger ps-2 pt-1'>Select at least one</p>}
              </div>
              <h5 className='pt-4'>Tell us more about your project!</h5>
              <div className='extra-become-client'>
                <textarea name='message' value={formData.message} onChange={handleChange} placeholder='Something great about your amazing idea' />
              </div>
              <div className='d-flex justify-content-end pt-5'>
                <span className='send-request-become' onClick={handleSubmit}>Sumbit the request <FaLongArrowAltRight className='ms-3' /></span>
              </div>
              <div>
                <h5 className='pt-2'>Or if you prefer you can <a className='become-call-book' href='#calendar' onClick={closeBecomeClient}>book a call</a> directly.</h5>
              </div>
            </div>
          </div> // eslint-disable-line
          : <ThanksText />}
      </div>
    </div>
  )
}
