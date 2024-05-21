import { useRef, useState } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listProductsCosmetic } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'
import useResponsive from '~/hooks/useResponsive'

function CosmeticSection() {
  const smDown = useResponsive('down', 'sm', 'sm')

  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='cosmetic-section xs:h-[930px] sm:h-[1100px] xs:px-4 sm:px-0 relative overflow-hidden'>
      <h1 className='xs:text-[140px] sm:text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 right-0 leading-none'>
        cosmetic
      </h1>
      <div className='xs:ml-0 sm:ml-[7%] mt-[8%] relative z-50'>
        <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize xs:leading-[40px] sm:leading-[64px] xs:mb-4 sm:mb-5 text-nowrap'>
          Enhancing Your Glow <br /> with Cosmetic Elegance
        </h1>
        <p className='xs:w-[358px] sm:w-[528px] xs:text-[16px] sm:text-[18px] font-customRegular opacity-[.64] xs:leading-6 sm:leading-7 xs:mb-4 sm:mb-10 xs:tracking-[-0.2px] sm:tracking-normal'>
          Our products are crafted to inspire confidence and self-expression, from subtle enhancements to bold
          statements. Experience the transformative power of makeup and embrace your unique style with grace. Let your
          inner radiance shine through with our exquisite collection.
        </p>
        <Button size='large' className='xs:w-[170px] xs:h-10 rounded-[26px]' classNameText='xs:text-[16px]'>
          shop now
        </Button>
      </div>
      <div className='xs:w-[600px] xs:h-[503px] sm:w-[998px] sm:h-[846px] absolute xs:top-[28%] sm:bottom-[6%] xs:right-[-45%] sm:right-0'>
        <img src={images.home.home_cosmetic_layer} alt='home-cosmetic' className='size-full' />
      </div>

      <div className='xs:w-[720px] sm:w-[880px] xs:ml-[-2%] sm:ml-[6%] xs:mt-[60%] sm:mt-[10%] rounded-sm'>
        <Slider
          ref={sliderRef}
          arrows={false}
          infinite
          slidesToScroll={1}
          slidesToShow={2}
          beforeChange={(_: number, next: number) => setSlideActive(next)}
        >
          {listProductsCosmetic.map((product, index) => {
            return (
              <div
                key={product.id}
                className={`${slideActive === index ? 'active' : ''} xs:h-[330px] sm:h-[390px] flex items-center justify-end`}
              >
                <div className='mt-[10px]'>
                  <ProductFunctional
                    key={product.id}
                    product={product}
                    isActive={slideActive === index}
                    positionPrice={smDown ? 'item-end' : ''}
                  />
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='flex items-center xs:gap-2 sm:gap-3 absolute xs:bottom-[2%] sm:bottom-[6.5%] xs:right-[7%] sm:right-[25%] '>
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

export default CosmeticSection
