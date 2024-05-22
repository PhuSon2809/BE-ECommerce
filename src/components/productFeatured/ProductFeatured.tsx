import { Heart } from 'iconoir-react'
import { Discover } from '~/@types/model'
import images from '~/assets'
import useResponsive from '~/hooks/useResponsive'

type ProductFeaturedProps = {
  product: Discover
  isCenter?: boolean
}

function ProductFeatured({ product, isCenter }: ProductFeaturedProps) {
  const smDown = useResponsive('down', 'sm', 'sm')

  return (
    <div
      className={`product-feature-card xs:mt-5 sm:mt-[50px] ${isCenter ? 'xs:w-[266px] sm:w-[453px]' : 'xs:w-[358px] sm:w-[217px]'} flex flex-col gap-[10px] relative transition-all duration-300 ease-linear `}
    >
      <div className='box-image w-fit relative'>
        <img
          src={product.image}
          alt={product.title}
          className={`${isCenter ? 'xs:w-[266px] xs:h-[266px] sm:w-[453px] sm:h-[461px]' : 'xs:size-[358px] sm:size-[217px]'} xs:rounded-[30px] sm:rounded-[32px] object-cover object-center`}
        />
        <Heart
          width={24}
          height={24}
          color='white'
          className={`absolute ${isCenter ? 'top-[5%] right-[5%]' : 'top-[8%] right-[8%]'} `}
        />
      </div>
      {!isCenter ? (
        <div className={`basic-content xs:w-[266px] sm:w-full flex flex-col`}>
          <div className='flex items-center justify-between'>
            <h6 className='xs:text-[20px] sm:text-[16px] font-customBold'>{product.title}</h6>
            <p className={`xs:text-[16px] sm:text-[12px] text-blackMain/[.64]`}>
              Left: <span className='font-customMedium text-blackMain'>{product.numberItem} items</span>
            </p>
          </div>

          <div className='flex items-center justify-between'>
            <div>
              <p className={`text-[12px] text-blackMain/[.64] sm:leading-[22px]`}>
                Member Price:{' '}
                <span className={`text-[20px] font-customSemiBold text-blackMain`}>{product.retailPrice}$</span>{' '}
                <span className={`text-[16px] text-blackMain/[.64] line-through`}>75$</span>
              </p>
              <div className='flex items-end gap-1'>
                <p className={`text-[12px] text-blackMain/[.64] underline`}>VIP Price: </p>
                <span className={`text-[20px] font-customBold text-blackMain sm:leading-[22px]`}>
                  {product.retailPrice}$
                </span>
              </div>
            </div>
            <button
              className={`xs:size-8 sm:size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer`}
            >
              {smDown ? (
                <img src={images.icons.add_white} alt='icon-add-white' className='xs:block sm:hidden size-5' />
              ) : (
                <img
                  src={images.icons.shopping_bag_white}
                  alt='icon-shopping-bag-white'
                  className='xs:hidden sm:block size-[15.56px]'
                />
              )}
            </button>{' '}
          </div>
        </div>
      ) : (
        <div className='absolute bottom-[7%] right-[-20%]'>
          <div className='relative shadow-popover rounded-[15px]'>
            <img src={images.image.bg_feature_product} alt='bg-feature-product' className='shadow-7xl rounded-[15px]' />
            <div className='w-full absolute top-[2%] px-[20px] py-[5px]'>
              <div className='w-full flex items-center justify-between'>
                <h6 className='font-customBold'>{product.title}</h6>
                <p className={`text-[14px] text-blackMain/[.64]`}>
                  Left: <span className='font-customMedium text-blackMain'>{product.numberItem} items</span>
                </p>
              </div>
              <div>
                <p className={`text-[12px] text-blackMain/[.64] sm:leading-[22px]`}>
                  Member Price:{' '}
                  <span className={`text-[20px] font-customSemiBold text-blackMain`}>{product.retailPrice}$</span>{' '}
                  <span className={`text-[16px] text-blackMain/[.64] line-through`}>75$</span>
                </p>
                <div className='flex items-end gap-1'>
                  <p className={`text-[12px] text-blackMain/[.64] underline`}>VIP Price: </p>
                  <span className={`text-[20px] font-customBold text-blackMain sm:leading-[22px]`}>
                    {product.retailPrice}$
                  </span>
                </div>
              </div>
            </div>
            <button
              className={`size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-0 right-0`}
            >
              <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
            </button>
          </div>
        </div>
      )}
      <div className='box-content absolute bottom-[-3%] left-0'>
        <div className='relative shadow-popover rounded-[15px]'>
          <img
            src={images.image.bg_feature_product_small}
            alt='bg-feature-product-small'
            className='shadow-7xl rounded-[15px]'
          />
          <div className='w-full absolute top-[2.5%] px-[20px] py-1'>
            <div className='w-full flex items-center justify-between'>
              <h6 className='text-[12px] font-customBold leading-[12.6px]'>{product.title}</h6>
              <p className={`text-[12px] text-blackMain/[.64]`}>
                Left: <span className='text-[12.5px] font-customMedium text-blackMain'>{product.numberItem} items</span>
              </p>
            </div>
            <div>
              <p className={`text-[12px] text-blackMain/[.64] leading-[20px]`}>
                Member Price:{' '}
                <span className={`text-[16px] font-customSemiBold text-blackMain`}>{product.retailPrice}$</span>{' '}
                <span className={`text-[14px] text-blackMain/[.64] line-through`}>75$</span>
              </p>
              <div className='flex items-end gap-1'>
                <p className={`text-[12px] text-blackMain/[.64] underline`}>VIP Price: </p>
                <span className={`text-[16px] font-customBold text-blackMain leading-[20px]`}>
                  {product.retailPrice}$
                </span>
              </div>
            </div>
          </div>
          <button
            className={`size-[21.61px] rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-0 right-0`}
          >
            <img src={images.icons.add_white} alt='icon-add-white' className='size-[12.35px]' />
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductFeatured
