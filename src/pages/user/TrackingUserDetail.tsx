import { Dispatch, SetStateAction, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OptionSelect } from '~/@types/common'
import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { SelectFilter } from '~/components/form'
import { ChevronDown } from '~/components/icons'
import { ProductOrderHistory } from '~/components/productOrderHistory'
import useSelectItem from '~/hooks/useSelectItem'

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

function TrackingUserDetail({
  userId,
  isInDialog,
  setOpen
}: {
  userId?: string
  isInDialog?: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
}) {
  const { id } = useParams()

  const { selected, handleSelectItem, handleSelectAll } = useSelectItem(listProducts)

  const [sortBy, setSortBy] = useState<OptionSelect>({ value: '', label: '' })

  return (
    <>
      <div
        className={`max-w-[1440px] min-h-[100vh] mx-auto ${window.history.state.anotherRole ? 'bg-greyLight' : 'bg-white'}`}
      >
        <div className='h-[104px] xs:px-4 sm:px-5 md:px-5 lg:px-[118px] flex items-center justify-between bg-gradient-to-r from-greenMain to-blueMain'>
          <div className='space-y-2 xs:mb-6 lg:mb-0'>
            <p className='xs:text-[24px] sm:text-[26px] md:text-[26px] lg:text-[28px] text-white font-customSemiBold leading-[30px]'>
              Tatiana Lipshutz{' '}
              <span className='text-[18px] text-white/[.88] font-customRegular leading-[18.9px] xs:hidden md:inline-block'>
                ID: {id ? id : userId}
              </span>
            </p>
            <p className='xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-white/[.88] font-customRegular xs:leading-[14.7px] sm:leading-[16.9px] md:leading-[16.9px] lg:leading-[18.9px]'>
              Email/Phone: 0974773737
            </p>
          </div>

          <div className='flex flex-col items-end gap-2'>
            <span className='xs:text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px] text-white/[.88] font-customRegular xs:leading-[14.7px] sm:leading-[18.9px] xs:inline-block sm:hidden'>
              ID: {id ? id : userId}
            </span>
            <SelectFilter
              isSortBy
              label='Sort by'
              options={listFilterOption}
              selected={sortBy}
              setSelected={setSortBy}
              className='xs:min-w-[149px] sm:w-[216px] xs:h-10 sm:h-12 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
            />
          </div>
        </div>
        {window.history.state.anotherRole ? (
          <div
            className={`xs:px-4 sm:px-5 md:px-5 lg:px-[118px] xs:py-4 sm:py-5 md:py-5 lg:py-8 xs:pb-[130px] lg:pb-[120px] ${isInDialog && 'xs:h-[88vh] sm:h-[71vh] lg:h-[83vh] overflow-auto wrapper-content'}`}
          >
            <div className='xs:py-7 sm:py-0 xs:bg-white sm:bg-white md:bg-transparent flex flex-col xs:gap-0 sm:gap-4 md:gap-4 lg:gap-4 rounded-xl'>
              {listProducts.map((product) => (
                <div
                  key={product.id}
                  className='xs:px-3 sm:px-4 md:px-4 lg:px-6 xs:py-3 sm:py-4 bg-white flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xs:items-end sm:items-end md:items-end lg:items-center justify-between gap-4 rounded-2xl'
                >
                  <div className='xs:w-full sm:w-full md:w-full lg:w-[75%]'>
                    <ProductOrderHistory
                      isInDetail
                      product={product}
                      imageSize='small'
                      isItemSelected={selected.indexOf(product.id) !== -1}
                      handleSelectItem={handleSelectItem}
                    />
                  </div>
                  <p className='xs:text-[18px] sm:text-[19px] md:text-[19px] lg:text-[20px] xs:leading-[18.9px] sm:leading-[19.9px] md:leading-[19.9px] lg:leading-[21px]'>
                    16/04/2024, 8:09:57
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='xs:px-4 sm:px-5 md:px-5 lg:px-[118px] py-8 xs:space-y-10 sm:space-y-5'>
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

                <div className='p-4 xs:space-y-2 sm:space-y-4 md:space-y-4 lg:space-y-4'>
                  <div className='flex flex-col gap-4'>
                    {listProducts.slice(0, 2).map((product) => (
                      <div
                        key={product.id}
                        className='flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xs:items-end sm:items-end md:items-end lg:items-center justify-between gap-4'
                      >
                        <div className='xs:w-full sm:w-full md:w-full lg:w-[75%]'>
                          <ProductOrderHistory isInDetail product={product} imageSize='medium' />
                        </div>
                        <p className='xs:text-[18px] sm:text-[19px] md:text-[19px] lg:text-[20px] xs:leading-[18.9px] sm:leading-[19.9px] md:leading-[19.9px] lg:leading-[21px]'>
                          16/04/2024, 8:09:57
                        </p>
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
                      className='xs:w-[120px] sm:w-[197px] xs:h-10 sm:h-11 !bg-gradient-to-r'
                      classNameText='xs:text-[14px] sm:text-[16px] text-white !uppercase'
                    >
                      contact
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {window.history.state.anotherRole && (
        <div className='w-full xs:px-4 lg:px-[118px] h-[108px] flex items-center justify-between bg-white/[.02] backdrop-blur-[20px] border-0 border-t-[1px] border-solid border-blackMain/[.1] fixed bottom-0'>
          <div className='flex items-center gap-3'>
            <div className='relative h-fit'>
              <input
                type='checkbox'
                checked={selected.length === listProducts.length}
                onClick={handleSelectAll}
                className='appearance-none rounded-[4px] size-6 border-[2px] bg-white border-blackMain border-solid 
                  checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
                  checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
                  checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute xs:checked:after:top-[2px] xs:checked:after:left-[7px] sm:checked:after:top-[4.5px] sm:checked:after:left-[9px]'
              />
            </div>

            <p className='xs:text-[20px] sm:text-[18px] font-customMedium capitalize mb-[5px]'>Select all</p>
          </div>
          <Button
            size='medium'
            className={`xs:w-[120px] xs:h-10 sm:w-[197px]`}
            classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
          >
            send
          </Button>
        </div>
      )}
    </>
  )
}

export default TrackingUserDetail
