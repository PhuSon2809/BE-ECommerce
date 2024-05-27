import { useState } from 'react'
import { SwitchButton } from '~/components/button'

const listSettingNotification = [
  {
    id: 1,
    title: 'Notification email',
    content:
      'Notification email is the email address used for sending updates and alerts regarding account or service activities. It cannot be turned off.'
  },
  {
    id: 2,
    title: 'Order update',
    content:
      'Update the status and latest information related to a placed order, including order confirmation, shipping notifications, and delivery details.'
  },
  {
    id: 3,
    title: 'Promotional program',
    content:
      'Provide the latest information about discounts, offers, and special promotions to enhance opportunities for savings.'
  }
]

function NotificationTab() {
  const [check, setCheck] = useState<boolean>(false)
  const handleOnChange = () => {
    setCheck(!check)
  }
  return (
    <div className='w-[70%] space-y-5'>
      {listSettingNotification.map((setting) => (
        <div key={setting.id} className='p-5 bg-greyLight flex items-center justify-between'>
          <div className='w-[502px] space-y-2'>
            <p className='text-[18px] font-customMedium leading-[27px]'>{setting.title}</p>
            <p className='text-[14px] text-blackMain/[.44] leading-[21px]'>{setting.content}</p>
          </div>
          <SwitchButton isChecked={check} handleOnChange={handleOnChange} />
        </div>
      ))}
    </div>
  )
}

export default NotificationTab
