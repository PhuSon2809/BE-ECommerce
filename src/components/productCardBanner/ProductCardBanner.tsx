import images from '~/assets'

function ProductCardBanner() {
  return (
    <div className='w-[450px] h-[140px] bg-white/[.44] flex items-center justify-center gap-5 rounded-3xl backdrop-blur-2xl'>
      <div>
        <img
          src={images.product.product_banner_single}
          alt='product-banner-single'
          className='w-[106px] h-[106px] rounded-lg bg-white'
        />
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-2'>
          <p className='text-[20px] font-bold leading-[21px]'>Vamp one perfume bottle</p>
          <p className='text-[32px] font-semibold leading-[33.6px]'>
            70$<span className='text-[24px] text-blackMain/[.64] font-bold leading-[25.2px]'>/</span>
            <span className='text-[18px] text-blackMain/[.64] font-normal leading-[18.9px]'>80$</span>
          </p>
          <div className='flex items-center gap-2'>
            <p className='leading-[16.8px]'>
              Remain: <span className='font-semibold'>1:00:06</span>
            </p>
            <div className='w-[6px] h-[5px] bg-blackMain/[.44] rounded-full'></div>
            <p className='leading-[16.8px]'>
              Left: <span className='font-semibold'>20 items</span>
            </p>
          </div>
        </div>
        <img src={images.icons.heart} alt='icon-heart' className='w-6 h-6' />
      </div>
    </div>
  )
}

export default ProductCardBanner
