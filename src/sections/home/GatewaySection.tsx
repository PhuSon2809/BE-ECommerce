import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listProductsGateway } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'

function GatewaySection() {
  const sliderRef = useRef<Slider>(null)

  return (
    <section className='functional-section mt-[100px] relative pb-[250px]'>
      <h1 className='xs:text-[140px] sm:text-[240px] font-customBold uppercase text-[#F1F1F1]/[.44] absolute xs:top-[-12%] sm:top-[-11%] left-1/2 transform -translate-x-1/2 text-nowrap'>
        magic ball
      </h1>
      <div className='relative overflow-visible'>
        <h1 className='xs:text-[32px] sm:text-[52px] font-customBold text-center xs:leading-[40px] sm:leading-[64px]'>
          Gateway to <br className='xs:block sm:hidden' /> Tomorrow's Magic
        </h1>
        <p className='xs:w-[346px] sm:w-[358px] xs:text-[16px] sm:text-[18px] font-customRegular text-center xs:relative sm:absolute opacity-[.64] top-[31%] sm:left-[9%] xs:mx-auto sm:mx-0 xs:mt-5 sm:mt-0'>
          This cutting-edge device harnesses the power of quantum mechanics to unlock the secrets of time and space,
          serving as both a visionary tool and an enigmatic oracle. With its sleek design and intuitive interface, Magic
          Ball offers users an immersive journey into the realms of magic and innovation.
        </p>
        <img src={images.home.home_gateway} alt='home-gateway' className='mx-auto mt-5 sm:w-[1100px] sm:h-[619px]' />
        <Button size='large' className='xs:hidden sm:block rounded-[26px] absolute top-[70%] right-[7.5%]'>
          Shop now
        </Button>
        <div className='absolute xs:top-[80%] sm:top-[75%] left-1/2 transform -translate-x-1/2 flex flex-col items-end '>
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
              {listProductsGateway.map((product) => (
                <div key={product.id} className='h-[400px] flex items-center justify-center'>
                  <div className='mt-[55px]'>
                    <ProductFunctional product={product} positionPrice='item-end' />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className='xs:size-8 sm:size-11 bg-white/[.64] backdrop-blur-[31.43px] flex items-center justify-center rounded-full absolute  xs:bottom-[-52%] sm:bottom-[-12%] xs:left-[40%] sm:left-[4%] shadow-popover'
        >
          <img src={images.icons.arrow_left} alt='arrow-left' className='xs:size-4 sm:size-6' />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className='xs:size-8 sm:size-11 bg-white/[.64] backdrop-blur-[31.43px] flex items-center justify-center rounded-full absolute  xs:bottom-[-52%] sm:bottom-[-12%] xs:right-[40%] sm:right-[4%] shadow-popover'
        >
          <img src={images.icons.arrow_right} alt='arrow-right' className='xs:size-4 sm:size-6' />
        </button>
      </div>
    </section>
  )
}

export default GatewaySection
