import { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Slider from 'react-slick'

import images from '~/assets'
import { listDiscovers, listVerticalDiscovers } from '~/assets/mocks/product'
import { DiscoverCard } from '~/components/discoverCard'
import { DiscoverSquareCard } from '~/components/discoverSquareCard'
import { IconButton } from '~/components/iconButton'

type DiscoverSectionProps = {
  titleVerticalSlide: string
  titleHorizontalSlide: string
}

function DiscoverSection({ titleVerticalSlide, titleHorizontalSlide }: DiscoverSectionProps) {
  const { pathname } = useLocation()

  const sliderRef = useRef<Slider>(null)
  const sliderVerticalRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='discover-section px-4 xs:pt-10 sm:pt-24'>
      <div className='w-full flex xs:flex-col sm:flex-row xs:gap-1 sm:gap-4'>
        <div className='flex-1 xs:w-full sm:w-[1018px]'>
          <div className='xs:mb-[20px] sm:mb-[100px]'>
            <div className='xs:ml-0 sm:ml-[4%]'>
              <h1
                className={`${pathname === '/cart' ? 'w-fit' : 'xs:w-full sm:w-[474px]'} xs:text-[32px] sm:text-[56px] font-customBold xs:leading-[40px] sm:leading-[72px] capitalize mb-5 tracking-tight`}
              >
                Discover more of our products
              </h1>
              <p className='xs:w-full sm:w-[721px] xs:text-[16px] sm:text-[20px] font-customRegular xs:leading-6 sm:leading-8 tracking-wide'>
                Discover a wide range of carefully selected products tailored to suit your needs and preferences. Find
                everything you need to elevate your lifestyle.
              </p>
            </div>
          </div>

          <div className='slide-horizontal flex flex-col  gap-3 relative'>
            <p className='xs:text-[24px] sm:text-[32px] font-customSemiBold leading-[76px] uppercase xs:text-left sm:text-center'>
              {titleHorizontalSlide}
            </p>

            <Slider
              ref={sliderRef}
              arrows={false}
              infinite
              centerMode
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              beforeChange={(_: number, next: number) => setSlideActive(next)}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 639,
                  settings: {
                    vertical: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                }
              ]}
            >
              {listDiscovers.map((discover, index) => (
                <DiscoverSquareCard key={index} discover={discover} isCenter={index === slideActive} />
              ))}
            </Slider>

            <div className='w-fit flex xs:flex-col sm:flex-row items-center gap-2 absolute bottom-0 left-[28%]'>
              <IconButton size='56' onClick={() => sliderRef.current?.slickPrev()}>
                <img src={images.icons.arrow_left} alt='arrow-left' />
              </IconButton>
              <IconButton size='56' onClick={() => sliderRef.current?.slickNext()}>
                <img src={images.icons.arrow_right} alt='arrow-right' />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='slide-vertical xs:w-full sm:w-[453px] flex flex-col gap-3 xs:mt-5 sm:mt-0'>
          <div className='flex xs:items-start sm:items-center justify-between'>
            <p className='xs:text-[24px] sm:text-[32px] font-customSemiBold leading-[76px] uppercase'>
              {titleVerticalSlide}
            </p>
            <div className='flex items-center gap-2'>
              <IconButton size='56' onClick={() => sliderVerticalRef.current?.slickNext()}>
                <img src={images.icons.arrow_top} alt='arrow-left' />
              </IconButton>
              <IconButton size='56' onClick={() => sliderVerticalRef.current?.slickPrev()}>
                <img src={images.icons.arrow_bot} alt='arrow-right' />
              </IconButton>
            </div>
          </div>
          <Slider
            ref={sliderVerticalRef}
            arrows={false}
            infinite
            slidesToShow={2}
            slidesToScroll={1}
            vertical
            verticalSwiping
          >
            {listVerticalDiscovers.map((discover, index) => (
              <div key={index}>
                <DiscoverCard discover={discover} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default DiscoverSection
