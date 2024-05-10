import { Heart } from 'iconoir-react'
import { Product } from '~/@types/model'
import images from '~/assets'

type ProductCardProps = {
  product: Product
  size?: string
}

function ProductCard({ product, size }: ProductCardProps) {
  return (
    <div className={`${size ? size : 'size-[331px]'} relative`}>
      <img src={product.image} alt='product-img' className='size-full object-cover object-center rounded-3xl' />
      <Heart width={24} height={24} color='white' className='absolute top-[4%] right-[4%]' />
      <div className='w-[299px] h-[72px] absolute bottom-[5%] left-[5%]'>
        {size ? (
          <svg
            width='325'
            height='72'
            viewBox='0 0 325 72'
            fill='none'
            className='backdrop-blur-2xl shadow-7xl rounded-[15px]'
          >
            <path
              d='M325 14C325 6.26801 318.732 0 311 0H14C6.26801 0 0 6.26801 0 14V58C0 65.732 6.26801 72 14 72H284C288.418 72 292 68.4183 292 64V58C292 47.5066 300.507 39 311 39H317C321.418 39 325 35.4183 325 31V14Z'
              fill='white'
              fill-opacity='0.64'
            />
          </svg>
        ) : (
          <svg
            width='299'
            height='72'
            viewBox='0 0 299 72'
            fill='none'
            className='backdrop-blur-2xl shadow-7xl rounded-[15px]'
          >
            <path
              d='M299 14C299 6.26801 292.732 0 285 0H14C6.26801 0 0 6.26801 0 14V58C0 65.732 6.26801 72 14 72H258C262.418 72 266 68.4183 266 64V58C266 47.5066 274.507 39 285 39H291C295.418 39 299 35.4183 299 31V14Z'
              fill='white'
              fill-opacity='0.64'
            />
          </svg>
        )}
      </div>
      <div className={`w-[299px] h-[72px] px-5 absolute bottom-[3%] left-[5%] flex flex-col`}>
        <div className='flex items-center justify-between'>
          <h6 className='font-customBold'>{product.title}</h6>
          <p className='text-[14px] font-customRegular'>
            Left: <span className='font-customMedium'>{product.numberItem} items</span>
          </p>
        </div>
        <p className='text-[14px] font-customRegular'>
          Retail/VIP Price: <span className='text-[22px] font-customSemiBold'>{product.retailPrice}$</span>
          <span className='text-[16px] font-customMedium'>/{product.vipPrice}$</span>
        </p>
      </div>
      <button className='size-7 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-[5%] right-[4.2%]'>
        <img src={images.icons.shopping_bag_white} alt='icon-shopping-bag-white' className='size-[15.56px]' />
      </button>
    </div>
  )
}

export default ProductCard
