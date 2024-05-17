import { useRef, useState } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'
import { IconButton } from '~/components/iconButton'
import { ProductFeatured } from '~/components/productFeatured'
import './styles.scss'

function SliderFeatureProduct() {
  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <div className='feature-product-slide relative'>
      <div className='w-[925px] max-h-[470px]'>
        <Slider
          ref={sliderRef}
          infinite
          centerMode
          arrows={false}
          slidesToShow={3}
          slidesToScroll={1}
          beforeChange={(_: number, next: number) => setSlideActive(next)}
        >
          {listDiscovers.map((product, index) => (
            <div key={product.id} className='mt-[50px]'>
              <ProductFeatured product={product} isCenter={index === slideActive} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='flex items-center gap-2 absolute bottom-[0%] left-[12.5%]'>
        <IconButton size='48'>
          <img
            src={images.icons.arrow_left}
            alt='arrow-left'
            className='size-6'
            onClick={() => sliderRef.current?.slickPrev()}
          />
        </IconButton>
        <IconButton size='48'>
          <img
            src={images.icons.arrow_right}
            alt='arrow-right'
            className='size-6'
            onClick={() => sliderRef.current?.slickNext()}
          />
        </IconButton>
      </div>
    </div>
  )
}

export default SliderFeatureProduct
