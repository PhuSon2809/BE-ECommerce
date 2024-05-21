import { useRef, useState } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listProductsUnveiling } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'
import useResponsive from '~/hooks/useResponsive'

function UnveilingSection() {
  const smDown = useResponsive('down', 'sm')

  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='unveiling-section xs:h-[840px] sm:h-[803px] xs:mt-[30px] sm:mt-[-40px] xs:mb-[280px] sm:mb-[200px] xs:px-4 sm:px-0 relative'>
      <h1 className='xs:text-[140px] sm:text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute xs:top-[-8%] sm:top-[42%] left-0 leading-[252px]'>
        fashion
      </h1>
      <div className='flex relative z-50'>
        <div className='absolute xs:top-[85%] sm:top-0 xs:left-0 sm:left-[4.5%]'>
          <img src={images.home.home_unveiling} alt='home-unveiling' className='relative top-0 left-0 z-10' />
          <img
            src={images.home.home_unvei_circle1}
            alt='home-unveiling-circle-1'
            className='absolute top-[20%] left-[10%] size-[241px]'
          />
          <img
            src={images.home.home_unvei_circle2}
            alt='home-unveiling-circle-2'
            className='absolute bottom-[19%] right-0'
          />
          <img
            src={images.home.home_unvei_ellip}
            alt='home-unveiling-ellipse'
            className='absolute bottom-[1.5%] rotate-[2deg]'
          />
        </div>
        <div className='xs:ml-0 sm:ml-[55%] mt-[12%]'>
          <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize xs:leading-[40px] sm:leading-[64px] xs:mb-4 sm:mb-5'>
            Unveiling the Timeless <br /> Trends of Fashion
          </h1>
          <p className='xs:w-[358px] sm:w-[587px] xs:text-[16px] sm:text-[18px] opacity-[.64] xs:leading-6 sm:leading-7 font-customRegular xs:mb-4 sm:mb-10'>
            Discover the latest trends, iconic classics, and innovative designs shaping the fashion landscape. From
            haute couture to street style, explore the diversity and creativity defining modern fashion. Join us in
            decoding the language of style and inspiring your wardrobe.
          </p>
          <Button size='large' className='xs:w-[170px] xs:h-10 rounded-[26px]' classNameText='xs:text-[16px]'>
            shop now
          </Button>
        </div>
      </div>

      <div className='xs:w-[740px] sm:w-[880px] xs:ml-[-5%] sm:ml-[40%] xs:mt-[90%] sm:mt-[0%] rounded-sm relative z-[100]'>
        <Slider
          ref={sliderRef}
          arrows={false}
          infinite
          slidesToScroll={1}
          slidesToShow={2}
          beforeChange={(_: number, next: number) => setSlideActive(next)}
        >
          {listProductsUnveiling.map((product, index) => {
            return (
              <div
                key={product.id}
                className={`${slideActive === index ? 'active' : ''} h-[390px] flex items-center justify-end`}
              >
                <div className='mt-[10px]'>
                  <ProductFunctional
                    key={product.id}
                    product={product}
                    isActive={slideActive + (smDown ? 0 : 1) === index}
                  />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className='flex items-center gap-3 absolute xs:bottom-[-24%] sm:bottom-[-23.5%] xs:right-[7%] sm:right-[22%] z-[200]'>
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
    </section>
  )
}

export default UnveilingSection
