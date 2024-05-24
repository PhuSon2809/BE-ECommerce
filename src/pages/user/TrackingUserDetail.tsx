import { Dispatch, SetStateAction, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OptionSelect } from '~/@types/common'
import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { SelectFilter } from '~/components/form'
import { ChevronDown } from '~/components/icons'
import { ProductOrderHistory } from '~/components/productOrderHistory'

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

function TrackingUserDetail({ userId, setOpen }: { userId?: string; setOpen?: Dispatch<SetStateAction<boolean>> }) {
  const { id } = useParams()
  const [sortBy, setSortBy] = useState<OptionSelect>({ value: '', label: '' })

  return (
    <div className='max-w-[1440px] min-h-[100vh] mx-auto bg-white'>
      <div className='h-[104px] px-[118px] flex items-center justify-between bg-gradient-to-r from-greenMain to-blueMain'>
        <div className='space-y-2'>
          <p className='text-[28px] text-white font-customSemiBold leading-[30px]'>
            Tatiana Lipshutz{' '}
            <span className='text-[18px] text-white/[.88] font-customRegular leading-[18.9px]'>
              ID: {id ? id : userId}
            </span>
          </p>
          <p className='text-[18px] text-white/[.88] font-customRegular leading-[18.9px]'>Email/Phone: 0974773737</p>
        </div>

        <SelectFilter
          isSortBy
          label='Sort by'
          options={listFilterOption}
          selected={sortBy}
          setSelected={setSortBy}
          className='w-[216px] h-12 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
        />
      </div>
      <div className='px-[118px] py-8 space-y-5'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='bg-white border-[2px] border-solid border-blackMain/[.07] rounded-[20px] shadow-card'
          >
            <div className='h-[50px] px-5 flex items-center justify-between bg-greyLight rounded-tl-[20px] rounded-tr-[20px] border-0 border-b-[2px] border-blackMain/[.07] border-solid'>
              <p className='text-[20px] text-blackMain/[.64] leading-[21px]'>
                Dealer: <span className='text-blackMain font-customSemiBold'>Marchy</span>
              </p>
            </div>

            <div className='p-4 space-y-4'>
              <div className='flex flex-col gap-4'>
                {listProducts.slice(0, 2).map((product) => (
                  <div key={product.id} className='flex items-center justify-between'>
                    <div className='w-[75%]'>
                      <ProductOrderHistory product={product} smallImage />
                    </div>
                    <p className='text-[20px] leading-[21px]'>16/04/2024, 8:09:57</p>
                  </div>
                ))}
              </div>

              <div className='flex items-center justify-start gap-1 cursor-pointer'>
                <p className='text-[16px] font-customMedium leading-[16.8px]'>Show more</p>
                <ChevronDown className='mt-[2px]' />
              </div>

              <div className='flex flex-col items-end'>
                <Button
                  onClick={() => {
                    window.history.back()
                    setOpen && setOpen(false)
                  }}
                  size='small'
                  className='w-[197px] h-[44px] !bg-gradient-to-r'
                  classNameText='text-[16px] text-white !uppercase'
                >
                  contact
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrackingUserDetail
