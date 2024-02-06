import { InlineWidget } from 'react-calendly'

export const Calendar = () => {
  return (
    <div id='calendar' className='calendar-container'>
      <h1 className='d-flex justify-content-center'>Let's schedule a call!</h1>
      <InlineWidget styles={{ overflowY: 'hidden', height: '100%', display: 'flex', alignItems: 'center' }} url='https://calendly.com/nievas' />
    </div>
  )
}
