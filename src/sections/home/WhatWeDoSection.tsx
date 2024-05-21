import images from '~/assets'

function WhatWeDoSection() {
  return (
    <section className='mt-[70px] xs:px-4 sm:px-5'>
      <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize text-center'>What we do</h1>
      <p className='xs:text-[16px] sm:text-[18px] xs:w-[313px] sm:w-fit mx-auto font-customRegular text-center'>
        The following are the comprehensive range of services we provide
      </p>

      <div className='flex xs:flex-col sm:flex-row xs:gap-4 sm:gap-5 xs:mt-8 sm:mt-10'>
        <div className='xs:w-[358px] sm:w-[453px] flex flex-col xs:gap-4 sm:gap-5'>
          <img
            src={images.home.home1}
            alt='home-1'
            className='w-full xs:h-[152px] sm:h-[193px] xs:rounded-[25.22px] sm:rounded-[32px]'
          />
          <div className='w-full xs:h-[293px] sm:h-[372px] xs:p-8 sm:p-10 flex flex-col items-start justify-end text-white bg-gradient-to-t from-[#5495FC] to-[#31D366] xs:rounded-[25.22px] sm:rounded-[32px] relative'>
            <img
              src={images.home.home_bg_1}
              alt='home-bg-1'
              className='xs:size-[191.19px] sm:size-[242.6px] absolute top-[5%] right-[5%] rotate-[48.91deg]'
            />
            <h1 className='xs:text-[26px] sm:text-[36px] font-customSemiBold uppercase xs:mb-3 sm:mb-4 xs:leading-[36.35px] sm:leading-[46px]'>
              Cross-Border <br /> Trading
            </h1>
            <p className='xs:text-[14px] sm:text-[18px] font-customRegular xs:leading-[22.07px] sm:leading-[28px]'>
              Empower global commerce, manufacture centrally, distribute globally
            </p>
          </div>
        </div>
        <div className='xs:w-[358px] sm:w-[453px] flex flex-col xs:gap-4 sm:gap-5'>
          <div className='w-full xs:h-[293px] sm:h-[372px] xs:p-8 sm:p-10 flex flex-col items-start justify-end bg-gradient-to-t from-[#F2F3F5] to-[#F6F6F7] xs:rounded-[25.22px] sm:rounded-[32px] relative overflow-hidden xs:order-2 sm:order-1'>
            <img
              src={images.home.home_bg_2}
              alt='home-bg-2'
              className='xs:w-[210.22px] xs:h-[189.67px] sm:w-[266px] sm:h-[240px] absolute top-[-5%] right-[-5%] z-10'
            />
            <h1 className='xs:text-[26px] sm:text-[36px] font-customSemiBold uppercase xs:mb-3 sm:mb-4 z-20 xs:leading-[36.35px] sm:leading-[46px]'>
              Customer <br /> Shipping Services
            </h1>
            <p className='xs:text-[14px] sm:text-[18px] font-customRegular z-20 xs:leading-[22.07px] sm:leading-[28px]'>
              Empowering communities with widespread income distribution, fostering global connections, with a network
              of 20,000 collaborators worldwide.
            </p>
          </div>
          <img
            src={images.home.home2}
            alt='home-2'
            className='w-full xs:h-[152px] sm:h-[193px] xs:rounded-[25.22px] sm:rounded-[32px] xs:order-1 sm:order-2'
          />
        </div>
        <div className='xs:w-[358px] sm:w-[453px] flex flex-col xs:gap-4 sm:gap-5'>
          <img
            src={images.home.home3}
            alt='home-3'
            className='w-full xs:h-[152px] sm:h-[193px] xs:rounded-[25.22px] sm:rounded-[32px]'
          />
          <div className='w-full xs:h-[293px] sm:h-[372px] xs:p-8 sm:p-10 flex flex-col items-start justify-end bg-gradient-to-t from-[#F2F3F5] to-[#F6F6F7] xs:rounded-[25.22px] sm:rounded-[32px] relative overflow-hidden'>
            <h1 className='xs:text-[26px] sm:text-[36px] font-customSemiBold uppercase xs:mb-1 sm:mb-4 xs:leading-[36.35px] sm:leading-[46px]'>
              Digital <br /> Transformation <br /> Consulting for <br /> Businesses
            </h1>
            <p className='xs:text-[14px] sm:text-[18px] font-customRegular xs:leading-[22.07px] sm:leading-[28px]'>
              Offer expert business transformation guidance, seamlessly integrate blockchain for revenue amplification,
              tax mitigation, and operational efficiency
            </p>
            <img
              src={images.home.home_bg_3}
              alt='home-bg-3'
              className='xs:w-[139px] xs:h-[222px] sm:w-[176px] sm:h-[282px] absolute top-[10%] right-[-19%]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
