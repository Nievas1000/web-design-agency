import thanks from '../../assets/thanks.gif'

export const ThanksText = () => {
  return (
    <div className='container p-5 d-flex justify-content-center align-items-center h-100 text-thanks'>
      <div>
        <h6>Thank you for your interest in our services! Your quote request has been successfully received. Our team will review the information provided and contact you soon to discuss further details and provide you with a personalized quote. In the meantime, if you have any additional questions, please feel free to contact us. We look forward to working with you to make your vision online a reality!</h6>
        <img className='pt-1' src={thanks} alt='' />
      </div>
    </div>
  )
}
