import { useState } from 'react'
import { validateEmail } from './useBecomeClient'
import { useNavigate } from 'react-router-dom'

export const useFunnel = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSending, setIsSending] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'name') {
      setNameError(false)
    } else if (name === 'email') {
      setEmailError(false)
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const saveEmail = async (e) => {
    e.preventDefault()
    setIsSending(true)
    if (validateEmail(formData.email) && formData.name !== '') {
      try {
        const response = await fetch(
          'https://backend-agency.vercel.app/salesFunnel',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ name: formData.name, email: formData.email })
          }
        )
        if (response.status === 200) {
          setIsSending(false)
          setNameError(false)
          setEmailError(false)
          navigate('thanks-guide')
        }
      } catch (error) {
        console.log(error)
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
    }
  }

  return { formData, saveEmail, isSending, nameError, emailError, handleChange }
}
