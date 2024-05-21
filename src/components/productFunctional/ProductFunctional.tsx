import images from '~/assets'
import { Product } from '~/@types/model'
import { IconButton } from '~/components/iconButton'
import useResponsive from '~/hooks/useResponsive'

type ProductFunctionalProps = { product: Product; isActive?: boolean; positionPrice?: string }

function ProductFunctional({ product, isActive, positionPrice }: ProductFunctionalProps) {
  const smDown = useResponsive('down', 'sm', 'sm')

  return (
    <div
      className={`xs:w-[340px] sm:w-[410px] ${isActive ? 'xs:h-[300px] sm:h-[372px]' : 'xs:h-[244px] sm:h-[305px]'} shadow-8xl rounded-[32px] transition-all duration-300 ease-in-out`}
    >
      <div className={`bg-white/[.64] p-2 backdrop-blur-2xl shadow-7xl rounded-[32px]`}>
        <div className={`flex flex-col p-3 pb-2`}>
          <div className='flex items-center justify-between'>
            <h6 className='xs:text-[18px] sm:text-[22px] font-customBold xs:leading-[20px] sm:leading-[24px]'>
              {product.title}
            </h6>

            <div className='flex items-center gap-[10px]'>
              <IconButton size={smDown ? '32' : '36'} color='white'>
                <img src={images.icons.heart} alt='icon-heart' className='xs:size-4 sm:size-5' />
              </IconButton>
              <IconButton size={smDown ? '32' : '36'} color='linear'>
                <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag' className='xs:size-4 sm:size-5' />
              </IconButton>
            </div>
          </div>
          <div className={`flex items-center justify-between`}>
            <div>
              <p className='xs:text-[12px] sm:text-[16px] font-customRegular text-blackMain/[.64] xs:leading-[22px] sm:leading-7'>
                Member Price:{' '}
                <span className='xs:text-[20px] sm:text-[24px] font-customSemiBold text-blackMain '>
                  {product.retailPrice}$
                </span>{' '}
                <span className='xs:text-[14px] sm:text-[18px] line-through'>75$</span>
              </p>
              <div className='flex items-center gap-1'>
                <p className='xs:text-[14px] sm:text-[16px] font-customRegular underline xs:leading-[22px] sm:leading-7'>
                  VIP Price:
                </p>
                <span className='xs:text-[18px] sm:text-[24px] font-customBold xs:leading-[22px] sm:leading-7'>
                  {product.vipPrice}$
                </span>
              </div>
            </div>

            <p
              className={`h-fit ${positionPrice && 'mt-auto'} font-customRegular xs:leading-[14.7px] sm:leading-[17px]`}
            >
              Left: <span className='font-customMedium'>{product.numberItem} items</span>
            </p>
          </div>
        </div>
        <div
          className={`w-full ${isActive ? 'xs:h-[201px] sm:h-[265px]' : 'xs:h-[145px] sm:h-[177px]'} transition-all duration-300 ease-in-out`}
        >
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
