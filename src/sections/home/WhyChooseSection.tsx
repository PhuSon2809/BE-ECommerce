import images from '~/assets'
import './styles.scss'

function WhyChooseSection() {
  return (
    <section className='section-why-choose mt-[100px] xs:px-4 sm:pr-5 sm:pl-0 relative overflow-hidden'>
      <img
        src={images.home.home_bg_6}
        alt='home-bg-6'
        className='absolute xs:top-0 sm:top-[4%] xs:left-0 sm:left-[-2.5%] bg-white'
      />
      <div className='flex xs:flex-col sm:flex-row xs:gap-4 sm:gap-5 relative z-10'>
        <div className='xs:w-[358px] sm:w-[453px] flex flex-col gap-4 xs:ml-0 sm:ml-[60px] xs:mb-8 sm:mb-0 xs:mt-10 sm:mt-0'>
          <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize xs:leading-[40px] sm:leading-[64px]'>
            Why <br className='xs:hidden sm:block' /> choose us
          </h1>
          <p className='xs:hidden sm:block w-[355px] text-[18px] font-customRegular tracking-wide leading-[28px]'>
            Our expertise extends beyond mere transactions; we offer comprehensive digital transformation consulting
            services, empowering businesses to thrive in an increasingly interconnected world.
          </p>
        </div>

        <div className='xs:w-[358px] sm:w-[453px] xs:h-[452px] sm:h-[661px] xs:p-[30px] sm:p-10 xs:rounded-[25.29px] sm:rounded-[32px] bg-blue'>
          <p className='xs:text-[22px] sm:text-[28px] font-customMedium xs:leading-[31.61px] sm:leading-[40px]'>
            Retail customers <br /> enjoy high discounts, with
          </p>
          <p className='xs:text-[64px] sm:text-[80px] font-customSemiBold xs:leading-[33.19px] sm:leading-[42px] tracking-tight -mb-3 mt-2'>
            82.5%{' '}
            <span className='xs:text-[22px] sm:text-[28px] font-customMedium -ml-3 tracking-normal'>of discounts</span>
          </p>
          <p className='xs:text-[22px] sm:text-[28px] font-customMedium xs:leading-[33.19px] sm:leading-[42px]'>
            returned to the community
          </p>
        </div>

        <div className='xs:w-[358px] sm:w-[453px] flex flex-col xs:gap-4 sm:gap-5'>
          <div className='xs:h-[220px] sm:h-[279px] px-10 xs:rounded-[25.29px] sm:rounded-[32px] flex flex-col justify-center gap-3 bg-circle-white bg-gradient-to-r from-[#F6F6F7]/[.1] to-[#F2F3F5]'>
            <p className='xs:text-[22px] sm:text-[28px] font-customMedium xs:leading-[31.16px] sm:leading-[40px]'>
              Agents receive commissions via web3 wallet, with
            </p>
            <h6 className='xs:text-[30px] sm:text-[38px] font-customSemiBold capitalize xs:leading-[38px] sm:leading-[48px]'>
              no risk of loss or balance alterations
            </h6>
          </div>
          <div className='border-image xs:h-[220px] sm:h-[279px] xs:p-8 sm:p-10 flex flex-col justify-center gap-3 xs:rounded-[25.29px] sm:rounded-[32px] bg-gradient-to-r from-[#F6F6F7]/[.1] to-[#F2F3F5] '>
            <p className='xs:text-[22px] sm:text-[28px] font-customMedium xs:leading-[31.16px] sm:leading-[40px]'>
              Immediate revenue for affiliates,
            </p>
            <h6 className='xs:text-[30px] sm:text-[38px] font-customSemiBold capitalize xs:leading-[38px] sm:leading-[48px]'>
              eliminating revenue holdbacks
            </h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
