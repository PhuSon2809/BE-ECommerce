import { useRef } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listProducts } from '~/assets/mocks/product'
import { ProductCard } from '~/components/productCard'

function TechnologySection() {
  const sliderLeftRef = useRef<Slider>(null)

  return (
    <section className='h-[810px] py-[105px] mt-[100px] px-10 bg-blackMain text-white flex justify-between'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[52px] font-customBold leading-[64px]'>
          Our Cutting-Edge
          <br /> Technologies
        </h1>
        <p className='w-[338px] text-[18px] font-customRegular'>
          Join us on this journey of discovery, where imagination meets reality and the extraordinary becomes routine.
        </p>
      </div>

      {/* <div className='w-[700px]'>
        <Slider dots arrows={false} infinite speed={500} slidesToScroll={1} slidesToShow={3}>
          <div className='w-[477px] h-[600px] bg-white/[.64] rounded-3xl'></div>
          <div className='w-[477px] h-[600px] bg-white/[.64] rounded-3xl'></div>
          <div className='w-[477px] h-[600px] bg-white/[.64] rounded-3xl'></div>
          <div className='w-[477px] h-[600px] bg-white/[.64] rounded-3xl'></div>
        </Slider>
      </div> */}
      <div className='slide-left w-[470px] ml-[60px] mb-[50px] relative'>
        <Slider
          ref={sliderLeftRef}
          dots
          centerMode
          arrows={false}
          infinite
          speed={500}
          slidesToShow={2}
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
    </section>
  )
}

export default TechnologySection
