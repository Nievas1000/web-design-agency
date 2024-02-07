import thanks from '../../assets/thanks.gif'

export const ThanksText = ({ becomeData }) => {
  return (
    <div className='container p-5 d-flex justify-content-center align-items-center h-100 text-thanks'>
      <div>
        <h6>{becomeData.thanksText}</h6>
        <img className='pt-1' src={thanks} alt='' />
      </div>
    </div>
  )
}
