import React, { useState } from 'react'
import { FaPhoneAlt, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'

const initialState = {
  firstName: '',
  email: '',
  message: ''
}
export const Contact = (props) => {
  const [{ firstName, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      message !== '' ||
      email !== '' ||
      firstName !== '') {
      const response = await fetch(
        'https://backend-portafolio-lpbe4noe6-nievas1000.vercel.app/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({ firstName, email, message, lastName: '' })
        }
      )
      console.log(response)
      clearState()
    }
  }
  return (
    <div id='contact'>
      <div className='container pt-5 pb-5'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='section-title'>
              <h2>Get In Touch</h2>
              <p>
                Please fill out the form below to send us an email and we will
                get back to you as soon as possible.
              </p>
            </div>
            <form name='sentMessage' onSubmit={handleSubmit}>
              <div className='d-flex gap-1'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='name'
                      name='firstName'
                      className='form-control'
                      placeholder='Name'
                      required
                      onChange={handleChange}
                      value={firstName}
                    />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      required
                      onChange={handleChange}
                      value={email}
                    />
                    <p className='help-block text-danger' />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <textarea
                  name='message'
                  id='message'
                  className='form-control'
                  rows='4'
                  placeholder='Message'
                  required
                  onChange={handleChange}
                  value={message}
                />
                <p className='help-block text-danger' />
              </div>
              <div id='success' />
              <span type='submit' className='button-more w-25'>
                Send Message
              </span>
            </form>
          </div>
          <div className='container col-md-3 col-md-offset-1 contact-info'>
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
                lautynievas09@gmail.com
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

/* <div id='contact' className='container'>
        <div className='row'>
          <div>
            <div className='col-md-8'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' onSubmit={handleSubmit}>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      id='name'
                      name='firstName'
                      className='form-control'
                      placeholder='Name'
                      required
                      onChange={handleChange}
                      value={firstName}
                    />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='form-control'
                      placeholder='Email'
                      required
                      onChange={handleChange}
                      value={email}
                    />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                    value={message}
                  />
                  <p className='help-block text-danger' />
                </div>
                <div id='success' />
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker' /> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone' /> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o' /> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-instagram' />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-github' />
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-linkedin' />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{' '}
            <a href='http://www.templatewire.com' rel='nofollow'>
              TemplateWire
            </a>
          </p>
        </div>
      </div> */
