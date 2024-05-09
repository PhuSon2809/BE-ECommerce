/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { FreeShippingCard } from '~/components/freeShippingCard'
import { GlobalWarranty } from '~/components/globalWarranty'
import { RefundCard } from '~/components/refundCard'

function ModelProductSection() {
  const [slideActive, setSlideActive] = useState<number>(0)

  const sliderRef = useRef<Slider>(null)

  const settings = {
    arrows: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setSlideActive(next)
  }

  return (
    <section className='model-product py-[50px] pt-[180px] relative'>
      <div className='mb-[100px]'>
        <h1 className='text-[56px] font-customSemiBold leading-[72px] capitalize text-center'>
          Vamp one perfume bottle
        </h1>
        <p className='w-[926px] text-[20px] leading-[32px] text-center text-blackMain/[.80] mx-auto'>
          Elevate your essence with "Vamp one perfume bottle", an embodiment of refined masculinity and timeless
          sophistication. Crafted for the modern gentleman who exudes confidence and charm, this fragrance captures the
          essence of strength and elegance.
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <svg width='289' height='907' viewBox='0 0 289 907' fill='none'>
          <path d='M0 0C63.3571 0 117.885 44.7698 130.218 106.915L289 907H0V0Z' fill='url(#linear_left)' />
          <defs>
            <linearGradient id='linear_left' x1='-72' y1='19.5' x2='234.499' y2='1002' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#F8F8F9' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>

        <svg width='289' height='907' viewBox='0 0 289 907' fill='none'>
          <path d='M289 0C225.643 0 171.115 44.7698 158.782 106.915L0 907H289V0Z' fill='url(#linear_right)' />
          <defs>
            <linearGradient id='linear_right' x1='361' y1='19.5' x2='54.5005' y2='1002' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#F8F8F9' />
              <stop offset='1' stopColor='white' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='absolute top-[52.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative'>
          <div className='z-[100]'>
            <img src={images.product.product_single} alt='product-single' />
          </div>
          <div id='circle-big' className='absolute top-[20%] left-[-62%] -z-10'>
            <svg width='434' height='434' viewBox='0 0 434 434' fill='none'>
              <circle cx='217' cy='217' r='217' fill='#ECF2F3' />
            </svg>
          </div>
          <div id='circle-small' className='absolute top-[53%] right-[-35%] -z-10'>
            <svg width='290' height='290' viewBox='0 0 290 290' fill='none'>
              <circle cx='145' cy='145' r='145' fill='#ECF2F3' />
            </svg>
          </div>
        </div>
      </div>
      <div className='w-full px-4 absolute bottom-[4%] z-[200]'>
        <div className='w-full h-[398px] bg-gradient-to-t from-[#F2F3F5] to-[#F2F3F5]/[.0] rounded-bl-[60px] rounded-br-[60px]'></div>
      </div>

      <div className='w-full px-[25px] absolute bottom-[10%] z-[500] '>
        <div className=''>
          <Slider ref={sliderRef} {...settings}>
            {[
              <FreeShippingCard />,
              <GlobalWarranty />,
              <RefundCard />,
              <FreeShippingCard />,
              <GlobalWarranty />,
              <RefundCard />
            ].map((item, index) => (
              <div key={index} className={index === slideActive ? 'slide slide-active' : 'slide'}>
                {item}
              </div>
            ))}
          </Slider>
          <div className='flex items-center gap-5 absolute bottom-[-20%] left-[50%] transform -translate-x-[50%]'>
            <button className='cursor-pointer ' onClick={() => sliderRef.current?.slickPrev()}>
              <img src={images.icons.arrow_left} alt='arrow-left' />
            </button>
            <button className='cursor-pointer' onClick={() => sliderRef.current?.slickNext()}>
              <img src={images.icons.arrow_right} alt='arrow-right' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModelProductSection
