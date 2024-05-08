import { useRef, useState } from 'react'
import Slider from 'react-slick'

import { Discover } from '~/@types/model'
import images from '~/assets'
import { DiscoverCard } from '~/components/discoverCard'
import { DiscoverSquareCard } from '~/components/discoverSquareCard'
import { IconButton } from '~/components/iconButton'

function DiscoverSection() {
  const sliderRef = useRef<Slider>(null)
  const sliderVerticalRef = useRef<Slider>(null)

  const [slideActive, setSlideActive] = useState<number>(0)

  const listVerticalDiscovers: Discover[] = [
    {
      image: images.product.discover1,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    },
    {
      image: images.product.discover2,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    }
  ]

  const listDiscovers: Discover[] = [
    {
      image: images.product.discover1,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    },
    {
      image: images.product.discover2,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    },
    {
      image: images.product.discover1,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    },
    {
      image: images.product.discover1,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    },
    {
      image: images.product.discover1,
      title: 'Rooerio cavanl',
      numberItem: 20,
      retailPrice: 60,
      vipPrice: 56
    }
  ]

  return (
    <section className='discover-section pt-24'>
      <div className='grid grid-cols-7 gap-4'>
        <div className='col-span-5'>
          <div className='mb-[100px]'>
            <div className='w-[721px]'>
              <h1 className='w-[474px] text-[56px] font-bold leading-[72px] capitalize mb-5'>
                Discover more of our products
              </h1>
              <p className='text-[20px] leading-8'>
                Discover a wide range of carefully selected products tailored to suit your needs and preferences. Find
                everything you need to elevate your lifestyle.
              </p>
            </div>
          </div>

          <div className='slide-horizontal flex flex-col gap-3 relative'>
            <p className='text-[32px] font-semibold leading-[76px] uppercase text-center'>Related</p>

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
              <p className='text-[32px] font-semibold leading-[76px] uppercase'>Recent</p>
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
