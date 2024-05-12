import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listProductsGateway } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'

function GatewaySection() {
  const sliderRef = useRef<Slider>(null)

  return (
    <section className='functional-section mt-[100px] relative pb-[250px] overflow-hidden'>
      <h1 className='text-[240px] font-customBold uppercase text-[#F1F1F1]/[.44] absolute top-[-11%] left-1/2 transform -translate-x-1/2 text-nowrap'>
        magic ball
      </h1>
      <div className='relative overflow-visible'>
        <h1 className='text-[52px] font-customBold text-center'>Gateway to Tomorrow's Magic</h1>
        <p className='w-[358px] text-[18px] font-customRegular absolute top-[31%] left-[9%]'>
          This cutting-edge device harnesses the power of quantum mechanics to unlock the secrets of time and space,
          serving as both a visionary tool and an enigmatic oracle. With its sleek design and intuitive interface, Magic
          Ball offers users an immersive journey into the realms of magic and innovation.
        </p>
        <img src={images.home.home_gateway} alt='home-gateway' className='mx-auto mt-5' />
        <Button size='large' className='rounded-[26px] absolute top-[70%] right-[7.5%]'>
          Shop now
        </Button>
        <div className='absolute top-[75%] left-1/2 transform -translate-x-1/2 flex flex-col items-end '>
          <div className='w-[1340px] relative'>
            <Slider ref={sliderRef} arrows={false} infinite speed={500} slidesToShow={3} slidesToScroll={1}>
              {listProductsGateway.map((product) => (
                <div key={product.id} className='h-[400px] flex items-center justify-center'>
                  <div className='mt-[55px]'>
                    <ProductFunctional product={product} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className='size-11 bg-white/[.64] backdrop-blur-[31.43px] flex items-center justify-center rounded-full absolute bottom-[-12%] left-[6%]'
        >
          <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className='size-11 bg-white/[.64] backdrop-blur-[31.43px] flex items-center justify-center rounded-full absolute bottom-[-12%] right-[6%]'
        >
          <img src={images.icons.arrow_right} alt='arrow-right' className='size-6' />
        </button>
      </div>
    </section>
  )
}

export default GatewaySection
