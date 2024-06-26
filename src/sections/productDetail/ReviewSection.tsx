import { useRef } from 'react'
import Slider from 'react-slick'

import images from '~/assets'
import { reviews } from '~/assets/mocks/review'
import { ReviewCard } from '~/components/reviewCard'

function ReviewSection() {
  const sliderRef = useRef<Slider>(null)

  const listRatings = [
    {
      title: 1,
      percent: 5,
      totalRatings: '02'
    },
    {
      title: 2,
      percent: 15,
      totalRatings: '24'
    },
    {
      title: 3,
      percent: 30,
      totalRatings: '120'
    },
    {
      title: 4,
      percent: 40,
      totalRatings: '256'
    },
    {
      title: 5,
      percent: 85,
      totalRatings: '567'
    }
  ]

  return (
    <section className='xs:py-[20px] sm:py-[50px] relative'>
      <div className='xs:px-4 sm:px-20 flex xs:flex-col sm:flex-row items-start justify-between'>
        <div className='xs:w-fit sm:w-[620px]'>
          <h1 className='xs:text-[32px] sm:text-[56px] font-customBold xs:leading-[40px] sm:leading-[72px] capitalize xs:mb-5 sm:mb-0'>
            Why do we look good from others?
          </h1>
          <p className='text-[20px] leading-[32px] xs:mb-5 sm:mb-0'>
            Read testimonials what they say about our product
          </p>
        </div>

        <div
          className={`xs:min-h-[318px] sm:min-h-[316px] xs:w-full sm:w-[494px] py-8 xs:px-[22px] sm:px-[44.5px] xs:rounded-[17.39px] sm:rounded-[24px] shadow-5xl`}
        >
          <div className='h-full flex items-center justify-between'>
            {listRatings.map((rating, index) => (
              <div key={index} className='h-full flex flex-col items-center justify-between gap-3'>
                <p className='xs:text[14px] sm:text[20px] xs:leading-[19.6px] sm:leading-7'>{rating.totalRatings}</p>
                <div className='xs:h-[200px] sm:h-[180px] min-w-3 w-3 bg-greyMain rounded-[2px] flex'>
                  <div
                    className={`bg-gradient-to-b from-blueMain to-greenMain w-full rounded-[2px] opacity-100 mt-auto`}
                    style={{ height: `${rating.percent}%` }}
                  ></div>
                </div>
                <div className='flex items-center gap-[2px]'>
                  <p className='xs:text[14px] sm:text[20px] xs:leading-[19.6px] sm:leading-7 mt-[1px]'>
                    {rating.title}
                  </p>
                  <img src={images.icons.star} alt='icon-star' className='xs:size-[14.32px] sm:size-5' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* List review */}
      <div className='list-review relative xs:pl-4 sm:pl-20 xs:mt-[80px] sm:mt-[50px]'>
        <Slider
          ref={sliderRef}
          dots
          arrows={false}
          infinite
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]}
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Slider>
      </div>
      <div className='xs:flex sm:hidden items-center justify-start gap-4 mt-5 pl-4'>
        <button className='cursor-pointer ' onClick={() => sliderRef.current?.slickPrev()}>
          <img src={images.icons.arrow_left} alt='arrow-left' className='size-6' />
        </button>
        <button className='cursor-pointer' onClick={() => sliderRef.current?.slickNext()}>
          <img src={images.icons.arrow_right} alt='arrow-right' className='size-6' />
        </button>
      </div>

      <div className='mt-5 ml-[57%] xs:scale-50 sm:scale-100 xs:absolute sm:relative top-[60%] right-0'>
        <svg width='120' height='120' viewBox='0 0 120 120' fill='none'>
          <g clipPath='url(#clip0_11_135)'>
            <path
              d='M120 60L120 8.5714L68.5713 8.5714L68.5713 60.0001L102.857 60C102.857 78.9048 87.4761 94.2857 68.5714 94.2857L68.5714 111.429C96.9308 111.429 120 88.3595 120 60ZM2.75202e-05 94.2857L3.05176e-05 111.429C28.3595 111.429 51.4287 88.3595 51.4287 60.0001L51.4287 8.57141L1.25334e-05 8.57142L2.15255e-05 60.0001L34.2857 60.0001C34.2857 78.9048 18.9048 94.2857 2.75202e-05 94.2857Z'
              fill='url(#paint0_linear_11_135)'
            />
          </g>
          <defs>
            <linearGradient
              id='paint0_linear_11_135'
              x1='108'
              y1='109.286'
              x2='44.0174'
              y2='-15.6798'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#F2F3F5' />
              <stop offset='1' stopColor='#F6F6F7' />
            </linearGradient>
            <clipPath id='clip0_11_135'>
              <rect width='120' height='120' fill='white' transform='translate(120 120) rotate(180)' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default ReviewSection
