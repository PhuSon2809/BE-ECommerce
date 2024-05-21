import { useRef, useState } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listProductsRichFood } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'

function RichFoodSection() {
  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='rich-food-section xs:h-[1020px] sm:h-[1000px] mt-[50px] xs:px-4 sm:px-0 relative overflow-hidden'>
      <h1 className='xs:text-[140px] sm:text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 xs:left-[-1%] sm:left-[-11.5%] leading-none'>
        food
      </h1>
      <div className='xs:ml-0 sm:ml-[5.2%] xs:mt-[15%] sm:mt-[9%] relative z-50'>
        <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize xs:leading-[40px] sm:leading-[64px] xs:mb-4 sm:mb-5'>
          Rich Foods for Optimal <br /> Health and Well-Being
        </h1>
        <p className='xs:w-[358px] sm:w-[572px] xs:text-[16px] sm:text-[18px] font-customRegular xs:mb-4 sm:mb-10 opacity-[.64] xs:leading-6 sm:leading-7'>
          Unlock the potential of wholesome eating with 'Revitalize Your Life.' Delve into the benefits of nutrient-rich
          foods, energize your body, and cultivate a vibrant lifestyle. From boosting immunity to enhancing vitality,
          discover how healthy eating can transform your well-being.
        </p>
        <Button size='large' className='xs:w-[170px] xs:h-10 rounded-[26px]' classNameText='xs:text-[16px]'>
          shop now
        </Button>
      </div>
      <div className='xs:w-[600px] xs:h-[542.6px] sm:w-[784px] sm:h-[709px] absolute xs:top-[34%] sm:bottom-[13%] xs:right-[-55%] sm:right-0'>
        <img src={images.home.home_rich_food} alt='home-rich-food' className='size-full' />
      </div>

      <div className='xs:w-[720px] sm:w-[880px] xs:ml-[-2%] sm:ml-[4.5%] xs:mt-[80%] sm:mt-[6%] rounded-sm'>
        <Slider
          ref={sliderRef}
          arrows={false}
          infinite
          slidesToScroll={1}
          slidesToShow={2}
          beforeChange={(_: number, next: number) => setSlideActive(next)}
        >
          {listProductsRichFood.map((product, index) => {
            return (
              <div
                key={product.id}
                className={`${slideActive === index ? 'active' : ''} h-[390px] flex items-center justify-end`}
              >
                <div className='mt-[10px]'>
                  <ProductFunctional key={product.id} product={product} isActive={slideActive === index} />
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='flex items-center gap-3 absolute xs:bottom-[1.5%] sm:bottom-[3.5%] xs:right-[7%] sm:right-[26%] '>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className='xs:size-8 sm:size-11 bg-white/[.64] flex items-center justify-center rounded-full shadow-popover'
          >
            <img src={images.icons.arrow_left} alt='arrow-left' className='xs:size-4 sm:size-6' />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className='xs:size-8 sm:size-11 bg-white/[.64] flex items-center justify-center rounded-full shadow-popover'
          >
            <img src={images.icons.arrow_right} alt='arrow-right' className='xs:size-4 sm:size-6' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default RichFoodSection
