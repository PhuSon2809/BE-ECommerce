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
    <section className='discover-section px-4 pt-24'>
      <div className='grid grid-cols-7 gap-4'>
        <div className='col-span-5'>
          <div className='mb-[100px]'>
            <div className='ml-[4%]'>
              <h1
                className={`${pathname === '/cart' ? 'w-fit' : 'w-[474px]'}  text-[56px] font-bold leading-[72px] capitalize mb-5 tracking-tight`}
              >
                Discover more of our products
              </h1>
              <p className='w-[721px] text-[20px] leading-8 tracking-wide'>
                Discover a wide range of carefully selected products tailored to suit your needs and preferences. Find
                everything you need to elevate your lifestyle.
              </p>
            </div>
          </div>

          <div className='slide-horizontal flex flex-col gap-3 relative'>
            <p className='text-[32px] font-semibold leading-[76px] uppercase text-center'>{titleHorizontalSlide}</p>

            <Slider
              ref={sliderRef}
              arrows={false}
              infinite
              centerMode
              speed={500}
              slidesToShow={2}
              slidesToScroll={1}
              beforeChange={(_: number, next: number) => setSlideActive(next)}
            >
              {listDiscovers.map((discover, index) => (
                <DiscoverSquareCard key={index} discover={discover} isCenter={index === slideActive} />
              ))}
            </Slider>

            <div className='w-fit flex items-center gap-2 absolute bottom-0 left-[30.5%]'>
              <IconButton size='56' onClick={() => sliderRef.current?.slickPrev()}>
                <img src={images.icons.arrow_left} alt='arrow-left' />
              </IconButton>
              <IconButton size='56' onClick={() => sliderRef.current?.slickNext()}>
                <img src={images.icons.arrow_right} alt='arrow-right' />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <p className='text-[32px] font-semibold leading-[76px] uppercase'>{titleVerticalSlide}</p>
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
      </div>
    </section>
  )
}

export default DiscoverSection