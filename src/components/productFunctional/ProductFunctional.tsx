import images from '~/assets'
import { Product } from '~/@types/model'
import { IconButton } from '~/components/iconButton'

type ProductFunctionalProps = { product: Product; isActive?: boolean }

function ProductFunctional({ product, isActive }: ProductFunctionalProps) {
  return (
    <div
      className={`w-[410px] ${isActive ? 'h-[372px]' : 'h-[280px]'} shadow-8xl rounded-[32px] transition-all duration-300 ease-in-out`}
    >
      <div className={`bg-white/[.64] p-2 backdrop-blur-2xl shadow-7xl rounded-[32px]`}>
        <div className={`flex flex-col p-3 pb-2`}>
          <div className='flex items-center justify-between'>
            <h6 className='text-[22px] font-customBold'>{product.title}</h6>

            <div className='flex items-center gap-[10px]'>
              <IconButton size='36' color='white'>
                <img src={images.icons.heart} alt='icon-heart' className='size-5' />
              </IconButton>
              <IconButton size='36' color='linear'>
                <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag' className='size-5' />
              </IconButton>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-[14px] font-customRegular'>
              Retail/VIP Price: <span className='text-[23px] font-customSemiBold'>{product.retailPrice}$</span>
              <span className='text-[18px] font-customMedium'>/{product.vipPrice}$</span>
            </p>
            <p className='font-customRegular'>
              Left: <span className='font-customMedium'>{product.numberItem} items</span>
            </p>
          </div>
        </div>
        <div className={`w-full ${isActive ? 'h-[265px]' : 'h-[177px]'} transition-all duration-300 ease-in-out`}>
          <img
            src={product.image}
            alt={product.title}
            className='w-full h-full object-cover object-center rounded-3xl'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductFunctional
