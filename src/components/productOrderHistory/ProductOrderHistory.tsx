import { useState } from 'react'
import { Product } from '~/@types/models'
import { QuantityController } from '~/components/quantityController'

type ProductOrderHistoryProps = {
  product: Product
  smallImage?: boolean
  showEditQuantity?: boolean
}

function ProductOrderHistory({ product, smallImage = false, showEditQuantity }: ProductOrderHistoryProps) {
  const quantityProductInOrder = 5

  const [quantity, setQuantity] = useState<number | ''>(0)
  const [vipPrice, setVipPrice] = useState<number | ''>('')
  const [retailPrice, setRetailPrice] = useState<number | ''>('')

  const handleQuantity = (value: number | '') => {
    setQuantity(value)
  }

  const handleVipPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      setVipPrice(parseFloat(value))
    }
  }

  const handleRetailPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (!isNaN(Number(value)) && Number(value) >= 0) {
      setRetailPrice(parseFloat(value))
    }
  }

  return (
    <div className='w-full flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <img
          src={product.image}
          alt={product.title}
          className={`${smallImage ? 'size-[96px]' : 'size-[120px]'} rounded-lg object-cover object-center`}
        />
        <div className={`flex flex-col ${smallImage ? 'gap-1' : 'gap-2'}`}>
          <p className='text-[24px] font-customSemiBold leading-[25.2px]'>{product.title}</p>
          <p className='text-[18px] leading-[18.9px] text-blackMain/[.64]'>{product.category}</p>
          <p className='text-[18px] leading-[18.9px] text-blackMain/[.64]'>200g</p>
        </div>
      </div>
      <div className='w-[55%] flex items-center justify-between'>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-[20px] leading-[21px]'>{quantityProductInOrder}</p>
          {showEditQuantity && (
            <QuantityController
              isCart
              max={quantityProductInOrder}
              value={quantity}
              onDecrease={handleQuantity}
              onIncrease={handleQuantity}
            />
          )}
        </div>
        <div className='flex flex-col items-center gap-2'>
          <p className='text-[20px] leading-[21px]'>
            ${product.vipPrice.toFixed(2)}{' '}
            <span className='text-blackMain/[.64] line-through'>${product.retailPrice.toFixed(2)}</span>
          </p>
          {showEditQuantity && (
            <div className='h-10 flex items-center gap-2'>
              <input
                value={vipPrice}
                onChange={handleVipPriceChange}
                className='w-20 h-full outline-none border-0 border-b-[2px] border-solid border-greenMain bg-transparent text-center'
              />
              <input
                value={retailPrice}
                onChange={handleRetailPriceChange}
                className='w-20 h-full outline-none border-0 border-b-[2px] border-solid border-greenMain bg-transparent text-center'
              />
            </div>
          )}
        </div>
        <div className='flex flex-col items-end gap-2'>
          <p className='text-[20px] leading-[21px]'>${(quantityProductInOrder * product.vipPrice).toFixed(2)}</p>
          {showEditQuantity && (
            <div className='h-10 flex items-center'>
              <p className='text-[20px] text-greenMain leading-[21px]'>
                ${((quantity as number) * (vipPrice !== '' && vipPrice !== 0 ? vipPrice : 0)).toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductOrderHistory
