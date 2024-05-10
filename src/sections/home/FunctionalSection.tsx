import { useRef } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listProductsFunctional } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductFunctional } from '~/components/productFunctional'

function FunctionalSection() {
  const sliderRef = useRef<Slider>(null)

  return (
    <section className='functional-section mt-[100px] relative pb-[150px]'>
      <h1 className='text-[240px] font-customBold uppercase text-[#F1F1F1]/[.44] absolute top-[-5%] left-1/2 transform -translate-x-1/2'>
        Functional
      </h1>
      <div className='relative'>
        <h1 className='text-[52px] font-customBold text-center'>Exploring Functional Foods for Your Health</h1>
        <p className='w-[358px] text-[18px] font-customRegular absolute top-[31%] left-[8.5%]'>
          Dive into the world of functional foods and discover their transformative benefits. Learn how simple dietary
          changes can lead to a healthier, more vibrant lifestyle. With this insightful title, embark on a journey
          towards holistic well-being through the power of food.
        </p>
        <img src={images.home.home_functional} alt='home-functional' className='mx-auto rotate-[38.49deg] mt-5' />
        <div className='absolute bottom-[-8%] left-1/2 transform -translate-x-1/2 flex flex-col items-end gap-5 '>
          <Button size='large' className='rounded-[26px]'>
            Shop now
          </Button>

          <div className='w-[1250px]'>
            <Slider ref={sliderRef} arrows={false} infinite speed={500} slidesToShow={3} slidesToScroll={1}>
              {listProductsFunctional.map((product) => (
                <div key={product.id}>
                  <ProductFunctional product={product} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunctionalSection
