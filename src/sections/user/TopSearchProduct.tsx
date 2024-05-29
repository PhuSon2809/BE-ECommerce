/* eslint-disable @typescript-eslint/no-explicit-any */

import SliderLager from '~/sections/user/SliderLager'
import SliderMedium from '~/sections/user/SliderMedium'
import SliderSmall from '~/sections/user/SliderSmall'

function TopSearchProduct() {
  return (
    <section className='top-search-product xs:px-4 sm:px-5 md:px-5 lg:px-5'>
      <div className='space-y-5 flex flex-col items-center'>
        <h1 className='xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-customSemiBold xs:leading-10 lg:leading-8 text-center capitalize'>
          top most <br className='xs:block sm:block md:block lg:hidden' /> searched products
        </h1>
        <p className='xs:w-fit lg:w-[945px] xs:text-[16px] sm:text-[20px] text-blackMain/[.64] leading-[30px] text-center'>
          Discover our most favored products: premium skincare collections for radiant skin, organic superfoods to boost
          vitality, top-rated dietary supplements for various health goals,
        </p>
      </div>

      <div className='xs:hidden sm:hidden md:hidden lg:block'>
        <SliderLager />
      </div>
      <div className='xs:hidden sm:block md:block lg:hidden xl:hidden'>
        <SliderMedium />
      </div>
      <div className='xs:block sm:hidden md:hidden lg:hidden xl:hidden'>
        <SliderSmall />
      </div>
    </section>
  )
}

export default TopSearchProduct
