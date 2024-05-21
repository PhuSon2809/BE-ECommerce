import { Heart } from 'iconoir-react'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Product, ProductCart } from '~/@types/model'
import images from '~/assets'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import useResponsive from '~/hooks/useResponsive'
import { useAppDispatch } from '~/redux/configStore'
import { addToCart } from '~/redux/product/product.slice'
import { DialogProductDetail } from '~/sections/productDetail'

type ProductCardProps = {
  product: Product
  size?: string
  borderRadius?: string
  buttonAddBagPosition?: string
  ptContent?: string
  prContent?: string
  inCategory?: boolean
  fontSize?: 'small' | 'medium'
}

function ProductCard({
  product,
  size,
  fontSize = 'medium',
  borderRadius = 'rounded-3xl',
  ptContent,
  prContent = 'pr-10',
  buttonAddBagPosition = 'right-[4.2%]',
  inCategory
}: ProductCardProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const smDown = useResponsive('down', 'sm', 'sm')

  const { pathname } = useLocation()

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

  return (
    <>
      <div className={`${size ? size : 'size-[331px]'} relative`} onClick={handleNavigateDetail}>
        <img src={product.image} alt='product-img' className={`size-full object-cover object-center ${borderRadius}`} />
        <Heart width={24} height={24} color='white' className='absolute top-[4%] right-[4%]' />
        <div className='absolute bottom-[5%] left-1/2 transform -translate-x-1/2 backdrop-blur-2xl shadow-7xl rounded-[15px]'>
          {size === 'w-[357px] h-[272px]' ? (
            <svg width='325' height='89' viewBox='0 0 325 89' fill='none'>
              <path
                d='M325 14C325 6.26801 318.732 0 311 0H14C6.26801 0 0 6.26802 0 14V75C0 82.732 6.26801 89 14 89H284C288.418 89 292 85.4183 292 81V75C292 64.5066 300.507 56 311 56H317C321.418 56 325 52.4183 325 48V14Z'
                fill='white'
                fill-opacity='0.64'
              />
            </svg>
          ) : (size === 'w-full h-[260px]' || size === 'w-full h-[335px]' || size === 'w-[260px] h-[260px]') &&
            inCategory ? (
            <svg width='228' height='68' viewBox='0 0 228 68' fill='none'>
              <path
                d='M228 14C228 6.26801 221.732 0 214 0H14C6.26801 0 0 6.26801 0 14V54C0 61.732 6.26801 68 14 68H187.125C191.544 68 195.125 64.4183 195.125 60V54C195.125 43.5066 203.6 35 214.053 35H220C224.418 35 228 31.4183 228 27V14Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          ) : size === 'w-full h-[335px]' ? (
            <svg width='325' height='72' viewBox='0 0 325 72' fill='none'>
              <path
                d='M325 14C325 6.26801 318.732 0 311 0H14C6.26801 0 0 6.26801 0 14V58C0 65.732 6.26801 72 14 72H284C288.418 72 292 68.4183 292 64V58C292 47.5066 300.507 39 311 39H317C321.418 39 325 35.4183 325 31V14Z'
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
                fill-opacity='0.64'
              />
            </svg>
          ) : (
            <svg width='299' height='72' viewBox='0 0 299 72' fill='none'>
              <path
                d='M299 14C299 6.26801 292.732 0 285 0H14C6.26801 0 0 6.26801 0 14V58C0 65.732 6.26801 72 14 72H258C262.418 72 266 68.4183 266 64V58C266 47.5066 274.507 39 285 39H291C295.418 39 299 35.4183 299 31V14Z'
                fill='white'
                fillOpacity='0.64'
              />
            </svg>
          )}
        </div>
        <div
          className={`w-full h-[72px] px-3 pr-10 ${ptContent} ${prContent} absolute bottom-[3%] left-[5%] flex flex-col`}
        >
          <div className='flex items-center justify-between'>
            <h6 className='sm:text-[16px] font-customBold'>{product.title}</h6>
            <p className={` ${fontSize === 'small' ? 'sm:text-[12px]' : 'sm:text-[14px]'}`}>
              Left: <span className='font-customMedium'>{product.numberItem} items</span>
            </p>
          </div>
          <p className={` ${fontSize === 'small' ? 'sm:text-[12px]' : 'sm:text-[14px]'}`}>
            Retail/VIP Price:{' '}
            <span className={` ${fontSize === 'small' ? 'sm:text-[20px]' : 'sm:text-[22px]'} font-customSemiBold`}>
              {product.retailPrice}$
            </span>
            <span className={` ${fontSize === 'small' ? 'sm:text-[12px]' : 'sm:text-[16px]'} font-customMedium`}>
              /{product.vipPrice}$
            </span>
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className={`xs:size-[18.63px] sm:size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-[5%] ${buttonAddBagPosition}`}
        >
          {smDown ? (
            <img src={images.icons.add_white} alt='icon-add-white' className='size-[10.56px]' />
          ) : (
            <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
          )}
        </button>
      </div>

      <DialogProductDetail open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default ProductCard
