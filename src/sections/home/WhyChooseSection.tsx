import images from '~/assets'
import './styles.scss'

function WhyChooseSection() {
  return (
    <section className='section-why-choose mt-[100px] pr-5 relative overflow-hidden'>
      <img src={images.home.home_bg_6} alt='home-bg-6' className='absolute top-[4%] left-[-2%] bg-white' />
      <div className='grid grid-cols-3 gap-5 relative z-10'>
        <div className='col-span-1'>
          <div className='flex flex-col gap-4  ml-[60px]'>
            <h1 className='text-[52px] font-customBold capitalize'>
              Why <br /> choose us
            </h1>
            <p className='text-[18px] font-customRegular tracking-wide'>
              Our expertise extends beyond mere transactions; we offer comprehensive digital transformation consulting
              services, empowering businesses to thrive in an increasingly interconnected world.
            </p>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='bg-blue'>
            <p className='text-[28px] font-customMedium'>
              Retail customers <br /> enjoy high discounts, with
            </p>
            <p className='text-[80px] font-customSemiBold'>
              82.5% <span className='text-[28px] font-customMedium'>of discounts</span>
            </p>
            <p className='text-[28px] font-customMedium'>returned to the community</p>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='bg-circle-white bg-gradient-to-r from-[#F6F6F7]/[.1] to-[#F2F3F5]'>
            <p className='text-[28px] font-customMedium'>Agents receive commissions via web3 wallet, with</p>
            <h6 className='text-[38px] font-customSemiBold capitalize'>no risk of loss or balance alterations</h6>
          </div>
          <div className='border-image h-[279px] bg-gradient-to-r from-[#F6F6F7]/[.1] to-[#F2F3F5] rounded-[32px] mt-5 p-10'>
            <p className='text-[28px] font-customMedium'>Immediate revenue for affiliates,</p>
            <h6 className='text-[38px] font-customSemiBold capitalize'>eliminating revenue holdbacks</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
