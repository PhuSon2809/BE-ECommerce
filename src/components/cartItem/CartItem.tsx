import { ProductCart } from '~/@types/model'

type CartItemProps = {
  productCart: ProductCart
}

function CartItem({ productCart }: CartItemProps) {
  return (
    <div className='flex items-center'>
      <img src={productCart.image} alt={productCart.title} />
      <div>
        <p>{productCart.title}</p>
        <p>{productCart.price}</p>
      </div>
    </div>
  )
}

export default CartItem
