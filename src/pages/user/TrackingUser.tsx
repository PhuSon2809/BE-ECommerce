import { useState } from 'react'
import { OptionSelect } from '~/@types/common'
import { SelectFilter } from '~/components/form'
import { BagAddIcon, ChevronDown, WishlistIcon } from '~/components/icons'
import { Search } from '~/components/search'
import { Header } from '~/layouts/components/header'
import {
  PayoutBoxInfo,
  PendingPaymentChart,
  ShippingChart,
  ListUserInfo,
  TopSearchProduct,
  TotalPurchasesChart
} from '~/sections/user'
import './styles.scss'

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

function TrackingUser() {
  const [sortBy, setSortBy] = useState<OptionSelect>({ value: '', label: '' })

  const anotherRole = false

  return (
    <div className='max-w-[1440px] min-h-[100vh] mx-auto xs:bg-greyLight sm:bg-white pb-[50px] overflow-hidden'>
      <div className='tracking-user'>
        <Header />

        <div className='xs:space-y-10 sm:space-y-[100px] xs:mt-5 sm:mt-[68px]'>
          {/* Chart section */}
          <section className='xs:px-4 sm:px-5 flex xs:flex-col sm:flex-col md:flex-row xs:gap-4 sm:gap-5'>
            <PendingPaymentChart />
            <ShippingChart />
          </section>

          <section className='xs:px-4 sm:px-5 xs:space-y-5 sm:space-y-6'>
            <div className='flex xs:flex-col sm:flex-col lg:flex-row xs:items-start lg:items-center xs:gap-5 sm:gap-5 lg:gap-0'>
              <h1 className='xs:text-[32px] sm:text-[44px] md:text-[56px] font-customSemiBold leading-none capitalize text-nowrap'>
                List pay out
              </h1>

              <div className='w-full flex xs:flex-col sm:flex-col md:flex-row items-start justify-end xs:gap-4 sm:gap-5'>
                <Search
                  variant='outline'
                  placeholder='Search for dealer names'
                  className='xs:w-full sm:w-full lg:w-[689px] h-12 xs:border-blackMain/[.1] sm:border-greyLight'
                />
                <SelectFilter
                  isSortBy
                  label='Sort by'
                  options={listFilterOption}
                  selected={sortBy}
                  setSelected={setSortBy}
                  className='w-[216px] h-12 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
                />
              </div>
            </div>

            <div className='space-y-5'>
              {Array.from({ length: 2 }).map((_, index) => (
                <PayoutBoxInfo key={index} />
              ))}
            </div>

            <div className='flex items-center justify-center gap-1 cursor-pointer'>
              <p className='xs:text-[18px] sm:text-[23px] md:text-[28px] font-customMedium xs:leading-[18.9px] sm:leading-[24px] md:leading-[29.4px]'>
                Show more
              </p>
              <ChevronDown className='xs:size-5 sm:size-6 mt-[2px]' />
            </div>
          </section>

          <div className='relative xs:!mt-[70px] sm:!mt-[180px]'>
            <section className='w-full xs:px-4 sm:px-5 absolute xs:top-[-35px] sm:top-[-70px]'>
              <div className='grid grid-cols-3 xs:gap-[6px] sm:gap-[6px] md:gap-[10px] lg:gap-10'>
                <div className='bg-linear col-span-1 xs:h-[60px] sm:h-[90px] md:h-[120px] lg:h-[140px] xs:px-2 sm:px-4 md:px-5 lg:px-10 flex items-center justify-between xs:rounded-xl sm:rounded-2xl md:rounded-[20px] lg:rounded-3xl shadow-card text-white'>
                  <h6 className='xs:text-[14px] sm:text-[35px] md:text-[42px] lg:text-[56px] font-customSemiBold xs:leading-[18.2px] sm:leading-[40px] md:leading-[63.33px]'>
                    14,870
                  </h6>
                  <p className='w-fit xs:text-[8px] sm:text-[13px] md:text-[16px] lg:text-[18px] font-customSemiBold xs:leading-[11px] sm:leading-[15px] md:leading-5 lg:leading-7 uppercase'>
                    products <br /> added to <br className='xs:block sm:block md:block lg:hidden' /> cart{' '}
                    <br className='xs:hidden sm:hidden md:hidden lg:block' /> or{' '}
                    <br className='xs:block sm:block md:block lg:hidden' /> wishlist
                  </p>
                </div>
                <div className='col-span-1 xs:h-[60px] sm:h-[90px] md:h-[120px] lg:h-[140px] xs:rounded-xl sm:rounded-3xl shadow-card relative'>
                  <div className='size-full xs:rounded-xl sm:rounded-2xl md:rounded-[20px] lg:rounded-3xl bg-gradient-to-l from-blueMain to-greenMain' />
                  <div className='w-full xs:h-[57px] sm:h-[87px] md:h-[117px] lg:h-[137px] xs:p-3 sm:p-4 md:p-5 flex flex-col justify-between bg-white xs:rounded-[10px] sm:rounded-[14px] md:rounded-[18px] lg:rounded-[23px] absolute top-0'>
                    <div className='flex items-start justify-between'>
                      <p className='xs:text-[14px] sm:text-[24px] md:text-[34px] lg:text-[48px] font-customSemiBold leading-none'>
                        8,892
                      </p>
                      <div className='mb-2'>
                        <BagAddIcon className='xs:size-3 sm:size-6 md:size-7 lg:size-[36px]' />
                      </div>
                    </div>
                    <p className='xs:text-[8px] sm:text-[13px] md:text-[18px] font-customSemiBold leading-none uppercase text-blackMain/[.64]'>
                      add to cart
                    </p>
                  </div>
                </div>
                <div className='col-span-1 xs:h-[60px] sm:h-[90px] md:h-[120px] lg:h-[140px] xs:p-3 sm:p-4 md:p-5 flex flex-col justify-between bg-white xs:rounded-xl sm:rounded-2xl md:rounded-[20px] lg:rounded-3xl shadow-card'>
                  <div className='flex items-start justify-between'>
                    <p className='xs:text-[14px] sm:text-[24px] md:text-[34px] lg:text-[48px] font-customSemiBold leading-none'>
                      8,892
                    </p>
                    <div className='mb-2'>
                      <WishlistIcon className='xs:size-3 sm:size-6 md:size-7 lg:size-[36px]' />
                    </div>
                  </div>
                  <p className='xs:text-[8px] sm:text-[13px] md:text-[18px] xs:mb-1 sm:mb-0 font-customSemiBold leading-none uppercase text-blackMain/[.64]'>
                    wishlist
                  </p>
                </div>
              </div>
            </section>

            <ListUserInfo />
          </div>

          {!anotherRole && (
            <>
              <TopSearchProduct />
              <TotalPurchasesChart />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrackingUser
