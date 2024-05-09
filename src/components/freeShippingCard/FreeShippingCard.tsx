import images from '~/assets'

function FreeShippingCard() {
  return (
    <div className='w-[454px] h-[300px] rounded-[32px] bg-white/[.44] backdrop-blur-2xl p-8 flex flex-col items-center overflow-hidden shadow-6xl'>
      <p className='leading-5'>Shipping fee</p>
      <h6 className='text-[26px] font-bold leading-[72px] mb-[65px]'>Free shipping</h6>
      <div className='relative rotate-[27deg] scale-110'>
        <img
          src={images.icons.shipping_top}
          alt='shipping-top'
          className='absolute top-[-18%] left-[-5%] z-10 rotate-[-27deg]'
        />
        <img src={images.icons.shipping_bottom} alt='shipping-bottom' className='rotate-[-13.63deg]' />
      </div>
    </div>
  )
}

export default FreeShippingCard
