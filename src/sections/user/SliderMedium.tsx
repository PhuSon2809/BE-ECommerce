/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { listProducts } from '~/assets/mocks/product'
import { ArrowLeftIcon, ArrowRightIcon } from '~/components/icons'
import { ProductTopSearch } from '~/components/productTopSearch'
import { SliderPagination } from '~/components/sliderPagination'

function SliderMedium() {
  const swiperRef = useRef<any>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleGoToSlide = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index)
      setActiveSlide(index)
      updatePreviousActiveClass()
    }
  }

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setActiveSlide(swiperRef.current.swiper.realIndex)
      updatePreviousActiveClass()
    }
  }

  const updatePreviousActiveClass = () => {
    document.querySelectorAll('.swiper-slide').forEach((el: Element) => {
      el.classList.remove('active')
    })

    document.querySelectorAll('.swiper-slide-prev').forEach((el: Element) => {
      if (el.previousElementSibling && el.previousElementSibling.previousElementSibling) {
        el.previousElementSibling.previousElementSibling.classList.add('active')
      }
    })
  }

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      updatePreviousActiveClass()
    }
  }, [swiperRef])

  return (
    <>
      <div className='h-[320px] mt-[50px]'>
        <Swiper
          ref={swiperRef}
          loop
          grabCursor
          centeredSlides
          centeredSlidesBounds
          effect={'creative'}
          slidesPerView={3}
          initialSlide={5}
          freeMode={true}
          creativeEffect={{
            perspective: true,
            limitProgress: 5,
            prev: {
              translate: ['-240px', '10px', 0],
              rotate: [0, 0, -8],
              origin: 'bottom'
            },
            next: {
              translate: ['240px', '10px', 0],
              rotate: [0, 0, 8],
              origin: 'bottom'
            }
          }}
          pagination={{ clickable: true }}
          modules={[EffectCreative, Pagination, Navigation]}
          onSlideChangeTransitionEnd={updatePreviousActiveClass}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined
          }}
          className='my-swiper'
          onSlideChange={handleSlideChange}
          onInit={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.update()
          }}
        >
          {listProducts.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <ProductTopSearch product={product} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <div className='w-full flex items-center justify-center gap-5 z-[200]'>
        <div
          ref={prevRef}
          onClick={() => {
            swiperRef.current?.swiper.slidePrev()
            updatePreviousActiveClass()
          }}
        >
          <ArrowLeftIcon className='size-7 cursor-pointer' />
        </div>
        <SliderPagination
          className='!size-[9px]'
          activeIndex={activeSlide}
          slideToGo={handleGoToSlide}
          slideCount={listProducts.length}
        />
        <div
          ref={prevRef}
          onClick={() => {
            swiperRef.current?.swiper.slideNext()
            updatePreviousActiveClass()
          }}
        >
          <ArrowRightIcon className='size-7 cursor-pointer' />
        </div>
      </div>
    </>
  )
}

export default SliderMedium
