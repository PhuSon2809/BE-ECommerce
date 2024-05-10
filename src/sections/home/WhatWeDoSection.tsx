import images from '~/assets'

function WhatWeDoSection() {
  return (
    <section className='mt-[70px] px-5'>
      <h1 className='text-[52px] font-customBold capitalize text-center'>What we do</h1>
      <p className='text-[18px] font-customRegular text-center'>
        The following are the comprehensive range of services we provide
      </p>

      <div className='mt-10'>
        <div className='grid grid-cols-3 gap-5'>
          <div className='col-span-1'>
            <div className='grid grid-rows-3 gap-5'>
              <div className='row-span-1'>
                <img src={images.home.home1} alt='home-1' className='w-full rounded-[32px]' />
              </div>
              <div className='row-span-2'>
                <div className='p-10 h-full flex flex-col items-start justify-end text-white bg-gradient-to-t from-[#5495FC] to-[#31D366] rounded-[32px] relative'>
                  <img
                    src={images.home.home_bg_1}
                    alt='home-bg-1'
                    className='absolute top-[5%] right-[5%] rotate-[48.91deg]'
                  />
                  <h1 className='w-[320px] text-[36px] font-customSemiBold uppercase mb-4'>Cross-Border Trading</h1>
                  <p className='text-[18px] font-customRegular'>
                    Empower global commerce, manufacture centrally, distribute globally
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='grid grid-rows-3 gap-5'>
              <div className='row-span-2'>
                <div className='p-10 h-full flex flex-col items-start justify-end bg-gradient-to-t from-[#F2F3F5] to-[#F6F6F7] rounded-[32px] relative overflow-hidden'>
                  <h1 className='w-[350px] text-[36px] font-customSemiBold uppercase mb-4'>
                    Customer Shipping Services
                  </h1>
                  <p className='text-[18px] font-customRegular'>
                    Empowering communities with widespread income distribution, fostering global connections, with a
                    network of 20,000 collaborators worldwide.
                  </p>
                  <img src={images.home.home_bg_2} alt='home-bg-2' className='absolute top-[-5%] right-[-5%]' />
                </div>
              </div>
              <div className='row-span-1'>
                <img src={images.home.home2} alt='home-2' className='w-full rounded-[32px]' />
              </div>
            </div>
          </div>
          <div className='col-span-1'>
            <div className='grid grid-rows-3 gap-5'>
              <div className='row-span-1'>
                <img src={images.home.home3} alt='home-3' className='w-full rounded-[32px]' />
              </div>
              <div className='row-span-2'>
                <div className='p-10 h-full flex flex-col items-start justify-end bg-gradient-to-t from-[#F2F3F5] to-[#F6F6F7] rounded-[32px] relative overflow-hidden'>
                  <h1 className='w-[300px] text-[36px] font-customSemiBold uppercase mb-4'>
                    Digital Transformation Consulting for Businesses
                  </h1>
                  <p className='text-[18px] font-customRegular'>
                    Offer expert business transformation guidance, seamlessly integrate blockchain for revenue
                    amplification, tax mitigation, and operational efficiency
                  </p>
                  <img src={images.home.home_bg_3} alt='home-bg-3' className='absolute top-[10%] right-[-19%]' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
