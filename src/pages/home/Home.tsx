import { useRef, useState } from 'react'
import Slider from 'react-slick'

import { OptionSelect } from '~/@types/common'
import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductCard } from '~/components/productCard'
import { Header } from '~/layouts/components/header'
import { CosmeticSection, FunctionalSection, WhatWeDoSection, WhyChooseSection } from '~/sections/home'
import images from '~/assets'
import './styles.scss'

const listFilterOption: OptionSelect[] = [
  {
    value: 'new',
    label: 'New'
  },
  {
    value: 'best-seller',
    label: 'Best seller'
  },
  {
    value: 'sale',
    label: 'Sale'
  }
]

function Home() {
  const [filterSlide, setFilterSlide] = useState<string>('new')

  const sliderLeftRef = useRef<Slider>(null)

  return (
    <div className='home overflow-hidden'>
      <div className='bg-[#f1f1f1]'>
        <Header />
      </div>
      {/* Banner section */}
      <section>
        <Slider
          className='container-slide'
          dots
          arrows={false}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {Array.from({ length: 3 }).map((_, index: number) => (
            <div key={index} className='home-banner'>
              <div className='p-5 mt-5 relative'>
                <div className='flex flex-col gap-[10px]'>
                  <h1 className='w-[641px] text-[52px] font-customBold leading-[64px]'>
                    Discover Premium Nutritional Supplements
                  </h1>
                  <p className='w-[454px] font-customRegular'>
                    From essential vitamins to specialized formulas, each product is meticulously crafted to support
                    your well-being.
                  </p>
                  <Button size='large' className='rounded-[26px] mt-5'>
                    discover
                  </Button>
                </div>

                <div className='w-full flex items-end justify-between absolute bottom-[-145%] right-[2%]'>
                  <div className='slide-left w-[470px] ml-[60px] mb-[50px] relative'>
                    <Slider
                      ref={sliderLeftRef}
                      dots
                      centerMode
                      arrows={false}
                      infinite
                      speed={500}
                      slidesToShow={1}
                      slidesToScroll={1}
                      prevArrow={
                        <button className='cursor-pointer' onClick={() => sliderLeftRef.current?.slickPrev()}>
                          <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
                        </button>
                      }
                    >
                      {listProducts.map((product, index) => (
                        <ProductCard key={index} product={product} size='w-[357px] h-[272px]' />
                      ))}
                    </Slider>

                    <div className='flex items-center gap-2 absolute bottom-[-14%] right-[5%] z-[10000]'>
                      <button className='cursor-pointer' onClick={() => sliderLeftRef.current?.slickPrev()}>
                        <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
                      </button>
                      <button className='cursor-pointer' onClick={() => sliderLeftRef.current?.slickNext()}>
                        <img src={images.icons.arrow_right} alt='arrow-right' className='size-6' />
                      </button>
                    </div>
                  </div>
                  <div className='slide-right w-[331px]'>
                    <div className='flex items-center gap-[10px] mb-[10px]'>
                      {listFilterOption.map((option) => (
                        <Button
                          key={option.value}
                          onClick={() => setFilterSlide(option.value)}
                          size='small'
                          variant='linear'
                          className='px-[22px] w-fit'
                          classNameText={`${option.value === filterSlide ? '!font-customMedium text-white' : '!font-customRegular text-blackMain/[.64]'}  `}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                    <Slider dots arrows={false} infinite={false} speed={500} slidesToShow={1} slidesToScroll={1}>
                      {listProducts.slice(0, 3).map((product, index) => (
                        <ProductCard key={index} product={product} size='w-[331px] h-[368px]' />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* What We Do */}
      <WhatWeDoSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Functional */}
      <FunctionalSection />

      {/* Cosmetic */}
      <CosmeticSection />
    </div>
  )
}

export default Home
