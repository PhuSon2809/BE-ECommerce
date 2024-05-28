import { useState } from 'react'
import { OptionSelect } from '~/@types/common'
import { SelectFilter } from '~/components/form'
import { ChevronDown, DoubleCheckIcon } from '~/components/icons'
import { NotificationItem } from '~/components/notificationItem'
import { SlideBanner } from '~/sections/common'

const listFilterOption: OptionSelect[] = [
  {
    value: 'heath',
    label: 'Heath'
  },
  {
    value: 'cosmetic',
    label: 'Cosmetic'
  },
  {
    value: 'fashion',
    label: 'Fashion'
  }
]

function Notification() {
  const [sortBy, setSortBy] = useState<OptionSelect>({ value: '', label: '' })

  return (
    <div className='min-h-[100vh] bg-greyLight'>
      <div className='xs:max-w-full sm:max-w-[927px] w-full mx-auto xs:py-5 sm:py-10 '>
        <SlideBanner />

        <section className='xs:mt-[20px] sm:mt-[52px] flex flex-col gap-5 xs:px-4 sm:px-4 md:px-5 lg:px-0'>
          <h1 className='xs:text-[32px] sm:text-[40px] font-customSemiBold xs:leading-[32px] sm:leading-[42px]'>
            Notification
          </h1>

          <div className='flex items-end justify-between'>
            <SelectFilter
              isSortBy
              label='Sort by'
              options={listFilterOption}
              selected={sortBy}
              setSelected={setSortBy}
              className='xs:min-w-[174px] sm:w-[202px] h-10 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
            />
            <div className='flex items-center gap-1'>
              <DoubleCheckIcon color='#0D0D0D' className='xs:size-5 sm:size-6' />
              <p className='xs:text-[14px] sm:text-[16px] xs:leading-[14.7px] sm:leading-[16.8px]'>Mark as read</p>
            </div>
          </div>

          <div className='flex flex-col xs:gap-3 sm:gap-4'>
            {Array.from({ length: 10 }).map((_, index) => (
              <NotificationItem key={index} />
            ))}
          </div>

          <div className='flex items-center justify-center gap-1 cursor-pointer'>
            <p className='xs:text-[16px] sm:text-[20px] font-customMedium xs:leading-[16.8px] sm:leading-[21px]'>
              Show more
            </p>
            <ChevronDown className='xs:size-5 sm:size-6 mt-[2px]' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Notification
