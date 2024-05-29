import { OptionSelect } from '~/@types/common'
import './styles.scss'
import { useState } from 'react'
import { TabBackground, TabBackgroundSmall } from '~/components/tabs'
import { EditProfileTab, NotificationTab, PaymentMethodTab, PrivacySecurityTab } from '~/sections/setting'

const listTabs: OptionSelect[] = [
  {
    value: 'edit-profile',
    label: 'Edit profile'
  },
  {
    value: 'payment-method',
    label: 'Payment Method'
  },
  {
    value: 'notification-setting',
    label: 'Notification setting'
  },
  {
    value: 'privacy-security',
    label: 'Privacy & Security'
  }
]

function Setting() {
  const [activeTab, setActiveTab] = useState<string>('edit-profile')

  return (
    <div className='setting max-w-[1440px] min-h-[100vh] mx-auto bg-greyLight overflow-hidden'>
      <div className='setting-title xs:h-[80px] sm:h-[88px] px-5 flex flex-col items-start justify-center xs:gap-1 ms:gap-2'>
        <h6 className='xs:text-[18px] sm:text-[24px] font-customSemiBold xs:leading-[18.9px] sm:leading-[25.2px]'>
          Welcome, Amanda
        </h6>
        <p className='xs:text-[14px] sm:text-[16px] text-blackMain/[.64] leading-[16.8px]'>Tue, 07 June 2024</p>
      </div>

      <div className='h-full xs:p-4 lg:p-5'>
        <div className='flex items-center'>
          {listTabs.map((tab, index) => (
            <div
              key={tab.value}
              onClick={() => setActiveTab(tab.value as string)}
              className={`relative cursor-pointer hover:scale-[1.01] transition-all duration-200 ease-linear ${index > 0 && 'xs:-ml-[8.4px] lg:-ml-5'} ${tab.value === activeTab ? 'z-[100]' : index === 0 ? 'z-40' : index === 1 ? 'z-30' : index === 2 ? 'z-20' : 'z-10'}`}
            >
              <div className='xs:hidden sm:hidden md:hidden lg:block'>
                <TabBackground color={tab.value === activeTab ? 'white' : 'grey'} />
              </div>
              <div className='xs:block sm:hidden md:hidden lg:hidden xl:hidden'>
                <TabBackgroundSmall color={tab.value === activeTab ? 'white' : 'grey'} />
              </div>
              <p
                className={`${tab.value === activeTab ? 'font-customMedium' : 'opacity-[.64] font-customRegular'} xs:text-[12px] lg:text-[18px] capitalize xs:leading-[12.6px] lg:leading-[18.9px] xs:text-wrap lg:text-nowrap text-center absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2`}
              >
                {tab.label}
              </p>
            </div>
          ))}
        </div>
        <div className='xs:min-h-[685px] lg:min-h-[549px] h-full xs:p-3 xs:py-10 sm:p-5 md:p-5 lg:p-10 bg-white rounded-tl-none rounded-tr-none rounded-3xl -mt-[3.7px] flex items-center justify-center'>
          {activeTab === 'edit-profile' ? (
            <EditProfileTab />
          ) : activeTab === 'payment-method' ? (
            <PaymentMethodTab />
          ) : activeTab === 'notification-setting' ? (
            <NotificationTab />
          ) : (
            <PrivacySecurityTab />
          )}
        </div>
      </div>
    </div>
  )
}

export default Setting
