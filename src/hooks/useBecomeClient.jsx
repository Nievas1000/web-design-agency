import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const initialState = {
  name: '',
  email: '',
  message: ''
}

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const useBecomeClient = (setShow, show, serviceInfo) => {
  const [formData, setFormData] = useState(initialState)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [serviceError, setServiceError] = useState(false)
  const [serviceMessage, setServiceMessage] = useState()
  const [sent, setSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const becomeContainerRef = useRef()
  const { t } = useTranslation()
  const services = t('BECOMECLIENT.services', { returnObjects: true })

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setNameError(false)
    } else if (name === 'email') {
      setEmailError(false)
    } else if (name === 'message' && serviceInfo) {
      setServiceMessage(null)
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    if (
      validateEmail(formData.email) && formData.name !== '' && selectedOptions.length > 0) {
      const response = await fetch(
        'https://backend-agency.vercel.app/getQuote',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message === '' && serviceMessage ? serviceMessage : '', services: selectedOptions })
        }
      )
      if (response.status === 200) {
        setNameError(false)
        setEmailError(false)
        setServiceError(false)
        setFormData({ ...initialState })
        setSelectedOptions([])
        setIsSending(false)
        setSent(true)
      }
    } else {
      setIsSending(false)
      if (formData.name === '') {
        setNameError(true)
      } else {
        setNameError(false)
        setIsSending(false)
      }
      if (!validateEmail(formData.email)) {
        setEmailError(true)
      } else {
        setEmailError(false)
        setIsSending(false)
      }
      if (selectedOptions.length === 0) {
        setServiceError(true)
      } else {
        setServiceError(false)
        setIsSending(false)
      }
    }
  }

  useEffect(() => {
    if (serviceInfo) {
      setServiceMessage(serviceInfo.name)
      setSelectedOptions([...selectedOptions, serviceInfo.name])
    }
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

  return { sent, handleChange, handleSubmit, handleOptionClick, closeBecomeClient, services, selectedOptions, becomeContainerRef, formData, nameError, emailError, serviceError, isSending, serviceMessage }
}
