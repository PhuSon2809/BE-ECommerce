import { useRef } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'
import { IconButton } from '~/components/iconButton'
import { ProductFeatured } from '~/components/productFeatured'
import useResponsive from '~/hooks/useResponsive'
import SliderFeatureProduct from '../common/SliderFeatureProduct'
import './styles.scss'

function FeaturedProduct() {
  const smDown = useResponsive('down', 'sm', 'sm')

  const sliderRef = useRef<Slider>(null)

  return (
    <section className='feature-product xs:mt-[50px] sm:mt-[80px] xs:px-4 sm:px-0 relative'>
      <div className='flex xs:flex-col sm:flex-row xs:items-start sm:items-center justify-between xs:gap-5 sm:gap-0 mb-10'>
        <h1 className='xs:text-[32px] sm:text-[40px] font-customBold xs:leading-[40px] sm:leading-[52px] capitalize'>
          Featured products <br />
          shop our Top picks!
        </h1>
        <p className='xs:w-[358px] sm:w-[472px] xs:leading-[24px] sm:leading-[26px] opacity-[.64]'>
          Discover our top picks and shop our featured products! Explore a curated selection of must-have items,
          carefully chosen to bring style, quality, and innovation to your doorstep.
        </p>
      </div>

      {smDown ? (
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
                    <ProductFeatured product={product} />
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
        <SliderFeatureProduct />
      )}
    </section>
  )
}

export default FeaturedProduct
