import images from '~/assets'
import { VisaIcon } from '~/components/icons'

function ListCardWallet() {
  return (
    <div>
      <div className='relative'>
        <div className='w-[335px] h-[180px] relative font-customSemiBold rounded-2xl'>
          <div className='p-6 absolute inset-0 z-10 text-white'>
            <div className='text-[16px] font-customSemiBold uppercase'>Christopher Victory</div>
            <div className=' text-white/[68%] text-[14px] mt-[16px] mb-[51px]'>****9878</div>
            <div className='text-[28px] font-customSemiBold'>$5,879</div>
          </div>
          <img src={images.history.visa_card_liner} alt='visacard' className=' absolute inset-0' />
        </div>
        <div className='w-[335px] h-[180px] absolute rounded-2xl top-12 z-10'>
          <div className='flex flex-col justify-between p-6 absolute inset-0 z-10 text-white'>
            <div className='space-y-1'>
              <div className=' uppercase text-[16px] font-customSemiBold'>Dulce Kenter</div>
              <div className=' text-white/[68%] text-[14px] mt-[16px]'>****9878</div>
            </div>
            <div className='flex items-end justify-between'>
              <div className='text-[28px] font-customSemiBold'>$5,879</div>
              <VisaIcon color='white' />
            </div>
          </div>
          <img src={images.image.cart_wallet_gradient} alt='visacard' className=' absolute inset-0' />
        </div>
      </div>

      <button className='w-full h-8 border border-dashed border-blackMain/[.12] font-customMedium rounded mt-[60px]'>
        + Add a new card/wallet
      </button>
    </div>
  )
}

export default ListCardWallet
