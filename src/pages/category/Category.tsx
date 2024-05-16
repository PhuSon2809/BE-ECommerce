import { useState } from 'react'
import { OptionSelect } from '~/@types/common'
import { Button } from '~/components/button'
import { SelectFilter } from '~/components/form'
import { WalletIcon } from '~/components/icons'
import { Search } from '~/components/search'
import { Navbar } from '~/layouts/components/navbar'
import { RecentPurchases, SlideBanner, TabProductList } from '~/sections/category'

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
  }
]

function Category() {
  const [isAuthenticate, setIsAuthenticate] = useState<boolean>(true)
  const [filterCategory, setFilterCategory] = useState<string>('heath')
  const [brand, setBrand] = useState<OptionSelect>({ value: '', label: '' })

  return (
    <section className='max-w-[1440px] mx-auto p-5 flex items-start gap-5'>
      <Navbar />

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

        <div className='flex gap-5'>
          <div className='w-[927px] flex flex-1 flex-col gap-5'>
            <SlideBanner />

            <div className='flex items-center gap-[10px]'>
              {listFilterOption.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => setFilterCategory(option.value as string)}
                  size='small'
                  variant={option.value === filterCategory ? 'linear' : 'grey'}
                  className={`px-[22px] w-fit`}
                  classNameText={`${option.value === filterCategory ? '!font-customSemiBold text-white' : '!font-customMedium'}`}
                >
                  {option.label}
                </Button>
              ))}
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[10px]'>
                <SelectFilter label='Brand' options={listFilterOption} selected={brand} setSelected={setBrand} />
                <SelectFilter label='Price' options={listFilterOption} selected={brand} setSelected={setBrand} />
                <SelectFilter label='Filter3' options={listFilterOption} selected={brand} setSelected={setBrand} />
              </div>
              <SelectFilter label='Sort by' options={listFilterOption} selected={brand} setSelected={setBrand} />
            </div>
          </div>
          <div className='w-[341px] flex flex-col gap-5'>
            <div className='h-[91px] px-5 flex items-center justify-between bg-greyMain rounded-2xl'>
              {isAuthenticate ? (
                <>
                  <div>
                    <p className='text-[20px] font-customSemiBold leading-[26px] capitalize mb-1'>balance</p>
                    <div className='flex items-center gap-1'>
                      {/* <img src={images.icons.wallet} alt='icon-wallet' /> */}
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
            <RecentPurchases />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Category
