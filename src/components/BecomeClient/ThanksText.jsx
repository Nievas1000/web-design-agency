import { IoClose } from 'react-icons/io5'
import thanks from '../../assets/thanks.gif'

export const ThanksText = ({ becomeData, closeBecomeClient }) => {
  return (
    <div className='container d-flex justify-content-center align-items-center position-relative h-100 text-thanks'>
      <span className='position-absolute pointer end-0 top-0 pe-3 pt-3' onClick={closeBecomeClient}><IoClose size={30} /></span>
      <div className='pt-5'>
        <p className='d-flex justify-content-center text-center'>{becomeData.thanksText}</p>
        <img className='pt-1 w-100' src={thanks} alt='' />
      </div>
    </div>
  )
}
