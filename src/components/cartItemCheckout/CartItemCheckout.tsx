import { ProductCart } from '~/@types/model'

type CartItemCheckoutProps = {
  productCart: ProductCart
  inOrder?: boolean
}

function CartItemCheckout({ productCart, inOrder = false }: CartItemCheckoutProps) {
  return (
    <div className={`w-full flex ${inOrder ? 'gap-3' : 'gap-5'}`}>
      <img
        src={productCart.image}
        alt={productCart.title}
        className={`${inOrder ? 'size-[72px]' : 'size-[80px]'} rounded-xl`}
      />
      <div className={`w-full flex ${inOrder ? 'items-center' : 'items-start'} justify-between`}>
        <div>
          <p className={`${inOrder ? 'text-[18px]' : 'text-[20px]'} font-customBold`}>{productCart.title}</p>
          <p className={`${inOrder ? 'text-[14px]' : 'text-[16px]'} opacity-[.64]`}>
            {productCart.category}
            {inOrder && <span>, 200g</span>}
          </p>
          {!inOrder && <p className='opacity-[.64]'>200 g</p>}
          {inOrder && <p className='text-[14px] opacity-[.64]'>Quantity: {productCart.quantityInCart}</p>}
        </div>
        {!inOrder && <p className='text-[20px] opacity-[.64]'>x{productCart.quantityInCart}</p>}
        <p className={`${inOrder ? 'text-[18px]' : 'text-[20px]'} font-customSemiBold`}>
          ${productCart.price.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

export default CartItemCheckout
