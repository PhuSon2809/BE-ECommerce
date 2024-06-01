import { useRef, useState } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'
import { IconButton } from '~/components/iconButton'
import { ProductFeatured } from '~/components/productFeatured'
import useResponsive from '~/hooks/useResponsive'
import './styles.scss'

function SliderFeatureProduct({ isMenuDialog }: { isMenuDialog?: boolean }) {
  const smDown = useResponsive('down', 'sm')

  const sliderRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return smDown ? (
    <div className='overflow-hidden'>
      <div className='feature-product-slide-responsive relative mt-[-100px]'>
        <div className='w-[358px]'>
          <Slider
            infinite
            ref={sliderRef}
            arrows={false}
            slidesToShow={3}
            slidesToScroll={1}
            vertical={true}
            verticalSwiping={true}
          >
            {listDiscovers.map((product) => (
              <div key={product.id}>
                <ProductFeatured product={product} isMenuDialog={isMenuDialog} />
              </div>
            ))}
          </Slider>
        </div>

        <div className='flex xs:flex-col sm:flex-row items-center gap-2 absolute top-[20%] xs:right-[1%] sm:left-[12.5%]'>
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
    </div>
  ) : (
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
