import { useCallback, useEffect, useState } from 'react'
//redux
import { useAppDispatch } from '~/redux/configStore'
import { addToCart, removeProductCart } from '~/redux/product/product.slice'
//
import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { Button } from '~/components/button'
import { QuantityController } from '~/components/quantityController'
import { useLocation } from 'react-router-dom'
import { PATH_PUBLIC_APP } from '~/constants/paths'

type CartItemProps = {
  isSmall?: boolean
  isFavorite?: boolean
  productCart: ProductCart
  isItemSelected?: boolean
  handleSelectItem?: (cartItemId: number) => void
}

function CartItem({ isSmall, productCart, isItemSelected, handleSelectItem, isFavorite }: CartItemProps) {
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  const [quantity, setQuantity] = useState<number | ''>(0)

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
      {!isSmall && (
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

      <div className='w-full flex gap-4'>
        <img
          src={productCart.image}
          alt={productCart.title}
          className={`${isSmall ? 'size-[68px] rounded-[4px]' : 'size-[139px] rounded-2xl'}`}
        />
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
            {!isSmall && <p className='text-blackMain/[.64]'>{productCart.category}</p>}
            {isSmall ? (
              <span className='text-[14px] font-customMedium text-blackMain/[.64]'>
                {productCart.numberItems} items
              </span>
            ) : (
              <p className='text-blackMain/[.64]'>
                Left: <span className='font-customSemiBold text-blackMain'>{productCart.numberItems} items</span>
              </p>
            )}
          </div>

          {isFavorite ? (
            <Button variant='outline' className='w-[196px] h-[44px]' onClick={handleAddToCart}>
              ADD TO BAG
            </Button>
          ) : (
            <div className='flex items-center justify-between'>
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
              <QuantityController
                isSmall={pathname !== PATH_PUBLIC_APP.cart.root}
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
  )
}

export default CartItem
