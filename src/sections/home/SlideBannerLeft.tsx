import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { listProducts } from '~/assets/mocks/product'
import { ProductCard } from '~/components/productCard'
import useResponsive from '~/hooks/useResponsive'

function SlideBannerLeft() {
  const smDown = useResponsive('down', 'sm', 'sm')

  const sliderLeftRef = useRef<Slider>(null)

  return (
    <div className='slide-left xs:w-[358px] sm:w-[470px] ml-[60px] mb-[50px] relative'>
      <Slider
        ref={sliderLeftRef}
        dots
        centerMode
        arrows={false}
        infinite
        speed={500}
        draggable={false}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {listProducts.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            paddingContent='xs:px-3 xs:pr-10 sm:px-4 sm:pr-12'
            contentPosition='xs:bottom-[7.5%] sm:bottom-[8.5%]'
            size={smDown ? 'w-[302px] h-[230px]' : 'w-[357px] h-[272px]'}
          />
        ))}
      </Slider>

      <div className='flex items-center gap-2 absolute xs:bottom-[-14.5%] sm:bottom-[-14%] xs:right-[0%] sm:right-[5%] z-[10000]'>
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

export default SlideBannerLeft
