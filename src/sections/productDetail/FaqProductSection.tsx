import { useRef } from 'react'
import Slider from 'react-slick'

import { FaqProducts } from '~/assets/mocks/faqProduct'
import { FaqProductCard } from '~/components/faqProductCard'
import images from '~/assets'
import './styles.scss'

function FaqProductSection() {
  const sliderFaqProductRef = useRef<Slider>(null)

  return (
    <section className='faq-product relative pl-4 xs:mt-5 sm:mt-10'>
      <h1 className='xs:hidden sm:block text-[56px] font-customBold leading-[76px] capitalize text-center mb-10'>
        FAQ for products
      </h1>
      <div className='relative'>
        <Slider
          ref={sliderFaqProductRef}
          dots
          arrows={false}
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]}
        >
          {FaqProducts.map((faq, index) => {
            return (
              <div key={index}>
                <FaqProductCard faq={faq} />
              </div>
            )
          })}
        </Slider>
        <button
          className='xs:hidden sm:flex cursor-pointer absolute bottom-[-55.8px] left-[45%] transform -translate-x-[45%]'
          onClick={() => sliderFaqProductRef.current?.slickPrev()}
        >
          <img src={images.icons.arrow_left} alt='arrow-left' />
        </button>
        <button
          className='xs:hidden sm:flex cursor-pointer absolute bottom-[-55.8px] right-[43.1%] transform -translate-x-[45%]'
          onClick={() => sliderFaqProductRef.current?.slickNext()}
        >
          <img src={images.icons.arrow_right} alt='arrow-right' />
        </button>
      </div>
    </section>
  )
}

export default FaqProductSection
