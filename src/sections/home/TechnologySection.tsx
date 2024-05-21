import images from '~/assets'
import './styles.scss'
import Slider from 'react-slick'
import { useRef, useState } from 'react'
import { SliderPagination } from '~/components/sliderPagination'

function TechnologySection() {
  const slider1Ref = useRef<Slider>(null)
  const slider2Ref = useRef<Slider>(null)
  const slider3Ref = useRef<Slider>(null)

  const [activeSlide3, setActiveSlide3] = useState<number>(0)

  const handleGoToSlide = (index: number) => {
    slider1Ref.current?.slickGoTo(index)
    slider2Ref.current?.slickGoTo(index)
    slider3Ref.current?.slickGoTo(index)
  }

  return (
    <section className='technology-section xs:min-h-[844px] sm:min-h-[810px] xs:pt-[110px] py-[105px] mt-[100px] xs:px-4 sm:px-10 bg-blackMain text-white flex xs:flex-col sm:flex-row sm:justify-between gap-10 relative'>
      <div className='flex flex-col gap-5'>
        <h1 className='xs:text-[32px] sm:text-[52px] font-customBold xs:leading-[40px] sm:leading-[64px]'>
          Our Cutting-Edge
          <br /> Technologies
        </h1>
        <p className='xs:w-[358px] sm:w-[338px] xs:text-[16px] sm:text-[18px] font-customRegular opacity-[.64] xs:leading-[25px] sm:leading-[28px]'>
          Join us on this journey of discovery, where imagination meets reality and the extraordinary becomes routine.
        </p>
      </div>

      <div className='flex items-center relative xs:mt-[50%] sm:mt-0'>
        <div className='xs:w-[266px] sm:w-[477px] absolute right-0'>
          <Slider
            ref={slider3Ref}
            dots={false}
            infinite
            arrows={false}
            draggable={false}
            slidesToShow={1}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: false
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: false
                }
              }
            ]}
            afterChange={(current) => setActiveSlide3(current)}
          >
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col items-center relative overflow-hidden'>
              <div className='xs:w-[400px] xs:h-[250px] sm:w-[700px] sm:h-[400px] absolute xs:top-[-8%] sm:top-[-4%] left-1/2 transform -translate-x-1/2'>
                <img src={images.home.technology_3} alt='technology-3' className='w-full h-full' />
              </div>
              <div className='w-full xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white text-left absolute bottom-0'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Make fast payments through Visa or Mastercard scans
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular leading-7'>
                  revolutionizing convenience and efficiency in financial transactions
                </p>
              </div>
            </div>
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] xs:pt-[20px] sm:pt-[37px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col justify-between'>
              <img
                src={images.home.technology_1}
                alt='technology-1'
                className='xs:w-[265px] xs:h-[202px] sm:w-[445px] sm:h-[340px]'
              />
              <div className='xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Blockchain
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  It is a revolutionary technology that securely records and links data through a decentralized network
                  of interconnected blocks.
                </p>
              </div>
            </div>
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] pt-[20px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2]'>
              <img src={images.home.technology_2} alt='technology-2' className='xs:w-[160px] sm:w-[280px] mx-auto' />
              <div className='w-full xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white text-left'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Receive payments <br /> via USDT <br /> commissions
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  ensuring fast and efficient transactions with minimal fees
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className='xs:w-[266px] sm:w-[477px] absolute xs:right-[45px] sm:right-[120px]'>
          <Slider
            ref={slider2Ref}
            dots={false}
            infinite
            arrows={false}
            draggable={false}
            slidesToShow={1}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: false
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: false
                }
              }
            ]}
          >
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] pt-[20px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2]'>
              <img src={images.home.technology_2} alt='technology-2' className='xs:w-[160px] sm:w-[280px] mx-auto' />
              <div className='w-full xs:px-5 xs:pb-5  sm:px-10 sm:pb-10 text-white text-left'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Receive payments <br /> via USDT <br /> commissions
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  ensuring fast and efficient transactions with minimal fees
                </p>
              </div>
            </div>
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col items-center relative overflow-hidden'>
              <div className='xs:w-[400px] xs:h-[250px] sm:w-[700px] sm:h-[400px] absolute xs:top-[-8%] sm:top-[-4%] left-1/2 transform -translate-x-1/2'>
                <img src={images.home.technology_3} alt='technology-3' className='w-full h-full' />
              </div>
              <div className='w-full xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white text-left absolute bottom-0'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Make fast payments through Visa or Mastercard scans
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  revolutionizing convenience and efficiency in financial transactions
                </p>
              </div>
            </div>
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] xs:pt-[20px] sm:pt-[37px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col justify-between'>
              <img
                src={images.home.technology_1}
                alt='technology-1'
                className='xs:w-[265px] xs:h-[202px] sm:w-[445px] sm:h-[340px]'
              />
              <div className='xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Blockchain
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  It is a revolutionary technology that securely records and links data through a decentralized network
                  of interconnected blocks.
                </p>
              </div>
            </div>
          </Slider>
        </div>
        <div className='xs:w-[266px] sm:w-[477px] absolute xs:right-[95px] sm:right-[240px]'>
          <Slider
            ref={slider1Ref}
            dots={false}
            infinite
            arrows={false}
            draggable={false}
            slidesToShow={1}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: false
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  draggable: false
                }
              }
            ]}
          >
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] xs:pt-[20px] sm:pt-[37px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col justify-between'>
              <img
                src={images.home.technology_1}
                alt='technology-1'
                className='xs:w-[265px] xs:h-[202px] sm:w-[445px] sm:h-[340px]'
              />
              <div className='xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Blockchain
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  It is a revolutionary technology that securely records and links data through a decentralized network
                  of interconnected blocks.
                </p>
              </div>
            </div>
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] pt-[20px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2]'>
              <img src={images.home.technology_2} alt='technology-2' className='xs:w-[160px] sm:w-[280px] mx-auto' />
              <div className='w-full xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white text-left'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Receive payments <br /> via USDT <br /> commissions
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  ensuring fast and efficient transactions with minimal fees
                </p>
              </div>
            </div>
            <div className='slide xs:w-[266px] xs:h-[357px] sm:w-[477px] sm:h-[600px] bg-gradient-to-l from-white/[.528] to-white/[.1963] backdrop-blur-[80px] shadow-7xl rounded-3xl border-[3px] border-solid border-white/[.2] flex flex-col items-center relative overflow-hidden'>
              <div className='xs:w-[400px] xs:h-[250px] sm:w-[700px] sm:h-[400px] absolute xs:top-[-8%] sm:top-[-4%] left-1/2 transform -translate-x-1/2'>
                <img src={images.home.technology_3} alt='technology-3' className='w-full h-full' />
              </div>

              <div className='w-full xs:px-5 xs:pb-5 sm:px-10 sm:pb-10 text-white text-left absolute bottom-0'>
                <h6 className='xs:text-[22px] sm:text-[38px] font-customSemiBold xs:leading-7 sm:leading-[48px] xs:mb-[5px] sm:mb-[10px]'>
                  Make fast payments through Visa or Mastercard scans
                </h6>
                <p className='xs:w-[198px] sm:w-[333px] xs:text-[12px] sm:text-[18px] opacity-[.64] font-customRegular xs:leading-[18px] sm:leading-7'>
                  revolutionizing convenience and efficiency in financial transactions
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className='flex items-center gap-6 absolute xs:bottom-[110px] sm:bottom-[105px] xs:left-4 sm:left-10'>
        <SliderPagination
          color='white'
          className='!size-[10px]'
          gap='gap-5'
          activeIndex={activeSlide3}
          slideToGo={handleGoToSlide}
          slideCount={3}
        />
        <img
          src={images.icons.arrow_right_white}
          alt='arrow-right-white'
          onClick={() => {
            slider1Ref.current?.slickNext(), slider2Ref.current?.slickNext(), slider3Ref.current?.slickNext()
          }}
          className='cursor-pointer'
        />
      </div>
    </section>
  )
}

export default TechnologySection
