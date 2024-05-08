import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { BannerSection, FaqProductSection, FaqSection, ModelProductSection, ReviewSection } from '~/sections/home'
import './styles.scss'

function Home() {
  const sliderRef = useRef<Slider>(null)

  return (
    <div className='pt-4 overflow-hidden'>
      {/* Banner section */}
      <div className='banner relative'>
        <Slider ref={sliderRef} dots arrows={false} infinite speed={500} slidesToShow={1} slidesToScroll={1}>
          {Array.from({ length: 3 }).map((_, index: number) => (
            <BannerSection key={index} />
          ))}
        </Slider>
        <button
          className='cursor-pointer absolute bottom-[10px] left-[45%] transform -translate-x-[45%]'
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <img src={images.icons.arrow_left} alt='arrow-left' />
        </button>
        <button
          className='cursor-pointer absolute bottom-[10px] right-[43%] transform -translate-x-[45%]'
          onClick={() => sliderRef.current?.slickNext()}
        >
          <img src={images.icons.arrow_right} alt='arrow-right' />
        </button>
      </div>

      {/* Chart section */}

      {/* Review section */}
      <ModelProductSection />

      {/* Review section */}
      <ReviewSection />

      {/* FAQ for products section */}
      <div className='pt-5'>
        <FaqProductSection />
      </div>

      {/* FAQ section */}
      <div className='pt-5'>
        <FaqSection />
      </div>
    </div>
  )
}

export default Home
