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
      <div className='max-w-[927px] mx-auto py-10 '>
        <SlideBanner />

        <section className='mt-[52px] space-y-5'>
          <h1 className='text-[40px] font-customSemiBold leading-[42px]'>Notification</h1>

          <div className='flex items-end justify-between'>
            <SelectFilter
              isSortBy
              label='Sort by'
              options={listFilterOption}
              selected={sortBy}
              setSelected={setSortBy}
              className='w-[202px] h-10 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
            />
            <div className='flex items-center gap-1'>
              <DoubleCheckIcon color='#0D0D0D' />
              <p className='leading-[16.8px]'>Mark as read</p>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            {Array.from({ length: 10 }).map((_, index) => (
              <NotificationItem key={index} />
            ))}
          </div>

          <div className='flex items-center justify-center gap-1 cursor-pointer'>
            <p className='text-[20px] font-customMedium leading-[21px]'>Show more</p>
            <ChevronDown className='mt-[2px]' />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Notification
