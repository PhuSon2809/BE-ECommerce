import { useCallback, useEffect, useState } from 'react'
//redux
import { useAppDispatch } from '~/redux/configStore'
import { addToCart, removeProductCart } from '~/redux/product/product.slice'
//
import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { Button } from '~/components/button'
import { QuantityController } from '~/components/quantityController'
import { SelectFilter } from '~/components/form'
import { OptionSelect } from '~/@types/common'

const listCapacity: OptionSelect[] = [
  { value: 1, label: '100ml' },
  { value: 2, label: '200ml' },
  { value: 3, label: '300ml' }
]

type CartItemProps = {
  isSmall?: boolean
  isFavorite?: boolean
  hideSelect?: boolean
  isInCartPopup?: boolean
  productCart: ProductCart
  isItemSelected?: boolean
  handleSelectItem?: (cartItemId: number) => void
}

function CartItem({
  isSmall,
  isFavorite,
  hideSelect = false,
  isInCartPopup = false,
  productCart,
  isItemSelected,
  handleSelectItem
}: CartItemProps) {
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = useState<number | ''>(0)
  const [capacity, setCapacity] = useState<OptionSelect>({ value: 1, label: '100ml' })

  const handleQuantity = (value: number | '') => {
    setQuantity(value)
  }

  useEffect(() => {
    setQuantity(productCart.quantityInCart)
  }, [productCart])

  const handleAddToCart = useCallback(() => {
    const productToAddCart: ProductCart = {
      numberItems: productCart.numberItems,
      id: productCart.id,
      title: productCart?.title,
      category: productCart?.category,
      image: productCart?.image,
      price: productCart?.price,
      quantityInCart: 1
    }
    dispatch(addToCart(productToAddCart))
  }, [dispatch, productCart])

  return (
    <div className='flex items-center gap-4'>
      {!hideSelect && (
        <div className='relative'>
          <input
            type='checkbox'
            checked={isItemSelected}
            onClick={() => handleSelectItem && handleSelectItem(productCart.id)}
            className='appearance-none rounded-full w-6 h-[24px] border-[2px] bg-white border-blackMain border-solid 
          checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
          checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
          checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[4.5px] checked:after:left-[9px]'
          />
        </div>
      )}

      <div className={`w-full flex ${isSmall ? 'gap-3' : 'gap-4'}`}>
        <div
          className={`${isSmall ? 'min-w-[68px] size-[68px] rounded-[4px]' : 'min-w-[139px] size-[139px] rounded-2xl'} relative`}
        >
          <img
            src={productCart.image}
            alt={productCart.title}
            className={`size-full ${isSmall ? 'rounded-[4px]' : 'rounded-2xl'}`}
          />
          {isSmall && (
            <div className='size-5 flex items-center justify-center absolute top-0 left-0 bg-white/[.44] backdrop-blur-sm rounded-tl-[4px] rounded-br-[10px] shadow-checkbox'>
              <div className='relative'>
                <input
                  type='checkbox'
                  checked={isItemSelected}
                  onClick={() => handleSelectItem && handleSelectItem(productCart.id)}
                  className='appearance-none rounded-full size-[14px] border-[1px] bg-white border-blackMain border-solid 
                    checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
                    checked:after:content-[" "] checked:after:block checked:after:w-[3px] checked:after:h-[6px] checked:after:border-r-[1.5px] checked:after:border-b-[1.5px] 
                    checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[7.8px] checked:after:left-[5.8px]'
                />
              </div>
            </div>
          )}
        </div>
        <div className='w-full flex flex-col justify-between'>
          <div>
            <div className='w-full flex justify-between'>
              <p className={`${isSmall ? 'text-[18px]' : 'text-[24px]'} font-customBold leading-none`}>
                {productCart.title}
              </p>
              <p className={`${isSmall ? 'text-[16px]' : 'text-[24px]'} font-customSemiBold leading-none`}>
                ${productCart.price.toFixed(2)}
              </p>
            </div>
            <div className='w-full flex items-center justify-between'>
              {!isSmall ? <p className='text-blackMain/[.64]'>{productCart.category}</p> : <div></div>}
              <p className={`${isSmall ? 'text-[12px]' : 'text-[20px]'} opacity-[.64] line-through`}>
                ${(145).toFixed(2)}
              </p>
            </div>
            {!isSmall && (
              <div className={`w-full flex ${isInCartPopup ? 'items-center justify-between mt-[10px]' : 'flex-col'}`}>
                <p className='text-blackMain/[.64]'>
                  Left: <span className='font-customSemiBold text-blackMain'>{productCart.numberItems} items</span>
                </p>
              </div>
            )}
          </div>

          <div className='mt-[3px]'>
            {isFavorite ? (
              <Button variant='outline' className='w-[196px] h-[44px]' onClick={handleAddToCart}>
                ADD TO BAG
              </Button>
            ) : (
              <div className='flex items-center justify-between'>
                {isInCartPopup ? (
                  <SelectFilter
                    label='Capacity'
                    selected={capacity}
                    setSelected={setCapacity}
                    options={listCapacity}
                    className='h-8 !py-1 !rounded-[31px] ring-0'
                  />
                ) : (
                  <div className={`flex items-center ${isSmall ? 'gap-4' : 'gap-8'}`}>
                    <img
                      src={images.icons.heart}
                      alt='icon-heart'
                      className={`cursor-pointer ${isSmall ? 'size-5' : 'size-6'}`}
                    />
                    <img
                      src={images.icons.deleteIon}
                      alt='icon-heart'
                      className={`cursor-pointer ${isSmall ? 'size-5' : 'size-6'}`}
                      onClick={() => dispatch(removeProductCart({ productId: productCart.id }))}
                    />
                  </div>
                )}

                <QuantityController
                  isSmall={isSmall}
                  isCart
                  productInCart={productCart}
                  max={productCart.numberItems}
                  value={quantity}
                  onDecrease={handleQuantity}
                  onIncrease={handleQuantity}
                  onType={handleQuantity}
                  onFocusOut={handleQuantity}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
