import Slider from 'react-slick'
import images from '~/assets'
import { Button } from '~/components/button'
import './styles.scss'

function SlideBanner() {
  return (
    <section className='slider-banner-category w-[927px]'>
      <Slider dots arrows={false} infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        {Array.from({ length: 3 }).map((_, index: number) => (
          <div
            key={index}
            className='w-full h-[240px] px-10 rounded-2xl bg-gradient-to-tr from-[#F2F3F5] to-[#F6F6F7] relative overflow-hidden'
          >
            <div className='h-full flex flex-col justify-center'>
              <h1 className='text-[40px] font-customSemiBold leading-[42px] mb-2'>Sale Off upto 50%</h1>
              <p className='w-[327px] text-[14px] opacity-[.64] mb-5'>
                From 12/06 to 15/06, enjoy amazing discounts on all your favorite items. Don't miss out!
              </p>
              <Button size='large' className='rounded-[26px]' classNameText='!uppercase'>
                shop now
              </Button>
            </div>
            <img
              src={images.product.product_category_banner}
              alt='product-category-banner'
              className='h-[442px] w-[258px] absolute top-[-90%] right-[9.5%] rotate-[-21.29deg]'
            />
            <img
              src={images.product.product_category_banner}
              alt='product-category-banner'
              className='h-[442px] w-[258px] absolute top-[15%] right-[19.2%] rotate-[13.18deg]'
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default SlideBanner
