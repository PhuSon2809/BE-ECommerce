import { Heart } from 'iconoir-react'
import { Link } from 'react-router-dom'

import { PATH_PUBLIC_APP } from '~/constants/paths'
import { Product } from '~/@types/model'
import images from '~/assets'

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
  return (
    <div className={`${size ? size : 'size-[331px]'} relative`}>
      <Link to={PATH_PUBLIC_APP.category.list} className='w-full h-full'>
        <img src={product.image} alt='product-img' className={`size-full object-cover object-center ${borderRadius}`} />
        <Heart width={24} height={24} color='white' className='absolute top-[4%] right-[4%]' />
        <div className='absolute bottom-[5%] left-1/2 transform -translate-x-1/2 backdrop-blur-2xl shadow-7xl rounded-[15px]'>
          {size === 'w-[357px] h-[272px]' ? (
            <svg width='325' height='72' viewBox='0 0 325 72' fill='none'>
              <path
                d='M325 14C325 6.26801 318.732 0 311 0H14C6.26801 0 0 6.26801 0 14V58C0 65.732 6.26801 72 14 72H284C288.418 72 292 68.4183 292 64V58C292 47.5066 300.507 39 311 39H317C321.418 39 325 35.4183 325 31V14Z'
                fill='white'
                fillOpacity='0.64'
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
        <div className={`w-full h-[72px] px-5 ${ptContent} ${prContent} absolute bottom-[3%] left-[5%] flex flex-col`}>
          <div className='flex items-center justify-between'>
            <h6 className='font-customBold'>{product.title}</h6>
            <p className={`${fontSize === 'small' ? 'text-[12px]' : 'text-[14px]'}  font-customRegular`}>
              Left: <span className='font-customMedium'>{product.numberItem} items</span>
            </p>
          </div>
          <p className={`${fontSize === 'small' ? 'text-[12px]' : 'text-[14px]'}  font-customRegular`}>
            Retail/VIP Price:{' '}
            <span className={`${fontSize === 'small' ? 'text-[20px]' : 'text-[22px]'}  font-customSemiBold`}>
              {product.retailPrice}$
            </span>
            <span className={`${fontSize === 'small' ? 'text-[12px]' : 'text-[16px]'} font-customMedium`}>
              /{product.vipPrice}$
            </span>
          </p>
        </div>
        <button
          className={`size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-[5%] ${buttonAddBagPosition}`}
        >
          <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
        </button>
      </Link>
    </div>
  )
}

export default ProductCard
