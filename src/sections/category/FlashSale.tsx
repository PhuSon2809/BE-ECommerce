import { useRef, useState } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'
import { ProductCard } from '~/components/productCard'
import { SliderPagination } from '~/components/sliderPagination'
import { TimeCountdown } from '~/components/timeCountdown'
import BgFlashSale from './BgFlashSale'

function FlashSale() {
  const sliderRef = useRef<Slider>(null)

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleGoToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index)
  }

  return (
    <section className='xs:w-[390px] sm:w-[925px] xs:h-[844px] sm:h-[460px] xs:px-4 sm:px-0 xs:pt-[30px] sm:pt-0 xs:mt-[50px] sm:mt-[80px] bg-gradient-to-r from-[#F2F3F5] to-[#F6F6F7] xs:rounded-tl-[28.48px] xs:rounded-br-[28.48px] sm:rounded-tl-[40px] sm:rounded-br-[40px] overflow-hidden'>
      <div className='flex xs:flex-col sm:flex-row items-center gap-10'>
        <div className='w-fit h-fit'>
          <BgFlashSale />
        </div>
        <div className='w-full h-full '>
          <div className='flex items-center gap-10'>
            <div className='flex items-center gap-[2px]'>
              <p className='text-[32px] text-orangeMain uppercase font-customBold'>f</p>
              <img src={images.icons.flash_sale_icon} alt='flash-sale-icon' />
              <p className='text-[32px] text-orangeMain uppercase font-customBold tracking-wide'>ash sale</p>
            </div>

            <TimeCountdown duration={2 * 60 * 60 * 1000} />
          </div>

          <div className='w-[560px] mt-[10px]'>
            <Slider
              ref={sliderRef}
              arrows={false}
              infinite
              slidesToShow={2}
              slidesToScroll={1}
              afterChange={(current) => setActiveSlide(current)}
            >
              {listDiscovers.slice(0, 4).map((product) => (
                <div key={product.id}>
                  <ProductCard
                    product={product}
                    size='w-[260px] h-[260px]'
                    fontSize='small'
                    ptContent='pt-1'
                    buttonAddBagPosition='right-[6%]'
                    inCategory
                  />
                </div>
              ))}
            </Slider>

            <div className='flex items-center gap-4 mt-[15px]'>
              <img
                src={images.icons.arrow_left}
                alt='arrow-left-icon'
                className='size-6 cursor-pointer'
                onClick={() => sliderRef.current?.slickPrev()}
              />
              <SliderPagination
                className='!size-[8px]'
                activeIndex={activeSlide}
                slideToGo={handleGoToSlide}
                slideCount={listDiscovers.slice(0, 4).length}
              />
              <img
                src={images.icons.arrow_right}
                alt='arrow-right-icon'
                className='size-6 cursor-pointer'
                onClick={() => sliderRef.current?.slickNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlashSale
