import images from '~/assets'

function CommentSection() {
  return (
    <section className='mt-[150px] px-4 relative'>
      <h1 className='w-[422px] text-[56px] font-bold capitalize leading-[65px] absolute top-[1.5%] left-[11%] z-50'>
        the press comment on products
      </h1>

      <div className='w-full flex flex-col items-center pt-[100px] pb-[30px] z-0'>
        <svg width='596' height='673' viewBox='0 0 596 673' fill='none'>
          <mask id='mask0_19_100' style={{ maskType: 'alpha' }} x='0' y='0' width='596' height='673'>
            <rect x='198' y='183' width='379' height='259' rx='12' fill='#D9D9D9' />
            <rect x='430' y='454' width='166' height='219' rx='12' fill='#D9D9D9' />
            <rect y='673' width='219' height='418' rx='12' transform='rotate(-90 0 673)' fill='#D9D9D9' />
            <rect x='198' width='285' height='171' rx='12' fill='#D9D9D9' />
            <rect x='30' y='109' width='157' height='210' rx='12' fill='#D9D9D9' />
            <rect x='57' y='331' width='129' height='111' rx='12' fill='#D9D9D9' />
          </mask>
          <g mask='url(#mask0_19_100)'>
            <rect x='-42.9999' y='-17' width='690' height='690' fill='#ECF2F3' />
            <rect x='127' y='28' width='349.915' height='599.48' fill='url(#pattern0_19_100)' />
          </g>
          <defs>
            <pattern id='pattern0_19_100' patternContentUnits='objectBoundingBox' width='1' height='1'>
              <use xlinkHref='#image0_19_100' transform='matrix(0.000659008 0 0 0.000384902 -0.411039 -0.0160116)' />
            </pattern>
            <image id='image0_19_100' width='2773' height='2773' xlinkHref={images.product.product_single} />
          </defs>
        </svg>
      </div>

      <div className='w-[366px] flex flex-col gap-6 absolute top-[39%]'>
        <p className='text-[24px] font-semibold leading-[32px]'>Ryan Dorwart - Vogue</p>
        <p className='text-[20px]'>
          "Critics and connoisseurs alike have lauded this fragrance for its captivating aroma and its ability to leave
          a lasting impression in any setting."{' '}
          <span className='underline text-[#31D366] cursor-pointer'>See more</span>
        </p>
      </div>

      <div className='w-[356px] flex flex-col gap-6 absolute top-[18%] right-0'>
        <p className='text-[24px] font-semibold leading-[32px]'>Hanna Kenter - Glamour</p>
        <p className='text-[20px]'>
          "With its luxurious scent and elegant packaging, this fragrance has quickly become a favorite among those who
          appreciate the finer things in life."{' '}
          <span className='underline text-[#31D366] cursor-pointer'>See more</span>
        </p>
      </div>

      <div className='flex items-start justify-between'>
        <div className='w-[453px] flex flex-col gap-6 ml-[7.5%] mt-[20px]'>
          <p className='text-[24px] font-semibold leading-[32px]'>Chance Botosh - The Guardian</p>
          <p className='text-[20px]'>
            "This fragrance has been praised by critics for its sophisticated blend of floral and woody notes, evoking a
            sense of timeless elegance." <span className='underline text-[#31D366] cursor-pointer'>See more</span>
          </p>
        </div>
        <div className='w-[528px] flex flex-col gap-6 mr-[2%]'>
          <p className='text-[24px] font-semibold leading-[32px]'>Makenna Septimus - InStyle</p>
          <p className='text-[20px]'>
            "With its captivating blend of sensual accords, this fragrance has garnered widespread acclaim for its
            ability to evoke emotions and memories with every spray."{' '}
            <span className='underline text-[#31D366] cursor-pointer'>See more</span>
          </p>
        </div>
      </div>

      <img src={images.image.arrow_radius_left} alt='arrow-radius-left' className='absolute top-[30%] left-[20%] ' />
      <img
        src={images.image.arrow_radius_left_large}
        alt='arrow-radius-left'
        className='w-[163.5px] h-[125] absolute bottom-[20%] left-[15%]'
      />
      <img
        src={images.image.arrow_radius_right}
        alt='arrow-radius-left'
        className='w-[163.5px] h-[125] absolute top-[12%] right-[22%]'
      />
      <img
        src={images.image.arrow_radius_right_large}
        alt='arrow-radius-left'
        className='w-[163.5px] h-[125] absolute bottom-[20%] right-[15%]'
      />
    </section>
  )
}

export default CommentSection
