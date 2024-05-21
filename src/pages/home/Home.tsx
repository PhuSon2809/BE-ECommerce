import { useRef, useState } from 'react'
import Slider from 'react-slick'

import { OptionSelect } from '~/@types/common'
import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { ProductCard } from '~/components/productCard'
import { Header } from '~/layouts/components/header'
import {
  CosmeticSection,
  CustomerSaySection,
  FunctionalSection,
  GatewaySection,
  OurTeamSection,
  RichFoodSection,
  SlideBannerRight,
  TechnologySection,
  UnveilingSection,
  WhatWeDoSection,
  WhyChooseSection
} from '~/sections/home'
import './styles.scss'
import useResponsive from '~/hooks/useResponsive'

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
  const smDown = useResponsive('down', 'sm', 'sm')

  const [filterSlide, setFilterSlide] = useState<string>('new')

  const sliderRightRef = useRef<Slider>(null)

  return (
    <div className='home max-w-[1440px] mx-auto overflow-hidden'>
      <div className='bg-[#f1f1f1]'>
        <Header />
      </div>
      {/* Banner section */}
      <section>
        <Slider
          className='container-slide'
          dots={smDown ? false : true}
          arrows={false}
          infinite
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {Array.from({ length: 3 }).map((_, index: number) => (
            <div key={index} className='bg-[#f7f7f8]'>
              <div className='xs:h-[844px] sm:h-[810px] home-banner'>
                <div className='xs:p-4 xs:pb-0 sm:p-5 h-full flex flex-col justify-between'>
                  <div className='flex flex-col gap-[10px]'>
                    <h1 className='xs:text-[32px] sm:text-[52px] font-customBold xs:leading-[40px] sm:leading-[64px] text-nowrap'>
                      Discover Premium <br /> Nutritional Supplements
                    </h1>
                    <p className='xs:w-[360px] sm:w-[454px] xs:text-[14px] sm:text-[16px] font-customRegular xs:leading-[22px] sm:leading-[26px]'>
                      From essential vitamins to specialized formulas, each product is meticulously crafted to support
                      your well-being.
                    </p>
                    <Button
                      size={smDown ? 'small' : 'medium'}
                      className='w-[155px] h-[44px] rounded-[26px] xs:mt-2 sm:mt-5'
                      classNameText='xs:text-[16px] sm:text-[20px]'
                    >
                      discover
                    </Button>
                  </div>

                  <div className='w-full flex xs:flex-col sm:flex-row items-end justify-between'>
                    <div className='ml-[-4.2%]'>
                      <SlideBannerRight />
                    </div>
                    <div className='slide-right w-[331px] xs:hidden sm:block'>
                      <div className='flex items-center gap-[10px] mb-[10px]'>
                        {listFilterOption.map((option) => (
                          <Button
                            key={option.value}
                            onClick={() => setFilterSlide(option.value as string)}
                            size='small'
                            variant='linear'
                            className='px-[22px] w-fit'
                            classNameText={`${option.value === filterSlide ? '!font-customMedium text-white' : '!font-customRegular text-blackMain/[.64]'}  `}
                          >
                            {option.label}
                          </Button>
                        ))}
                      </div>
                      <Slider
                        ref={sliderRightRef}
                        dots
                        arrows={false}
                        infinite={false}
                        speed={500}
                        draggable={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                      >
                        {listProducts.slice(0, 3).map((product, index) => (
                          <ProductCard key={index} product={product} size='w-[331px] h-[368px]' />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

              <div className='slide-right w-[358px] xs:block sm:hidden mx-auto py-8'>
                <div className='flex items-center justify-between gap-[10px] mb-[16px]'>
                  {listFilterOption.map((option) => (
                    <Button
                      key={option.value}
                      onClick={() => setFilterSlide(option.value as string)}
                      size='small'
                      variant='linear'
                      className='xs:px-[31px] sm:px-[22px] w-fit xs:h-[35px]'
                      classNameText={`${option.value === filterSlide ? '!font-customMedium text-white' : '!font-customRegular text-blackMain/[.64]'} xs:text-[16px] sm:text-[20px]`}
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
                <Slider
                  ref={sliderRightRef}
                  dots
                  arrows={false}
                  infinite={false}
                  speed={500}
                  draggable={false}
                  slidesToShow={1}
                  slidesToScroll={1}
                >
                  {listProducts.slice(0, 3).map((product, index) => (
                    <ProductCard
                      key={index}
                      product={product}
                      size='w-[358px] h-[396px]'
                      ptContent='mb-[4px]'
                      prContent='!px-4 !pr-14'
                    />
                  ))}
                </Slider>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* What We Do */}
      <WhatWeDoSection />

      {/* Why Choose Us */}
      <WhyChooseSection />

      {/* Technology */}
      <TechnologySection />

      {/* Functional */}
      <FunctionalSection />

      {/* Cosmetic */}
      <CosmeticSection />

      {/* Unveiling */}
      <UnveilingSection />

      {/* Rich Food */}
      <RichFoodSection />

      {/* Gateway */}
      <GatewaySection />

      {/* Customer Say */}
      <CustomerSaySection />

      {/* Our Team */}
      <OurTeamSection />
    </div>
  )
}

export default Home
