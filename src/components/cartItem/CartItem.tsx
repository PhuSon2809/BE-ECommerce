import { useEffect, useState } from 'react'
import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { Button } from '~/components/button'
import { QuantityController } from '~/components/quantityController'
import { useAppDispatch } from '~/redux/configStore'
import { addToCart, removeProductCart } from '~/redux/product/product.slice'

type CartItemProps = {
  productCart: ProductCart
  isFavorite?: boolean
}

function CartItem({ productCart, isFavorite }: CartItemProps) {
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = useState<number | ''>(0)

  const handleQuantity = (value: number | '') => {
    setQuantity(value)
  }

  const handleAddToCart = () => {
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
  }

  useEffect(() => {
    setQuantity(productCart.quantityInCart)
  }, [productCart])

  return (
    <div className='flex gap-4'>
      <img src={productCart.image} alt={productCart.title} className='size-[139px] rounded-2xl' />
      <div className='w-full flex flex-col justify-between'>
        <div>
          <div className='w-full flex justify-between'>
            <p className='text-[24px] font-bold'>{productCart.title}</p>
            <p className='text-[24px] font-semibold'>${productCart.price.toFixed(2)}</p>
          </div>
          <p className='text-blackMain/[.80]'>{productCart.category}</p>
          <p className='text-blackMain/[.80]'>
            Left: <span className='font-semibold'>{productCart.numberItems} items</span>
          </p>
        </div>

        {isFavorite ? (
          <Button variant='outline' className='w-[196px] h-[44px]' onClick={handleAddToCart}>
            ADD TO BAG
          </Button>
        ) : (
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <img src={images.icons.heart} alt='icon-heart' className='cursor-pointer' />
              <img
                src={images.icons.deleteIon}
                alt='icon-heart'
                className='cursor-pointer'
                onClick={() => dispatch(removeProductCart({ productId: productCart.id }))}
              />
            </div>
            <QuantityController
              isCart
              productInCart={productCart}
              max={productCart.numberItems}
              value={quantity}
              onDecrease={handleQuantity}
              onIncrease={handleQuantity}
              onType={handleQuantity}
              onFocusOut={handleQuantity}
            />
            {/* <div className='flex items-center gap-3'>
              <IconButton variant='outline' size='40'>
                <MinusIcon />
              </IconButton>
              <p className='text-[20px] font-semibold'>{productCart.quantityInCart}</p>
              <IconButton variant='outline' size='40'>
                <Plus />
              </IconButton>
            </div> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default CartItem
