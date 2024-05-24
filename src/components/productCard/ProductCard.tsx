import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Product, ProductCart, ProductFavorite } from '~/@types/models'
import images from '~/assets'
import { DialogDetailPage } from '~/components/dialogDetailPage'
import { FavoriteIcon } from '~/components/icons'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import useResponsive from '~/hooks/useResponsive'
import { ProductDetail } from '~/pages/productDetail'
import { addToCart } from '~/redux/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '~/redux/configStore'
import { addToFavorite } from '~/redux/favorite/favorite.slice'

type ProductCardProps = {
  product: Product
  size?: string
  borderRadius?: string
  buttonAddBagPosition?: string
  contentPosition?: string
  paddingContent?: string
  inCategory?: boolean
  fontSize?: 'xSmall' | 'small' | 'medium'
}

function ProductCard({
  product,
  size,
  fontSize = 'medium',
  borderRadius = 'rounded-3xl',
  paddingContent = 'xs:px-2 xs:pr-5 sm:px-3 sm:pr-10 ',
  buttonAddBagPosition = 'xs:size-6 sm:size-7 right-[4.2%]',
  contentPosition = 'bottom-[6%]',
  inCategory
}: ProductCardProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  const { favorites } = useAppSelector((state) => state.favorite)

  const smDown = useResponsive('down', 'sm')
  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const handleNavigateDetail = () => {
    if (pathname === PATH_PUBLIC_APP.category.list) {
      handleOpen()
      window.history.pushState({}, '', `${PATH_PUBLIC_APP.product.root}/${product.id}`)
    } else {
      navigate(`${PATH_PUBLIC_APP.product.root}/${product.id}`)
    }
  }

  const handleAddToCart = useCallback(() => {
    const productToAddCart: ProductCart = {
      numberItems: product.numberItem,
      id: product.id,
      title: product?.title,
      category: 'Health Products',
      image: product?.image,
      price: product?.vipPrice,
      quantityInCart: 1
    }
    dispatch(addToCart(productToAddCart))
  }, [dispatch, product])

  const handleAddToFavorite = useCallback(() => {
    const productToAddFavorite: ProductFavorite = {
      id: product.id,
      title: product?.title,
      image: product?.image,
      vipPrice: product?.vipPrice,
      retailPrice: product?.retailPrice
    }
    dispatch(addToFavorite(productToAddFavorite))
  }, [dispatch, product])

  return (
    <>
      <div className={`${size ? size : 'size-[331px]'} relative`} onClick={handleNavigateDetail}>
        <img src={product.image} alt='product-img' className={`size-full object-cover object-center ${borderRadius}`} />
        <div className='absolute top-[4%] right-[4%]' onClick={handleAddToFavorite}>
          <FavoriteIcon color={favorites.some((fav) => fav.id === product.id) ? 'linear' : 'white'} />
        </div>
        <div className='absolute bottom-[5%] left-1/2 transform -translate-x-1/2 backdrop-blur-2xl shadow-7xl rounded-[15px]'>
          {size === 'w-[357px] h-[272px]' ? (
            <svg width='325' height='89' viewBox='0 0 325 89' fill='none'>
              <path
                d='M325 14C325 6.26801 318.732 0 311 0H14C6.26801 0 0 6.26802 0 14V75C0 82.732 6.26801 89 14 89H284C288.418 89 292 85.4183 292 81V75C292 64.5066 300.507 56 311 56H317C321.418 56 325 52.4183 325 48V14Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : (size === 'w-full h-[260px]' || size === 'w-full h-[335px]' || size === 'w-[260px] h-[260px]') &&
            inCategory ? (
            <svg width='228' height='78' viewBox='0 0 228 78' fill='none'>
              <path
                d='M228 14C228 6.26801 221.732 0 214 0H14C6.26801 0 0 6.26801 0 14V64C0 71.732 6.26801 78 14 78H187.125C191.544 78 195.125 74.4183 195.125 70V64C195.125 53.5066 203.6 45 214.053 45H220C224.418 45 228 41.4183 228 37V14Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : size === 'w-full h-[335px]' ? (
            <svg width='325' height='86' viewBox='0 0 325 86' fill='none'>
              <path
                d='M325 14C325 6.26801 318.732 0 311 0H14C6.26801 0 0 6.26802 0 14V72C0 79.732 6.26801 86 14 86H284C288.418 86 292 82.4183 292 78V72C292 61.5066 300.507 53 311 53H317C321.418 53 325 49.4183 325 45V14Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : size === 'w-[358px] h-[396px]' ? (
            <svg width='322' height='78' viewBox='0 0 322 78' fill='none'>
              <path
                d='M321.469 15.0521C321.469 6.73904 314.73 0 306.417 0H15.0521C6.73904 0 0 6.73903 0 15.052V62.3585C0 70.6716 6.73903 77.4106 15.0521 77.4106H277.388C282.138 77.4106 285.989 73.5597 285.989 68.8094V62.3585C285.989 51.0766 295.135 41.9307 306.417 41.9307H312.868C317.618 41.9307 321.469 38.0799 321.469 33.3296V15.0521Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : size === 'w-[302px] h-[230px]' ? (
            <svg width='278' height='76' viewBox='0 0 278 76' fill='none'>
              <path
                d='M278 11.9754C278 5.36156 272.638 0 266.025 0H11.9754C5.36156 0 0 5.36157 0 11.9754V64.0246C0 70.6384 5.36156 76 11.9754 76H242.929C246.709 76 249.772 72.9363 249.772 69.1569V64.0246C249.772 55.0487 257.049 47.9015 266.025 47.9015H271.157C274.936 47.9015 278 44.8378 278 41.0585V11.9754Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : size === 'w-full h-[173px]' ? (
            <svg width='152' height='52' viewBox='0 0 152 52' fill='none'>
              <path
                d='M151.708 9.31538C151.708 4.17064 147.537 0 142.392 0H9.31538C4.17064 0 0 4.17063 0 9.31537V41.9308C0 47.0755 4.17064 51.2462 9.31538 51.2462H124.51C127.45 51.2462 129.833 48.8629 129.833 45.9231V41.9308C129.833 34.9486 135.472 29.2885 142.428 29.2885H146.385C149.324 29.2885 151.708 26.9052 151.708 23.9654V9.31538Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : size === 'w-[358px] h-[396px]' ? (
            <svg width='334' height='76' viewBox='0 0 334 76' fill='none'>
              <path
                d='M334 11.9754C334 5.36156 328.638 0 322.025 0H11.9754C5.36156 0 0 5.36157 0 11.9754V64.0246C0 70.6384 5.36154 76 11.9754 76H298.929C302.709 76 305.772 72.9363 305.772 69.1569V64.0246C305.772 55.0487 313.049 47.9015 322.025 47.9015H327.157C330.936 47.9015 334 44.8378 334 41.0585V11.9754Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : (
            <svg width='299' height='86' viewBox='0 0 299 86' fill='none'>
              <path
                d='M299 14C299 6.26801 292.732 0 285 0H14C6.26801 0 0 6.26802 0 14V72C0 79.732 6.26801 86 14 86H258C262.418 86 266 82.4183 266 78V72C266 61.5066 274.507 53 285 53H291C295.418 53 299 49.4183 299 45V14Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          )}
        </div>
        <div className={`w-full ${paddingContent} absolute ${contentPosition} left-[5%] flex flex-col `}>
          <div className='flex items-center justify-between'>
            <h6
              className={`${fontSize === 'xSmall' ? 'text-[9.32px]' : fontSize === 'small' ? 'xs:text-[14px] sm:text-[14px]' : 'xs:text-[14px] sm:text-[16px]'} font-customBold`}
            >
              {product.title}
            </h6>
            <p
              className={`${fontSize === 'xSmall' ? 'text-[7.98px]' : fontSize === 'small' ? 'xs:text-[12px] sm:text-[12px]' : 'xs:text-[12px] sm:text-[14px]'}`}
            >
              Left: <span className='font-customMedium'>{product.numberItem} items</span>
            </p>
          </div>
          <p
            className={`${fontSize === 'xSmall' ? 'text-[8px] leading-[14px]' : fontSize === 'small' ? 'xs:leading-[16px] text-[10px]' : 'xs:leading-[18px] text-[12px]'} text-blackMain/[.64]  sm:leading-[22px]`}
          >
            Member Price:{' '}
            <span
              className={`${fontSize === 'xSmall' ? 'text-[12px] leading-[14px]' : fontSize === 'small' ? 'xs:text-[14px] sm:text-[18px]' : 'xs:text-[16px] sm:text-[20px]'} text-blackMain font-customSemiBold`}
            >
              {product.retailPrice}$
            </span>{' '}
            <span
              className={`${fontSize === 'xSmall' ? 'text-[9px] leading-[14px]' : fontSize === 'small' ? 'xs:text-[10px] sm:text-[14px]' : 'xs:text-[12px] sm:text-[16px]'} line-through`}
            >
              75$
            </span>
          </p>
          <div className='flex items-end gap-1'>
            <p
              className={`${fontSize === 'xSmall' ? 'text-[8.28px] leading-[14px]' : fontSize === 'small' ? 'text-[10px]' : 'text-[12px]'} text-blackMain/[.64] underline`}
            >
              VIP Price:{' '}
            </p>
            <span
              className={`${fontSize === 'xSmall' ? 'text-[12px] leading-[14px]' : fontSize === 'small' ? 'xs:text-[14px] sm:text-[18px]' : 'xs:text-[16px] sm:text-[20px]'} text-blackMain font-customBold xs:leading-[18px] sm:leading-[22px]`}
            >
              {product.retailPrice}$
            </span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className={`
            rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-[5%] 
            ${buttonAddBagPosition ? buttonAddBagPosition : 'xs:size-6 sm:size-7 right-[4.2%]'}
          `}
        >
          {smDown && inCategory ? (
            <img
              src={images.icons.add_white}
              alt='icon-add-white'
              className={
                size === 'w-full h-[173px]' || size === 'w-[260px] h-[260px]' ? 'size-[16.39px]' : 'size-[10.65px]'
              }
            />
          ) : (
            <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
          )}
        </button>
      </div>

      <DialogDetailPage open={isOpen} setOpen={setIsOpen}>
        <ProductDetail setOpen={setIsOpen} />
      </DialogDetailPage>
    </>
  )
}

export default ProductCard
