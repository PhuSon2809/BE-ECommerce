import images from '~/assets'
import { FavoriteIcon } from '../icons'

function ProductCardBanner() {
  return (
    <div className='xs:w-[256px] sm:w-[450px] xs:h-[76.8px] sm:h-[140px] bg-white/[.44] flex items-center justify-start xs:px-[7px] sm:px-[18px] xs:gap-3 sm:gap-5 xs:rounded-xl sm:rounded-3xl backdrop-blur-2xl shadow-4xl relative'>
      <div className='xs:size-[62.17px] sm:size-[106px]'>
        <img
          src={images.product.product_banner_single}
          alt='product-banner-single'
          className='w-full h-full rounded-lg bg-white/[.50]'
        />
      </div>
      <div className='flex flex-col xs:gap-0 sm:gap-3'>
        <p className='xs:text-[11.7px] sm:text-[20px] font-customBold leading-[21px]'>Vamp one perfume bottle</p>
        <p className='xs:text-[10.24px] sm:text-[16px] font-customRegular leading-[16.8px] capitalize'>
          retail/vIP Price:{' '}
          <span className='xs:text-[17.55px] sm:text-[28px] font-customSemiBold leading-[29.4px]'>70$</span>
          <span className='xs:text-[13.17px] sm:text-[20px] font-customSemiBold leading-[21px]'>/68$</span>
        </p>
        <div className='flex items-center gap-2'>
          <p className='xs:text-[10.24px] sm:text-[16px] font-customRegular leading-[16.8px]'>
            Remain: <span className='font-customMedium'>1:00:06</span>
          </p>
          <svg width='6' height='6' viewBox='0 0 6 6' fill='none'>
            <circle opacity='0.44' cx='3' cy='3' r='3' fill='#0D0D0D' />
          </svg>
          <p className='xs:text-[10.24px] sm:text-[16px] font-customRegular leading-[16.8px]'>
            Left: <span className='font-customMedium'>20 items</span>
          </p>
        </div>
      </div>
      <FavoriteIcon className='xs:size-[14.63px] sm:size-6 absolute xs:top-2 sm:top-4 xs:right-2 sm:right-4' />
    </div>
  )
}

export default ProductCardBanner
