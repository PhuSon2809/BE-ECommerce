import { useCallback, useEffect, useState } from 'react'
//redux
import { useAppDispatch, useAppSelector } from '~/redux/configStore'
//
import { OptionSelect } from '~/@types/common'
import { ProductInStorage } from '~/@types/models'
import { Button } from '~/components/button'
import { SelectFilter } from '~/components/form'
import { DeleteIcon, FavoriteIcon } from '~/components/icons'
import { QuantityController } from '~/components/quantityController'
import { addToCart, removeProductInCart } from '~/redux/cart/cart.slice'
import { addToFavorite, removeProductFavorite } from '~/redux/favorite/favorite.slice'

const listCapacity: OptionSelect[] = [
  { value: 1, label: '100ml' },
  { value: 2, label: '200ml' },
  { value: 3, label: '300ml' }
]

type CartItemProps = {
  isSmall?: boolean
  isFavorite?: boolean
  hideFavorite?: boolean
  hideSelect?: boolean
  hideHandleQuantity?: boolean
  isInCartPopup?: boolean
  isInCartResponsive?: boolean
  cartItem: ProductInStorage
  isItemSelected?: boolean
  handleSelectItem?: (cartItemId: number) => void
}

function CartItem({
  isSmall,
  isFavorite,
  hideFavorite = false,
  hideSelect = false,
  hideHandleQuantity = false,
  isInCartPopup = false,
  isInCartResponsive = false,
  cartItem,
  isItemSelected,
  handleSelectItem
}: CartItemProps) {
  const dispatch = useAppDispatch()

  const { cart } = useAppSelector((state) => state.cart)

  const [quantity, setQuantity] = useState<number | ''>(0)
  const [capacity, setCapacity] = useState<OptionSelect>({ value: 1, label: '100ml' })

  const handleQuantity = (value: number | '') => {
    setQuantity(value)
  }

  useEffect(() => {
    setQuantity(cartItem.quantityInCart)
  }, [cartItem])

  const handleAddToCart = useCallback(() => {
    const productToAddCart: ProductInStorage = {
      numberItems: cartItem.numberItems,
      id: cartItem.id,
      title: cartItem?.title,
      category: cartItem?.category,
      image: cartItem?.image,
      price: cartItem?.price,
      quantityInCart: 1
    }
    dispatch(addToCart(productToAddCart))
  }, [dispatch, cartItem])

  const handleAddToFavorite = useCallback(() => {
    const productToAddFavorite: ProductInStorage = {
      numberItems: cartItem.numberItems,
      id: cartItem.id,
      title: cartItem?.title,
      category: 'Health Products',
      image: cartItem?.image,
      price: cartItem?.price,
      quantityInCart: 0
    }
    dispatch(addToFavorite(productToAddFavorite))
  }, [dispatch, cartItem])

  return (
    <div className='flex items-center xs:gap-2 sm:gap-4'>
      {!hideSelect && (
        <div className='relative'>
          <input
            readOnly
            type='checkbox'
            checked={isItemSelected}
            onClick={() => handleSelectItem && handleSelectItem(cartItem.id)}
            className='appearance-none rounded-full w-6 h-[24px] border-[2px] bg-transparent border-blackMain border-solid 
          checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
          checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
          checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[4.5px] checked:after:left-[9px]'
          />
        </div>
      )}

      <div className={`w-full flex ${isSmall ? 'gap-3' : 'xs:gap-3 sm:gap-4'}`}>
        <div className='flex flex-col items-center gap-2'>
          <div
            className={`${isSmall ? 'min-w-[68px] size-[68px] rounded-[4px]' : 'xs:min-w-[154px] xs:size-[154px] sm:min-w-[139px] sm:size-[139px] rounded-2xl'} relative`}
          >
            <img
              src={cartItem.image}
              alt={cartItem.title}
              className={`size-full ${isSmall ? 'rounded-[4px]' : 'rounded-2xl'}`}
            />
            {isSmall && !isFavorite && (
              <div className='size-5 flex items-center justify-center absolute top-0 left-0 bg-white/[.44] backdrop-blur-sm rounded-tl-[4px] rounded-br-[10px] shadow-checkbox'>
                <div className='relative'>
                  <input
                    readOnly
                    type='checkbox'
                    checked={isItemSelected}
                    onClick={() => handleSelectItem && handleSelectItem(cartItem.id)}
                    className='appearance-none rounded-full size-[14px] border-[1px] bg-white border-blackMain border-solid 
                    checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
                    checked:after:content-[" "] checked:after:block checked:after:w-[3px] checked:after:h-[6px] checked:after:border-r-[1.5px] checked:after:border-b-[1.5px] 
                    checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[7.8px] checked:after:left-[5.8px]'
                  />
                </div>
              </div>
            )}
          </div>
          {isInCartResponsive &&
            (isInCartPopup ? (
              <SelectFilter
                label='Capacity'
                selected={capacity}
                setSelected={setCapacity}
                options={listCapacity}
                className='h-8 !py-1 !rounded-[31px] ring-0'
              />
            ) : (
              <div className={`flex items-center gap-5`}>
                <div onClick={handleAddToFavorite}>
                  <FavoriteIcon color='#0D0D0D' className={`cursor-pointer size-5`} />
                </div>
                <div onClick={() => dispatch(removeProductInCart({ productId: cartItem.id }))}>
                  <DeleteIcon color='#0D0D0D' className={`cursor-pointer size-5`} />
                </div>
              </div>
            ))}
        </div>
        <div className={`w-full flex flex-col ${isInCartPopup ? 'gap-9' : 'justify-between'}`}>
          <div className='xs:space-y-1'>
            <div className='w-full flex justify-between'>
              <p
                className={`${isSmall ? 'text-[18px]' : 'xs:text-[20px] sm:text-[24px]'} font-customBold leading-none`}
              >
                {cartItem.title}
              </p>
              <p
                className={`${isInCartResponsive ? 'hidden' : 'flex'} ${isSmall ? 'text-[16px]' : 'text-[24px]'} font-customSemiBold leading-none`}
              >
                ${cartItem.price.toFixed(2)}
              </p>
            </div>
            <div className='w-full flex items-center justify-between'>
              {!isSmall ? (
                <p className={`${isInCartResponsive ? 'text-[14px]' : 'text-[16px]'} text-blackMain/[.64]`}>
                  {cartItem.category}
                </p>
              ) : (
                <div></div>
              )}
              <p
                className={`${isInCartResponsive ? 'hidden' : 'flex'} ${isSmall ? 'text-[12px]' : 'text-[20px]'} opacity-[.64] line-through`}
              >
                ${(145).toFixed(2)}
              </p>
            </div>
            {!isInCartPopup && !isSmall && (
              <div className={`w-full flex ${isInCartPopup ? 'items-center justify-between mt-[10px]' : 'flex-col'}`}>
                <p className='text-blackMain/[.64]'>
                  Left: <span className='font-customSemiBold text-blackMain'>{cartItem.numberItems} items</span>
                </p>
              </div>
            )}
            {isInCartResponsive && (
              <p
                className={`${isInCartPopup ? 'text-[22px]' : 'text-[20px]'} font-customSemiBold leading-none !mt-[8px]`}
              >
                ${cartItem.price.toFixed(2)}{' '}
                <span className={`${isInCartPopup ? 'text-[16px]' : 'text-[14px]'} leading-none line-through`}>
                  ${(145).toFixed(2)}
                </span>
              </p>
            )}
          </div>

          <div className='mt-[5px]'>
            <div className='flex items-center justify-between'>
              {isFavorite ? (
                <>
                  <div onClick={() => dispatch(removeProductFavorite({ productId: cartItem.id }))}>
                    <DeleteIcon color='#0D0D0D' className={`cursor-pointer ${isSmall ? 'size-5' : 'size-6'}`} />
                  </div>

                  <Button
                    variant='outline'
                    className={`${cart.some((fav) => fav.id === cartItem.id) ? '!w-[140px]' : '!w-[120px]'} !h-[28px] border-blackMain/[.22]`}
                    classNameText='text-[14px]'
                    onClick={handleAddToCart}
                    disabled={cart.some((fav) => fav.id === cartItem.id)}
                  >
                    {cart.some((fav) => fav.id === cartItem.id) ? 'ALREADY IN BAG' : 'ADD TO BAG'}
                  </Button>
                </>
              ) : (
                <>
                  {!isInCartResponsive &&
                    (isInCartPopup ? (
                      <SelectFilter
                        label='Capacity'
                        selected={capacity}
                        setSelected={setCapacity}
                        options={listCapacity}
                        className='h-8 !py-1 !rounded-[31px] ring-0'
                      />
                    ) : (
                      <div className={`flex items-center ${isSmall ? 'gap-4' : 'gap-8'}`}>
                        {(!hideFavorite || isFavorite) && (
                          <div onClick={handleAddToFavorite}>
                            <FavoriteIcon
                              color='#0D0D0D'
                              className={`cursor-pointer ${isSmall ? 'size-5' : 'size-6'}`}
                            />
                          </div>
                        )}
                        <div onClick={() => dispatch(removeProductInCart({ productId: cartItem.id }))}>
                          <DeleteIcon color='#0D0D0D' className={`cursor-pointer ${isSmall ? 'size-5' : 'size-6'}`} />
                        </div>
                      </div>
                    ))}

                  {!hideHandleQuantity && (
                    <QuantityController
                      isSmall={isSmall}
                      isCart
                      productInCart={cartItem}
                      max={cartItem.numberItems}
                      value={quantity}
                      onDecrease={handleQuantity}
                      onIncrease={handleQuantity}
                      onType={handleQuantity}
                      onFocusOut={handleQuantity}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
