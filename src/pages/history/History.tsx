import { Header } from '~/layouts/components/header'
import images from '~/assets'
import './styles.scss'

type Props = {}

const History = (props: Props) => {
  return (
    <div className='container bg-[#F8F8F9]'>
      <div className='history'>
        <Header />

        {/*  */}
        <div className='flex gap-5 px-4 mt-[35px]'>
          <section className='p-4 pb-[18px] rounded-2xl bg-white/[44%]'>
            <div className=' relative'>
              <div className='w-[335px] h-[180px] relative font-customSemiBold rounded-2xl overflow-hidden'>
                <div className='p-6 absolute inset-0 z-10 text-white'>
                  <div className=' uppercase text-base'>Christopher Victory</div>
                  <div className=' text-white/[68%] text-[14px] mt-[16px] mb-[51px]'>****9878</div>
                  <div className='text-[28px]'>$5,879</div>
                </div>
                <img src={images.history.visa_card_liner} alt='visacard' className=' absolute inset-0' />
              </div>
              <div className='w-[335px] h-[180px] font-customSemiBold absolute rounded-2xl overflow-hidden top-12 z-10'>
                <div className='p-6 absolute inset-0 z-10 text-white'>
                  <div className=' uppercase text-[16px]'>Christopher Victory</div>
                  <div className=' text-white/[68%] text-[14px] mt-[16px] mb-[51px]'>****9878</div>
                  <div className='text-[28px]'>$5,879</div>
                </div>
                <img src={images.history.visa_card} alt='visacard' className=' absolute inset-0' />
              </div>
            </div>
            <div className='mt-[71px]'>
              <div className='flex justify-between items-center mb-4'>
                <div className=' text-xl font-customSemiBold'>Payment History</div>
                <img src={images.icons.filter_2} alt='icon' />
              </div>
              <div className='flex flex-col gap-3'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className='flex justify-between items-center text-lg'>
                    <div className='flex items-center gap-4'>
                      <img src={images.icons.wallet} alt='icon' />
                      <span>Wallet fg75...jh89</span>
                    </div>
                    <div className='font-customSemiBold'>$249.00</div>
                  </div>
                ))}
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className='flex justify-between items-center text-lg'>
                    <div className='flex items-center gap-4'>
                      <img src={images.icons.visa} alt='icon' />
                      <span>Visa ****5678</span>
                    </div>
                    <div className='font-customSemiBold'>$249.00</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className='flex-1'>
            <section>
              <h2 className='font-customSemiBold text-[40px] mb-[25px]'>Order History</h2>
              <div className='flex gap-5 w-full'>
                <div className='h-[305px] w-2/3 bg-white/[44%] rounded-xl overflow-hidden shadow-popover-custom-2'>
                  chart
                </div>
                <div className='w-1/3 bg-white/[44%] rounded-xl overflow-hidden px-4 py-[35px]'>
                  <div className='font-customSemiBold text-[20px]'>Reward Points</div>
                </div>
              </div>
            </section>

            <section className='mt-[32px] mb-6'>
              <div className='flex w-full'>
                {Array.from({ length: 6 }).map((_, index) => {
                  return (
                    <div
                      key={index}
                      className='w-full py-[11px] px-3 pl-4 flex justify-between items-center text-[18px] bg-white first:bg-gradient-to-r first:from-[#5495FC] first:to-[#31D366] first:rounded first:font-customSemiBold'
                    >
                      <div>Awaiting</div>
                      <div className='px-[6px] h-[22px] bg-[#F6F6F7] rounded-sm text-base font-customSemiBold'>120</div>
                    </div>
                  )
                })}
              </div>
            </section>

            <section>
              <div className='flex justify-between items-center'>
                <div className='flex'>
                  <button className='w-[120px] h-[44px] border-l-[1px] border-b-[1px] border-[#5495FC] flex justify-center items-center'>
                    12 months
                  </button>
                  <button className='w-[120px] h-[44px] border-l-[1px] border-b-[1px] border-[#5495FC]/[12%] flex justify-center items-center'>
                    30 days
                  </button>
                  <button className='w-[120px] h-[44px] border-l-[1px] border-b-[1px] border-[#5495FC]/[12%] flex justify-center items-center'>
                    7 days
                  </button>
                  <button className='w-[120px] h-[44px] border-l-[1px] border-b-[1px] border-[#5495FC]/[12%] flex justify-center items-center'>
                    24 hours
                  </button>
                </div>
                <div className='h-[44px] w-[355px] py-[10px] px-[12px] rounded-lg bg-white/[44%] border-[1px] border-[#0d0d0d1a]'>
                  <form action=''>
                    <div className='flex gap-3'>
                      <img src={images.icons.search} alt='icon' />
                      <span className='h-full w-[1px] bg-black/[12%] inline-block'></span>
                      <input type='text' className='w-full bg-transparent' placeholder='Enter your product name' />
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
