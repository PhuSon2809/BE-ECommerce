import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listProductsFunctional } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'
import useResponsive from '~/hooks/useResponsive'

function FunctionalSection() {
  const smDown = useResponsive('down', 'sm', 'sm')

  const sliderRef = useRef<Slider>(null)

  return (
    <section className='functional-section xs:mt-[80px] sm:mt-[100px] relative xs:pb-[100px] sm:pb-[150px] sm:px-0'>
      <h1 className='text-[240px] font-customBold uppercase text-[#F1F1F1]/[.44] absolute top-[-5%] left-1/2 transform -translate-x-1/2 xs:hidden sm:block'>
        Functional
      </h1>
      <div className='relative'>
        <h1 className='xs:text-[32px] sm:text-[52px] font-customBold text-center xs:leading-[40px] sm:leading-[64px] xs:mb-5 sm:mb-0'>
          Exploring Functional Foods for Your Health
        </h1>
        <p className='w-[358px] xs:text-[16px] sm:text-[18px] font-customRegular opacity-[.64] xs:relative sm:absolute sm:top-[31%] sm:left-[8.5%] xs:text-center sm:text-left xs:mx-auto sm:mx-0'>
          Dive into the world of functional foods and discover their transformative benefits. Learn how simple dietary
          changes can lead to a healthier, more vibrant lifestyle. With this insightful title, embark on a journey
          towards holistic well-being through the power of food.
        </p>

        <div className='xs:w-[497.4px] xs:h-[531.32px] sm:w-[677.02px] sm:h-[723.18px] sm:mx-auto rotate-[38.49deg] ml-[-90px] xs:mt-[100px] sm:mt-5'>
          <img src={images.home.home_functional} alt='home-functional' className='w-full h-full' />
        </div>

        <Button
          size='large'
          classNameText='xs:text-[16px] sm:text-[20px]'
          className='xs:w-[170px] xs:h-10 rounded-[26px] absolute xs:top-[31%] sm:top-[62%] xs:right-1/2 sm:right-[7.5%] transform xs:translate-x-1/2'
        >
          Shop now
        </Button>
        <div className='absolute top-[66%] left-1/2 transform -translate-x-1/2 flex flex-col items-end gap-5 '>
          <div className='xs:w-[390px] sm:w-[1340px] relative'>
            <Slider
              ref={sliderRef}
              arrows={false}
              infinite
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                  }
                }
              ]}
            >
              {listProductsFunctional.map((product) => (
                <div key={product.id} className='xs:h-[350px] sm:h-[400px] flex items-center justify-center'>
                  <div className='mt-[55px]'>
                    <ProductFunctional product={product} positionPrice={smDown ? 'item-end' : ''} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className='xs:size-8 sm:size-11 bg-white/[.64] backdrop-blur-[31.43px] flex items-center justify-center rounded-full absolute xs:bottom-[-8%] sm:bottom-[2%] xs:left-[40%] sm:left-[4%] shadow-popover'
        >
          <img src={images.icons.arrow_left} alt='arrow-left' className='xs:size-4 sm:size-6' />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className='xs:size-8 sm:size-11 bg-white/[.64] backdrop-blur-[31.43px] flex items-center justify-center rounded-full absolute xs:bottom-[-8%] sm:bottom-[2%] xs:right-[40%] sm:right-[3.8%] shadow-popover'
        >
          <img src={images.icons.arrow_right} alt='arrow-right' className='xs:size-4 sm:size-6' />
        </button>
      </div>
    </section>
  )
}

export default FunctionalSection
