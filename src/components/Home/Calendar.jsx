import { InlineWidget } from 'react-calendly'
import { useTranslation } from 'react-i18next'

export const Calendar = () => {
  const { t } = useTranslation()
  return (
    <div id='calendar' className='calendar-container'>
      <h2 className='d-flex justify-content-center'>{t('scheduleCall')}</h2>
      <InlineWidget styles={{ overflowY: 'hidden', height: '100%', display: 'flex', alignItems: 'center' }} url='https://calendly.com/nievas' />
    </div>
  )
}
