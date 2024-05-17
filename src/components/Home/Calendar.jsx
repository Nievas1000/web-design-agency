import { InlineWidget } from 'react-calendly'
import { useTranslation } from 'react-i18next'

export const Calendar = () => {
  const { t } = useTranslation()
  return (
    <div id='calendar' className='container'>
      <h2 className='d-flex justify-content-center'>{t('scheduleCall')}</h2>
      <InlineWidget url='https://calendly.com/nievas/discovery-call' />
    </div>
  )
}
