import { QueryConfig } from '~/@types/common'
import { ProductInStorage } from '~/@types/models'
import images from '~/assets'
import { IconButton } from '~/components/iconButton'
import { QUERY_PARAM_STRING } from '~/constants/queryParamString'
import useQueryConfig from '~/hooks/useQueryConfig'

type CartShareCardProps = {
  ProductInStorage: ProductInStorage
}

function CartShareCard({ ProductInStorage }: CartShareCardProps) {
  const queryConfig: QueryConfig = useQueryConfig()

  return (
    <div className={`w-[438px] h-[309px] rounded-[32px] relative transition duration-300 ease-linear card-share`}>
      <img
        src={ProductInStorage.image}
        alt={ProductInStorage.title}
        className='w-full h-full rounded-[32px] object-cover object-center'
      />
      {queryConfig.cartShareType === QUERY_PARAM_STRING.cartShareType.viewLinkShare && (
        <IconButton size='32' color='linear' className='absolute top-0 left-0 ring-8 ring-white'>
          <img src={images.icons.check} alt='icon-check' className='size-5' />
        </IconButton>
      )}
      <div className='w-[390px] h-[80px] rounded-[17.28px] shadow-11xl absolute bottom-[-12%] left-1/2 transform -translate-x-1/2'>
        <div className='h-full px-[20px] bg-white/[.75] backdrop-blur-[34.55px] rounded-[17.28px] shadow-12xl flex flex-col justify-center'>
          <div className='flex items-center justify-between'>
            <p className='text-[20px] font-customBold'>{ProductInStorage.title}</p>
            <p className='text-[16px] text-blackMain/[.64]'>
              Left: <span className='text-blackMain'>{ProductInStorage.numberItems} items</span>
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-[16px] text-blackMain/[.64]'>
              Quantity: <span className='text-blackMain'> {ProductInStorage.quantityInCart}</span>
            </p>
            <p className='text-[20px] font-customBold'>{ProductInStorage.price.toFixed(2)}$</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartShareCard
