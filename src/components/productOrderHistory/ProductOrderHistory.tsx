import { useState } from 'react'
import { Product } from '~/@types/models'
import { QuantityController } from '~/components/quantityController'
import useResponsive from '~/hooks/useResponsive'

type ProductOrderHistoryProps = {
  product: Product
  imageSize?: 'small' | 'medium' | 'large'
  showEditQuantity?: boolean
  isItemSelected?: boolean
  isInDetail?: boolean
  handleSelectItem?: (cartItemId: number) => void
}

function ProductOrderHistory({
  product,
  imageSize = 'large',
  showEditQuantity,
  isItemSelected,
  isInDetail,
  handleSelectItem
}: ProductOrderHistoryProps) {
  const smDown = useResponsive('down', 'sm')
  const smUp = useResponsive('up', 'sm')

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

  const anotherRole = window.history.state.anotherRole

  return (
    <div className='w-full'>
      <div className='w-full flex items-center justify-between'>
        <div className='w-full flex items-center gap-3'>
          {imageSize === 'small' && (
            <div className='relative h-fit flex items-center justify-center xs:mr-0 lg:mr-5'>
              <input
                type='checkbox'
                checked={isItemSelected}
                onClick={() => handleSelectItem && handleSelectItem(product.id)}
                className='appearance-none rounded-[4px] xs:size-5 sm:size-6 border-[2px] bg-white border-blackMain border-solid 
              checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
              checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
              checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute xs:checked:after:top-[2px] xs:checked:after:left-[7px] sm:checked:after:top-[4.5px] sm:checked:after:left-[9px]'
              />
            </div>
          )}
          <img
            src={product.image}
            alt={product.title}
            className={` ${imageSize === 'small' ? 'xs:size-[81px] sm:size-[60px]' : imageSize === 'medium' ? 'xs:size-[81px] sm:size-[96px]' : 'xs:size-[81px] sm:size-[120px]'} rounded-lg object-cover object-center`}
          />
          <div
            className={`w-full flex flex-col ${imageSize === 'small' ? 'xs:gap-2 lg:gap-0' : imageSize === 'medium' ? 'xs:gap-[10px] lg:gap-2' : 'gap-2'}`}
          >
            <div className='flex items-center justify-between'>
              <p
                className={`${imageSize === 'small' ? 'xs:text-[18px] sm:text-[20px]' : 'xs:text-[18px] sm:text-[24px]'} font-customSemiBold xs:leading-[18.9px] sm:leading-[25.2px]`}
              >
                {product.title}
              </p>
              {smDown && anotherRole && <p className='text-[18px] leading-[18.9px]'>x{quantityProductInOrder}</p>}
            </div>
            <div
              className={`w-full flex ${anotherRole && smDown ? 'flex-row justify-between' : 'flex-col'}  ${imageSize === 'small' ? 'xs:gap-2 lg:gap-0' : imageSize === 'medium' ? 'xs:gap-[10px] lg:gap-2' : 'gap-2'}`}
            >
              <p
                className={`${isInDetail ? 'xs:text-[16px]' : 'xs:text-[14px]'} ${imageSize === 'small' ? 'sm:text-[14px]' : 'sm:text-[18px]'} xs:leading-[14.7px] sm:leading-[18.9px] text-blackMain/[.64]`}
              >
                {product.category}
              </p>
              <p
                className={`${isInDetail ? 'xs:text-[16px]' : 'xs:text-[14px]'} ${imageSize === 'small' ? 'sm:text-[14px]' : 'sm:text-[18px]'} xs:leading-[14.7px] sm:leading-[18.9px] text-blackMain/[.64]`}
              >
                200g
              </p>
            </div>
            {smDown && anotherRole && (
              <div className='w-full flex items-center justify-between'>
                <p className={`text-[18px] leading-[18.9px]`}>
                  ${product.vipPrice.toFixed(2)}{' '}
                  <span className={`text-[16px] text-blackMain/[.64] line-through xs:text-right`}>
                    ${product.retailPrice.toFixed(2)}
                  </span>
                </p>
                <p className={`text-[18px] leading-[18.9px]`}>
                  ${(quantityProductInOrder * product.vipPrice).toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
        {(smUp || (smDown && !anotherRole)) && (
          <div className={`sm:w-full flex xs:items-start sm:items-center justify-between`}>
            <div className='flex flex-col items-center gap-2'>
              <p className='xs:text-[18px] sm:text-[20px] xs:leading-[25px] sm:leading-[21px]'>
                {isInDetail || anotherRole ? `x${quantityProductInOrder}` : quantityProductInOrder}
              </p>
              {smUp && showEditQuantity && (
                <QuantityController
                  isCart
                  max={quantityProductInOrder}
                  value={quantity}
                  onDecrease={handleQuantity}
                  onIncrease={handleQuantity}
                />
              )}
            </div>
            <div
              className={`xs:w-fit ${isInDetail ? 'sm:w-[70%]' : 'sm:w-[60%]'} flex xs:flex-col sm:flex-row sm:items-center justify-between`}
            >
              <div className='flex flex-col items-center gap-2'>
                <p
                  className={`xs:text-[18px] sm:text-[20px] xs:leading-[25px] sm:leading-[21px] xs:text-right sm:text-left`}
                >
                  ${product.vipPrice.toFixed(2)}{' '}
                  <span
                    className={`${isInDetail ? 'xs:text-[16px]' : 'xs:text-[14px]'} sm:text-[20px] text-blackMain/[.64] line-through xs:text-right`}
                  >
                    ${product.retailPrice.toFixed(2)}
                  </span>
                </p>
                {smUp && showEditQuantity && (
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
              <div className={`flex flex-col items-end gap-2 ${isInDetail ? 'xs:mt-2 sm:mt-0' : 'mt-0'}`}>
                <p
                  className={`${isInDetail ? 'xs:text-[18px]' : 'xs:text-[16px]'} sm:text-[20px] xs:leading-[16.8px] sm:leading-[21px]`}
                >
                  ${(quantityProductInOrder * product.vipPrice).toFixed(2)}
                </p>
                {smUp && showEditQuantity && (
                  <div className='h-10 flex items-center'>
                    <p className='text-[20px] text-greenMain leading-[21px]'>
                      ${((quantity as number) * (vipPrice !== '' && vipPrice !== 0 ? vipPrice : 0)).toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {smDown && showEditQuantity && (
        <div className='w-full flex items-center justify-between mt-2'>
          <QuantityController
            isSmall
            isCart
            gap='gap-0'
            max={quantityProductInOrder}
            value={quantity}
            onDecrease={handleQuantity}
            onIncrease={handleQuantity}
          />
          <div className='h-8 flex items-center gap-2'>
            <input
              value={vipPrice}
              onChange={handleVipPriceChange}
              className='w-[65px] h-full outline-none border-0 border-b-[2px] border-solid border-greenMain bg-transparent text-center'
            />
            <input
              value={retailPrice}
              onChange={handleRetailPriceChange}
              className='w-[65px] h-full outline-none border-0 border-b-[2px] border-solid border-greenMain bg-transparent text-center'
            />
          </div>
          <p className='text-[16px] text-greenMain leading-[16.8px]'>
            ${((quantity as number) * (vipPrice !== '' && vipPrice !== 0 ? vipPrice : 0)).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  )
}

export default ProductOrderHistory
