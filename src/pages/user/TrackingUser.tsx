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
    <div className='max-w-[1440px] min-h-[100vh] mx-auto bg-white pb-[50px] overflow-hidden'>
      <div className='tracking-user'>
        <Header />

        <div className='space-y-[100px] mt-[68px]'>
          {/* Chart section */}
          <section className='px-5 flex gap-5'>
            <PendingPaymentChart />
            <ShippingChart />
          </section>

          <section className='px-5 space-y-6'>
            <div className='flex items-center justify-between'>
              <h1 className='text-[56px] font-customSemiBold leading-none capitalize'>List pay out</h1>

              <div className='flex items-center gap-5'>
                <Search
                  variant='outline'
                  placeholder='Search for dealer names'
                  className='w-[689px] h-12 border-greyLight'
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
              <p className='text-[28px] font-customMedium leading-[29.4px]'>Show more</p>
              <ChevronDown className='mt-[2px]' />
            </div>
          </section>

          <div className='relative !mt-[180px]'>
            <section className='w-full px-5 absolute top-[-70px]'>
              <div className='flex items-center justify-between'>
                <div className='bg-linear w-[453px] h-[140px] px-10 flex items-center justify-between rounded-3xl shadow-card text-white'>
                  <h6 className='text-[56px] font-customSemiBold leading-[63.33px]'>14,870</h6>
                  <p className='text-[18px] font-customSemiBold leading-7 uppercase'>
                    products <br /> added to cart <br /> or wishlist
                  </p>
                </div>
                <div className='w-[453px] h-[140px] rounded-3xl shadow-card relative'>
                  <div className='size-full rounded-3xl bg-gradient-to-l from-blueMain to-greenMain' />
                  <div className='w-full h-[137px] p-5 flex flex-col justify-between bg-white rounded-[23px] absolute top-0'>
                    <div className='flex items-start justify-between'>
                      <p className='text-[48px] font-customSemiBold leading-none'>8,892</p>
                      <div className='mb-2'>
                        <BagAddIcon />
                      </div>
                    </div>
                    <p className='text-[18px] font-customSemiBold leading-none uppercase text-blackMain/[.64]'>
                      add to cart
                    </p>
                  </div>
                </div>
                <div className='w-[453px] h-[140px] p-5 flex flex-col justify-between bg-white rounded-3xl shadow-card'>
                  <div className='flex items-start justify-between'>
                    <p className='text-[48px] font-customSemiBold leading-none'>8,892</p>
                    <div className='mb-2'>
                      <WishlistIcon />
                    </div>
                  </div>
                  <p className='text-[18px] font-customSemiBold leading-none uppercase text-blackMain/[.64]'>
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
