import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listProducts } from '~/assets/mocks/product'
import { ProductCard } from '~/components/productCard'

function SlideBannerRight() {
  const sliderLeftRef = useRef<Slider>(null)

  return (
    <div className='slide-left w-[470px] ml-[60px] mb-[50px] relative'>
      <Slider
        ref={sliderLeftRef}
        dots
        centerMode
        arrows={false}
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        prevArrow={
          <button className='cursor-pointer' onClick={() => sliderLeftRef.current?.slickPrev()}>
            <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
          </button>
        }
      >
        {listProducts.map((product, index) => (
          <ProductCard key={index} product={product} size='w-[357px] h-[272px]' />
        ))}
      </Slider>

      <div className='flex items-center gap-2 absolute bottom-[-14%] right-[5%] z-[10000]'>
        <button className='cursor-pointer' onClick={() => sliderLeftRef.current?.slickPrev()}>
          <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
        </button>
        <button className='cursor-pointer' onClick={() => sliderLeftRef.current?.slickNext()}>
          <img src={images.icons.arrow_right} alt='arrow-right' className='size-6' />
        </button>
      </div>
    </div>
  )
}

export default SlideBannerRight
