import { Heart } from 'iconoir-react'
import { Discover } from '~/@types/model'
import images from '~/assets'

type ProductFeaturedProps = {
  product: Discover
  isCenter?: boolean
  isLeft?: boolean
  isRight?: boolean
}

function ProductFeatured({ product, isCenter }: ProductFeaturedProps) {
  return (
    <div
      className={`product-feature-card mt-[50px] ${isCenter ? 'w-[453px]' : 'w-[217px]'} flex flex-col gap-[10px] relative transition-all duration-300 ease-linear `}
    >
      <div className='box-image relative'>
        <img
          src={product.image}
          alt={product.title}
          className={`${isCenter ? 'w-[453px] h-[461px]' : 'size-[217px]'} rounded-[32px] object-cover object-center`}
        />
        <Heart
          width={24}
          height={24}
          color='white'
          className={`absolute ${isCenter ? 'top-[5%] right-[5%]' : 'top-[8%] right-[8%]'} `}
        />
      </div>
      {!isCenter ? (
        <div className={`w-full flex flex-col`}>
          <div className='flex items-center justify-between'>
            <h6 className='font-customBold'>{product.title}</h6>
            <p className={`text-[12px] text-blackMain/[.64]`}>
              Left: <span className='font-customMedium text-blackMain'>{product.numberItem} items</span>
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <p className={`text-[12px] text-blackMain/[.64]`}>
              Retail/VIP Price:{' '}
              <span className={`text-[20px] font-customSemiBold text-blackMain`}>{product.retailPrice}$</span>
              <span className={`text-[14px] font-customMedium text-blackMain`}>/{product.vipPrice}$</span>
            </p>
            <button
              className={`size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer`}
            >
              <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
            </button>
          </div>
        </div>
      ) : (
        <div className='absolute bottom-[7%] right-[-20%]'>
          <div className='relative shadow-popover rounded-[15px]'>
            <img src={images.image.bg_feature_product} alt='bg-feature-product' className='shadow-7xl rounded-[15px]' />
            <div className='w-full absolute top-[3%] px-[20px] py-2'>
              <div className='w-full flex items-center justify-between'>
                <h6 className='font-customBold'>{product.title}</h6>
                <p className={`text-[14px] text-blackMain/[.64]`}>
                  Left: <span className='font-customMedium text-blackMain'>{product.numberItem} items</span>
                </p>
              </div>
              <p className={`text-[14px] text-blackMain/[.64]`}>
                Retail/VIP Price:{' '}
                <span className={`text-[22px] font-customSemiBold text-blackMain`}>{product.retailPrice}$</span>
                <span className={`text-[16px] font-customMedium text-blackMain`}>/{product.vipPrice}$</span>
              </p>
            </div>
            <button
              className={`size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-0 right-0`}
            >
              <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
export default ProductFeatured
