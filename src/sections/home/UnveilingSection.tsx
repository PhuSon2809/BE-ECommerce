import { useRef, useState } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listProductsUnveiling } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'

function UnveilingSection() {
  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='unveiling-section h-[803px] mt-[-40px] mb-[200px] relative'>
      <h1 className='text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-[42%] left-0 leading-[252px]'>
        fashion
      </h1>
      <div className='flex relative z-50'>
        <div className='absolute left-[4.5%]'>
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
        <div className='ml-[55%] mt-[12%]'>
          <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5'>
            Unveiling the Timeless <br /> Trends of Fashion
          </h1>
          <p className='w-[587px] text-[18px] font-customRegular mb-10'>
            Discover the latest trends, iconic classics, and innovative designs shaping the fashion landscape. From
            haute couture to street style, explore the diversity and creativity defining modern fashion. Join us in
            decoding the language of style and inspiring your wardrobe.
          </p>
          <Button size='large' className='rounded-[26px]'>
            shop now
          </Button>
        </div>
      </div>

      <div className='w-[880px] ml-[40%] mt-[0%] rounded-sm relative z-[100]'>
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
              <div className={`${slideActive === index ? 'active' : ''} h-[390px] flex items-center justify-end`}>
                <div className='mt-[10px]'>
                  <ProductFunctional key={product.id} product={product} isActive={slideActive + 1 === index} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      <div className='flex items-center gap-3 absolute bottom-[-21.4%] right-[23.5%] z-[200]'>
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
    </section>
  )
}

export default UnveilingSection
