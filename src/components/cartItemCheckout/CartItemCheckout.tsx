import { ProductCart } from '~/@types/model'

type CartItemCheckoutProps = { productCart: ProductCart }

function CartItemCheckout({ productCart }: CartItemCheckoutProps) {
  return (
    <div className='w-full flex gap-5'>
      <img src={productCart.image} alt={productCart.title} className='size-[80px] rounded-xl' />
      <div className='w-full flex flex-col justify-between'>
        <div>
          <div className='w-full flex justify-between'>
            <p className='text-[20px] font-customBold'>{productCart.title}</p>
            <p className='text-[20px] opacity-[.64]'>x{productCart.quantityInCart}</p>
            <p className='text-[20px] font-customSemiBold'>${productCart.price.toFixed(2)}</p>
          </div>
          <p className='opacity-[.64]'>{productCart.category}</p>
          <p className='opacity-[.64]'>200 g</p>
        </div>
      </div>
    </div>
  )
}

export default CartItemCheckout
