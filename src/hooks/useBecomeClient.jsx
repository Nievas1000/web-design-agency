import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const initialState = {
  name: '',
  email: '',
  message: ''
}

export const useBecomeClient = (setShow, show) => {
  const [formData, setFormData] = useState(initialState)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [serviceError, setServiceError] = useState(false)
  const [sent, setSent] = useState(false)
  const becomeContainerRef = useRef()
  const { t } = useTranslation()
  const services = t('BECOMECLIENT.services', { returnObjects: true })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setNameError(false)
    } else if (name === 'email') {
      setEmailError(false)
    }
    console.log(name)
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    console.log(selectedOptions.length)
    e.preventDefault()
    if (
      formData.email !== '' && formData.name !== '' && selectedOptions.length > 0) {
      const response = await fetch(
        'https://backend-agency.vercel.app/getQuote',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message, services: selectedOptions })
        }
      )
      console.log(response)
      if (response.status === 200) {
        setNameError(false)
        setEmailError(false)
        setServiceError(false)
        setFormData({ ...initialState })
        setSelectedOptions([])
        setSent(true)
      }
    } else {
      if (formData.name === '') {
        setNameError(true)
      } else {
        setNameError(false)
      }
      if (formData.email === '') {
        setEmailError(true)
      } else {
        setEmailError(false)
      }
      if (selectedOptions.length === 0) {
        setServiceError(true)
      } else {
        setServiceError(false)
      }
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (becomeContainerRef.current && !becomeContainerRef.current.contains(event.target)) {
        setTimeout(() => {
          setShow(false)
        }, 500)
        becomeContainerRef.current.classList.add('out')
        document.body.classList.remove('body-no-scroll')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setShow, show])

  const handleOptionClick = (index) => {
    setServiceError(false)
    const serviceName = services[index]
    if (selectedOptions.includes(serviceName)) {
      setSelectedOptions(selectedOptions.filter((name) => name !== serviceName))
    } else {
      setSelectedOptions([...selectedOptions, serviceName])
    }
  }

  const closeBecomeClient = () => {
    becomeContainerRef.current.classList.add('out')
    setTimeout(() => {
      setShow(false)
    }, 500)
    document.body.classList.remove('body-no-scroll')
  }

  return { sent, handleChange, handleSubmit, handleOptionClick, closeBecomeClient, services, selectedOptions, becomeContainerRef, formData, nameError, emailError, serviceError }
}
