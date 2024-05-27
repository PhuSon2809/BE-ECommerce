import { ProductInStorage } from '~/@types/models'

type CartItemCheckoutProps = {
  cartItem: ProductInStorage
  inOrder?: boolean
}

function CartItemCheckout({ cartItem, inOrder = false }: CartItemCheckoutProps) {
  return (
    <div className={`w-full flex ${inOrder ? 'gap-3' : 'gap-5'}`}>
      <img
        src={cartItem.image}
        alt={cartItem.title}
        className={`${inOrder ? 'size-[72px]' : 'size-[80px]'} rounded-xl`}
      />
      <div className={`w-full flex ${inOrder ? 'items-center' : 'items-start'} justify-between`}>
        <div>
          <p className={`${inOrder ? 'text-[18px]' : 'text-[20px]'} font-customBold`}>{cartItem.title}</p>
          <p className={`${inOrder ? 'text-[14px]' : 'text-[16px]'} opacity-[.64]`}>
            {cartItem.category}
            {inOrder && <span>, 200g</span>}
          </p>
          {!inOrder && <p className='opacity-[.64]'>200 g</p>}
          {inOrder && <p className='text-[14px] opacity-[.64]'>Quantity: {cartItem.quantityInCart}</p>}
        </div>
        {!inOrder && <p className='text-[20px] opacity-[.64]'>x{cartItem.quantityInCart}</p>}
        <div className='text-right'>
          <p className={`${inOrder ? 'text-[18px]' : 'text-[20px]'} font-customSemiBold`}>
            ${cartItem.price.toFixed(2)}
          </p>
          <p className={`${inOrder ? 'text-[14px]' : 'text-[14px]'} text-blackMain/[.64] line-through`}>
            ${cartItem.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartItemCheckout
