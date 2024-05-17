import { useRef, useState } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listProductsCosmetic } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'

function CosmeticSection() {
  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='cosmetic-section h-[1100px]  relative overflow-hidden'>
      <h1 className='text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 right-0 leading-none'>
        cosmetic
      </h1>
      <div className='ml-[7%] mt-[8%] relative z-50'>
        <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5'>
          Enhancing Your Glow <br /> with Cosmetic Elegance
        </h1>
        <p className='w-[528px] text-[18px] font-customRegular mb-10'>
          Our products are crafted to inspire confidence and self-expression, from subtle enhancements to bold
          statements. Experience the transformative power of makeup and embrace your unique style with grace. Let your
          inner radiance shine through with our exquisite collection.
        </p>
        <Button size='large' className='rounded-[26px]'>
          shop now
        </Button>
      </div>
      <img src={images.home.home_cosmetic_layer} alt='home-cosmetic' className='absolute bottom-[6%] right-0' />

      <div className='w-[880px] ml-[6%] mt-[10%] rounded-sm'>
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
                className={`${slideActive === index ? 'active' : ''} h-[390px] flex items-center justify-end`}
              >
                <div className='mt-[10px]'>
                  <ProductFunctional key={product.id} product={product} isActive={slideActive === index} />
                </div>
              </div>
            )
          })}
        </Slider>
        <div className='flex items-center gap-3 absolute bottom-[6.5%] right-[30%] '>
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

export default CosmeticSection
