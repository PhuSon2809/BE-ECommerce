/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { EffectCreative, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import images from '~/assets'
import { listProducts } from '~/assets/mocks/product'
import { ProductTopSearch } from '~/components/productTopSearch'
import { SliderPagination } from '~/components/sliderPagination'

function TopSearchProduct() {
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
    if (swiperRef.current && swiperRef.current?.swiper) {
      updatePreviousActiveClass()
    }
  }, [swiperRef])

  return (
    <section className='top-search-product px-5'>
      <div className='space-y-5 flex flex-col items-center'>
        <h1 className='text-[56px] font-customSemiBold leading-8 text-center capitalize'>top most searched products</h1>
        <p className='w-[945px] text-[20px] text-blackMain/[.64] leading-[30px] text-center'>
          Discover our most favored products: premium skincare collections for radiant skin, organic superfoods to boost
          vitality, top-rated dietary supplements for various health goals,
        </p>
      </div>

      <div className='h-[540px] mt-[70px]'>
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
              translate: ['-370px', '25px', 0],
              rotate: [0, 0, -12],
              origin: 'bottom'
            },
            next: {
              translate: ['370px', '40px', 0],
              rotate: [0, 0, 12],
              origin: 'bottom'
            }
          }}
          pagination={{ clickable: true }}
          modules={[EffectCreative, Pagination, Navigation]}
          // onSlideChangeTransitionEnd={updatePreviousActiveClass}
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
      <div className='w-full flex items-center justify-center gap-5'>
        <div
          ref={prevRef}
          onClick={() => {
            swiperRef.current?.swiper.slidePrev()
            updatePreviousActiveClass()
          }}
        >
          <img src={images.icons.arrow_left} alt='arrow-left-icon' className='size-8 cursor-pointer' />
        </div>
        <SliderPagination
          className='!size-[10px]'
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
          <img src={images.icons.arrow_right} alt='arrow-right-icon' className='size-8 cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default TopSearchProduct
