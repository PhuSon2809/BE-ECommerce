import { useRef, useState } from 'react'
import { OptionSelect } from '~/@types/common'
import { Button } from '~/components/button'
import { SelectFilter } from '~/components/form'
import { WalletIcon } from '~/components/icons'
import { Search } from '~/components/search'
import { Navbar } from '~/layouts/components/navbar'
import {
  FlashSale,
  PurchasesChart,
  RecentPurchases,
  SlideBanner,
  TabProductList,
  FeaturedProduct,
  ListProduct
} from '~/sections/category'
import { MenuDialog } from '~/sections/common'
import './styles.scss'
import useDialog from '~/hooks/useDialog'

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
  },
  {
    value: 'food',
    label: 'Food'
  },
  {
    value: 'digital',
    label: 'Digital'
  },
  {
    value: 'digital1',
    label: 'Digital'
  },
  {
    value: 'digital2',
    label: 'Digital'
  },
  {
    value: 'digital3',
    label: 'Digital'
  },
  {
    value: 'digital4',
    label: 'Digital'
  },
  {
    value: 'digital5',
    label: 'Digital'
  },
  {
    value: 'digital6',
    label: 'Digital'
  }
]

function Category() {
  const { isOpen, setIsOpen } = useDialog()

  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(true)
  const [filterCategory, setFilterCategory] = useState<string>('heath')
  const [brand, setBrand] = useState<OptionSelect>({ value: '', label: '' })

  const scrollRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (scrollRef.current) {
      const startX = e.pageX
      const startScrollLeft = scrollRef.current.scrollLeft

      const onMouseMove = (e: MouseEvent) => {
        if (scrollRef.current) {
          const x = e.pageX - startX
          scrollRef.current.scrollLeft = startScrollLeft - x
        }
      }

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }
  }

  return (
    <>
      <section className='max-w-[1440px] mx-auto xs:px-0 xs:py-4 sm:p-5 pb-10 flex items-start gap-5 overflow-hidden'>
        <div className='xs:hidden sm:block sticky top-5'>
          <Navbar setOpenMenu={setIsOpen} />
        </div>

        <section className='flex flex-1 flex-col gap-5'>
          <div className='flex items-center justify-between'>
            <Search />
            <div onClick={() => setIsAuthenticate(!isAuthenticate)}>
              {isAuthenticate ? (
                <img
                  className='xs:size-7 sm:size-12 rounded-full'
                  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='avatar'
                />
              ) : (
                <Button size='medium' className='' classNameText='!uppercase text-[18px]'>
                  sign in
                </Button>
              )}
            </div>
          </div>

          {/* <Header /> */}

          <div className='flex gap-5'>
            <div className='xs:w-[390px] sm:w-[927px] flex flex-1 flex-col xs:gap-4 sm:gap-5'>
              <SlideBanner />

              <div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                className='flex items-center xs:pl-4 sm:pl-0 xs:gap-3 sm:gap-4 flex-nowrap overflow-auto xs:py-1 sm:py-2 xs:-mt-2 sm:-mt-3 xs:-mb-1 sm:-mb-2 list-filter cursor-grab'
              >
                {listFilterOption.map((option) => (
                  <Button
                    key={option.value}
                    onClick={() => setFilterCategory(option.value as string)}
                    size='small'
                    variant={option.value === filterCategory ? 'linear' : 'grey'}
                    className={`xs:px-[18px] sm:px-[22px] w-fit`}
                    classNameText={`${option.value === filterCategory ? '!font-customSemiBold text-white' : '!font-customMedium'} xs:text-[14px]`}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>

              <div className='flex items-center justify-between xs:px-4 sm:px-0 xs:flex-wrap sm:flex-nowrap'>
                <div className='flex items-center gap-[10px] xs:flex-wrap'>
                  <SelectFilter label='Brand' options={listFilterOption} selected={brand} setSelected={setBrand} />
                  <SelectFilter label='Price' options={listFilterOption} selected={brand} setSelected={setBrand} />
                  <SelectFilter label='Filter3' options={listFilterOption} selected={brand} setSelected={setBrand} />
                </div>
                <div className='xs:hidden sm:flex'>
                  <SelectFilter label='Sort by' options={listFilterOption} selected={brand} setSelected={setBrand} />
                </div>
              </div>

              <ListProduct />
              <FlashSale />
              <FeaturedProduct />
            </div>
            <div className='xs:hidden sm:block sticky top-5 h-[1300px] '>
              <div className='w-[341px] flex flex-col gap-5 '>
                <div className='h-[91px] px-5 flex items-center justify-between bg-greyMain rounded-2xl'>
                  {isAuthenticate ? (
                    <>
                      <div>
                        <p className='text-[20px] font-customSemiBold leading-[26px] capitalize mb-1'>balance</p>
                        <div className='flex items-center gap-1'>
                          <WalletIcon color='#626262' className='size-4' />
                          <p className='truncate'>fg8u...o84g</p>
                        </div>
                      </div>
                      <h1 className='text-[48px] font-customSemiBold leading-[50.4px] text-transparent bg-clip-text bg-gradient-to-tr from-[#5495FC] to-[#31D366]'>
                        $3,039
                      </h1>
                    </>
                  ) : (
                    <p className='font-customSemiBold'>
                      Sign In <span className='font-customRegular'>to check your wallet balance!</span>
                    </p>
                  )}
                </div>

                <TabProductList />
                <RecentPurchases isAuthenticate={isAuthenticate} />
                <PurchasesChart />
              </div>
            </div>
          </div>
        </section>
      </section>

      <MenuDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default Category
