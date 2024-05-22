import { useRef, useState } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { Button } from '~/components/button'
import { SliderPagination } from '~/components/sliderPagination'
import useResponsive from '~/hooks/useResponsive'

function SlideBanner() {
  const smDown = useResponsive('down', 'sm', 'sm')

  const sliderRef = useRef<Slider>(null)

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleGoToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index)
  }

  return (
    <section className='xs:w-[390px] sm:w-[927px] relative'>
      <Slider
        ref={sliderRef}
        arrows={false}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        afterChange={(current) => setActiveSlide(current)}
      >
        {Array.from({ length: 3 }).map((_, index: number) => (
          <div
            key={index}
            className='w-full xs:h-[131px] sm:h-[240px] xs:py-[18px] xs:px-4 sm:py-0 sm:px-10 rounded-none sm:rounded-2xl bg-gradient-to-tr from-[#F2F3F5] to-[#F6F6F7] relative overflow-hidden'
          >
            <div className='h-full flex flex-col justify-center'>
              <h1 className='xs:text-[20px] sm:text-[40px] font-customSemiBold xs:leading-[15px] sm:leading-[22px] xs:mb-[6px] sm:mb-2'>
                Sale Off upto 50%
              </h1>
              <p className='xs:w-[173px] sm:w-[327px] xs:text-[10px] sm:text-[14px] opacity-[.64] xs:leading-[15px] sm:leading-[22px] xs:mb-[7px] sm:mb-5'>
                From 12/06 to 15/06, enjoy amazing discounts on all your favorite items. Don't miss out!
              </p>
              <Button
                size='large'
                className='xs:w-[80px] xs:h-[21px] rounded-[26px]'
                classNameText='!uppercase xs:text-[8.27px]'
              >
                shop now
              </Button>
            </div>
            <img
              src={images.product.product_category_banner}
              alt='product-category-banner'
              className='xs:w-[109px] xs:h-[187px] sm:h-[442px] sm:w-[258px] absolute xs:top-[-65%] sm:top-[-90%] right-[9.5%] rotate-[-21.29deg]'
            />
            <img
              src={images.product.product_category_banner}
              alt='product-category-banner'
              className='xs:w-[109px] xs:h-[187px] sm:h-[442px] sm:w-[258px] absolute top-[15%] right-[19.2%] rotate-[13.18deg]'
            />
          </div>
        ))}
      </Slider>
      <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2'>
        <SliderPagination
          gap='xs:gap-1 sm:gap-3'
          size={smDown ? 4 : 8}
          activeIndex={activeSlide}
          slideToGo={handleGoToSlide}
          slideCount={3}
        />
      </div>
    </section>
  )
}

export default SlideBanner
