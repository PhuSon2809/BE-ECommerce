import images from '~/assets'

function RefundCard() {
  return (
    <div className='w-[454px] h-[300px] rounded-[32px] bg-white/[.44] backdrop-blur-2xl p-8 flex flex-col items-center relative shadow-6xl overflow-hidden'>
      <div className='flex flex-col items-center absolute top-1/2 transform -translate-y-1/2 z-50'>
        <div className='flex flex-col items-center gap-3 mb-5'>
          <p className='leading-5'>Refund</p>
          <h6 className='text-[26px] font-bold'>within 15 days</h6>
          <p className='leading-5'>Shipping fee</p>
        </div>

        <img src={images.icons.refund} alt='icon-refund' />
      </div>
      <img src={images.image.circle_white} alt='circle-white' className='absolute bottom-0 z-20' />
    </div>
  )
}

export default RefundCard
