import { useRef } from 'react'
import Slider from 'react-slick'

import { FaqProducts } from '~/assets/mocks/faqProduct'
import { FaqProductCard } from '~/components/faqProductCard'
import images from '~/assets'
import './styles.scss'

function FaqProductSection() {
  const sliderFaqProductRef = useRef<Slider>(null)

  return (
    <section className='faq-product relative pl-4'>
      <h1 className='text-[56px] font-bold leading-[76px] capitalize text-center mb-10'>FAQ for products</h1>
      <div className='relative'>
        <Slider ref={sliderFaqProductRef} dots arrows={false} infinite speed={500} slidesToShow={3} slidesToScroll={1}>
          {FaqProducts.map((faq, index) => {
            return (
              <div key={index} className={``}>
                <FaqProductCard faq={faq} />
              </div>
            )
          })}
        </Slider>
        <button
          className='cursor-pointer absolute bottom-[-55.8px] left-[45%] transform -translate-x-[45%]'
          onClick={() => sliderFaqProductRef.current?.slickPrev()}
        >
          <img src={images.icons.arrow_left} alt='arrow-left' />
        </button>
        <button
          className='cursor-pointer absolute bottom-[-55.8px] right-[43%] transform -translate-x-[45%]'
          onClick={() => sliderFaqProductRef.current?.slickNext()}
        >
          <img src={images.icons.arrow_right} alt='arrow-right' />
        </button>
      </div>
    </section>
  )
}

export default FaqProductSection
