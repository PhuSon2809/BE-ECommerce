import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import images from '~/assets'
import './styles.scss'

function TechnologySection() {
  return (
    <section className='technology-section min-h-[810px] py-[105px] mt-[100px] xs:px-4 sm:px-10 bg-blackMain text-white flex xs:flex-col sm:flex-row justify-between gap-10 relative'>
      <div className='flex flex-col gap-5'>
        <h1 className='xs:text-[32px] sm:text-[52px] font-customBold xs:leading-[40px] sm:leading-[64px]'>
          Our Cutting-Edge
          <br /> Technologies
        </h1>
        <p className='xs:w-[358px] sm:w-[338px] xs:text-[16px] sm:text-[18px] font-customRegular opacity-[.64] xs:leading-[25px] sm:leading-[28px]'>
          Join us on this journey of discovery, where imagination meets reality and the extraordinary becomes routine.
        </p>
      </div>

      <div className='xs:w-[358px] sm:w-[800px] rounded-2xl'>
        <Swiper
          spaceBetween={-314}
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={{ nextEl: '.arrow-next' }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className='z-[60]'>
            <div className='min-w-[477px] w-[477px] h-[600px] pt-[37px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col justify-between'>
              <img src={images.home.technology_1} alt='technology-1' />
              <div className='px-10 pb-10 text-white'>
                <h6 className='text-[38px] font-customSemiBold leading-[48px] mb-[10px]'>Blockchain</h6>
                <p className='w-[333px] text-[18px] font-customRegular leading-7'>
                  It is a revolutionary technology that securely records and links data through a decentralized network
                  of interconnected blocks.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='z-50'>
            <div className='min-w-[477px] w-[477px] h-[600px] pt-[20px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2]'>
              <img src={images.home.technology_2} alt='technology-2' className='w-[280px] mx-auto' />
              <div className='w-full px-10 pb-10 text-white text-left'>
                <h6 className='text-[38px] font-customSemiBold leading-[48px] mb-[10px]'>
                  Receive payments <br /> via USDT <br /> commissions
                </h6>
                <p className='w-[333px] text-[18px] font-customRegular leading-7'>
                  ensuring fast and efficient transactions with minimal fees
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='z-40'>
            <div className='relative overflow-hidden'>
              <div className='min-w-[477px] w-[477px] h-[600px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col items-center relative overflow-hidden'>
                <img src={images.home.technology_3} alt='technology-3' className='max-w-[900px] absolute top-[-4%]' />
                <div className='w-full px-10 pb-10 text-white text-left absolute bottom-0'>
                  <h6 className='text-[38px] font-customSemiBold leading-[48px] mb-[10px]'>
                    Make fast payments through Visa or Mastercard scans
                  </h6>
                  <p className='w-[333px] text-[18px] font-customRegular leading-7'>
                    revolutionizing convenience and efficiency in financial transactions
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='z-30'>
            <div className='min-w-[477px] w-[477px] h-[600px] pt-[37px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col justify-between'>
              <img src={images.home.technology_1} alt='technology-1' />
              <div className='px-10 pb-10 text-white'>
                <h6 className='text-[38px] font-customSemiBold leading-[48px] mb-[10px]'>Blockchain</h6>
                <p className='w-[333px] text-[18px] font-customRegular leading-7'>
                  It is a revolutionary technology that securely records and links data through a decentralized network
                  of interconnected blocks.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='z-20'>
            <div className='min-w-[477px] w-[477px] h-[600px] pt-[20px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2]'>
              <img src={images.home.technology_2} alt='technology-2' className='w-[280px] mx-auto' />
              <div className='w-full px-10 pb-10 text-white text-left'>
                <h6 className='text-[38px] font-customSemiBold leading-[48px] mb-[10px]'>
                  Receive payments <br /> via USDT <br /> commissions
                </h6>
                <p className='w-[333px] text-[18px] font-customRegular leading-7'>
                  ensuring fast and efficient transactions with minimal fees
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='z-10'>
            <div className='relative overflow-hidden'>
              <div className='min-w-[477px] w-[477px] h-[600px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col items-center relative overflow-hidden'>
                <img src={images.home.technology_3} alt='technology-3' className='max-w-[900px] absolute top-[-4%]' />
                <div className='w-full px-10 pb-10 text-white text-left absolute bottom-0'>
                  <h6 className='text-[38px] font-customSemiBold leading-[48px] mb-[10px]'>
                    Make fast payments through Visa or Mastercard scans
                  </h6>
                  <p className='w-[333px] text-[18px] font-customRegular leading-7'>
                    revolutionizing convenience and efficiency in financial transactions
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='arrow-next absolute bottom-[95px] left-[11%] cursor-pointer'>
        <img src={images.icons.arrow_right_white} alt='arrow-right-white' />
      </div>
    </section>
  )
}

export default TechnologySection
