import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaLongArrowAltRight } from 'react-icons/fa'

const services = ['Custom Web Design', 'Template Web Design', 'Website Help', 'Website Maintenance']

export const BecomeClient = ({ setShow }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleOptionClick = (index) => {
    const updatedSelectedOptions = [...selectedOptions]

    const isSelected = updatedSelectedOptions.includes(index)

    if (isSelected) {
      updatedSelectedOptions.splice(updatedSelectedOptions.indexOf(index), 1)
    } else {
      updatedSelectedOptions.push(index)
    }
    setSelectedOptions(updatedSelectedOptions)
  }

  const closeBecomeClient = () => {
    setShow(false)
    document.body.classList.remove('body-no-scroll')
  }

  return (
    <div className='become-container'>
      <div className='become-content'>
        <span className='position-absolute end-0 pe-3 pt-3' onClick={closeBecomeClient}><IoClose size={30} /></span>
        <div className='container p-5'>
          <h1>Hey! Tell us what you need!</h1>
          <div className='pt-4 d-block d-md-flex gap-5'>
            <div>
              <h5>Name</h5>
              <div className='info-become-client'>
                <input type='text' placeholder='Kevin Jhones' />
              </div>
            </div>
            <div>
              <h5>Your Email</h5>
              <div className='info-become-client'>
                <input type='text' placeholder='kevinjhones@gmail.com' />
              </div>
            </div>
          </div>
          <h5 className='pt-4'>I'm interested in...</h5>
          <div className='interesed-bubbles'>
            {services.map((option, index) => (
              <span
                key={index}
                onClick={() => handleOptionClick(index)}
                className={selectedOptions.includes(index) ? 'selected-bubble' : ''}
              >
                {option}
              </span>
            ))}
          </div>
          <h5 className='pt-4'>Tell us more about your project!</h5>
          <div className='extra-become-client'>
            <textarea placeholder='Something great about your amazing idea' />
          </div>
          <div className='d-flex justify-content-end pt-5'>
            <span className='send-request-become'>Sumbit the request <FaLongArrowAltRight className='ms-3' /></span>
          </div>
        </div>
      </div>
    </div>
  )
}
