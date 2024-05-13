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
    <section className='rich-food-section h-[1000px] mt-[50px] relative overflow-hidden'>
      <h1 className='text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 left-[-11.5%] leading-none'>
        food
      </h1>
      <div className='ml-[5.2%] mt-[9%] relative z-50'>
        <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5'>
          Rich Foods for Optimal <br /> Health and Well-Being
        </h1>
        <p className='w-[572px] text-[18px] font-customRegular mb-10 leading-7'>
          Unlock the potential of wholesome eating with 'Revitalize Your Life.' Delve into the benefits of nutrient-rich
          foods, energize your body, and cultivate a vibrant lifestyle. From boosting immunity to enhancing vitality,
          discover how healthy eating can transform your well-being.
        </p>
        <Button size='large' className='rounded-[26px]'>
          shop now
        </Button>
      </div>
      <img src={images.home.home_rich_food} alt='home-rich-food' className='absolute bottom-[13%] right-0' />

      <div className='w-[880px] ml-[4.5%] mt-[6%] rounded-sm'>
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
              <div className={`${slideActive === index ? 'active' : ''} h-[390px] flex items-center justify-end`}>
                <div className='mt-[10px]'>
                  <ProductFunctional key={product.id} product={product} isActive={slideActive === index} />
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='flex items-center gap-3 absolute bottom-[12.5%] right-[31%] '>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className='size-11 bg-white/[.64] flex items-center justify-center rounded-full shadow-popover'
          >
            <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className='size-11 bg-white/[.64] flex items-center justify-center rounded-full shadow-popover'
          >
            <img src={images.icons.arrow_right} alt='arrow-right' className='size-6' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default RichFoodSection
